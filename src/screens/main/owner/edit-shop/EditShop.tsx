import { Helmet } from "react-helmet-async";
import ContentWrapper from "../../../../components/ui/ContentWrapper";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditShopValidationSchema,
  editShopValidationSchema,
} from "../../../../schemas/shop.schema";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ImageInput from "../../../../components/form/ImageInput";
import { IFormField } from "../../../../interfaces/form-fields.interface";
import Input from "../../../../components/form/Input";
import SubmitButton from "../../../../components/form/SubmitButton";
import mutationService from "../../../../services/mutation.service";
import { uploadImage } from "../../../../utils/cloudinary.util";
import CategoryInput from "../../../../components/form/CategoryInput";

const editShopFields: IFormField<FieldValues>[] = [
  {
    label: "Name: ",
    name: "name",
  },
  {
    label: "Address: ",
    name: "address",
  },
];

interface ILocationState {
  shopId: number;
  name: string;
  address: string;
  image: string;
  categories: string[];
}

const EditShop = () => {
  const location = useLocation();
  const state = location.state as ILocationState;
  const [currentCategory, setCurrentCategory] = useState<string[]>(
    state.categories || []
  );
  const [currentCategoryError, setCurrentCategoryError] = useState("");
  const [uploadState, setuploadState] = useState({
    uploadLoading: false,
    uploadError: "",
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<EditShopValidationSchema>({
    resolver: zodResolver(editShopValidationSchema),
    defaultValues: {
      name: state.name,
      address: state.address,
      image: state.image || null,
    },
  });

  if (!state || !state.shopId) return <Navigate to="/" replace />;

  const onSuccess = () => {
    reset();
    navigate(`/${state.shopId}`);
  };
  const { mutate, isLoading, error } = mutationService.editShop(onSuccess);

  const onSubmit = async ({
    address,
    name,
    image,
  }: EditShopValidationSchema) => {
    setCurrentCategoryError("");
    setuploadState({ uploadError: "", uploadLoading: true });

    if (currentCategory.length < 1) {
      setCurrentCategoryError("Select at least one category...");
      setuploadState({ uploadError: "", uploadLoading: false });
      return;
    }

    let currentImage = image;
    if (image && image instanceof FileList && image.length > 0) {
      const { data, error } = await uploadImage(image[0]);
      if (error) {
        setuploadState({ uploadError: error, uploadLoading: false });

        return;
      }

      currentImage = data?.url;
    } else {
      currentImage = state.image;
    }

    mutate({
      editShopInput: {
        shopId: state.shopId,
        name,
        address,
        image: currentImage,
        category: currentCategory,
      },
    });
  };

  return (
    <ContentWrapper>
      <section className="grid w-full place-items-center text-center">
        <Helmet>
          <title>Edit Shop | Litee Snack🍔</title>
        </Helmet>

        <div>
          <div className="md:w-[422px] bg-white rounded-lg shadow-sm text-left">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-medium leading-tight tracking-tight md:text-2xl">
                Edit Shop Info.
              </h1>
              <form
                className="space-y-4 md:space-y-6 text-rusty-red"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid place-items-center">
                  {watch("image") &&
                    watch("image") instanceof FileList &&
                    watch("image").length > 0 && (
                      <img
                        src={URL.createObjectURL(watch("image")[0])}
                        alt={state.name || "user avatar"}
                        className="rounded-full w-32 h-32  object-cover"
                      />
                    )}
                  {(!watch("image") || typeof watch("image") === "string") && (
                    <img
                      src={
                        state.image ||
                        "https://static.thenounproject.com/png/4035892-200.png"
                      }
                      alt={state.name || "user avatar"}
                      className="rounded-full w-32 h-32  object-cover"
                    />
                  )}
                </div>

                <ImageInput
                  label="Change Shop Image: "
                  name="image"
                  errors={errors}
                  register={register}
                />

                {editShopFields.map((el) => (
                  <Input
                    key={el.name}
                    name={el.name}
                    label={el.label}
                    register={register}
                    errors={errors}
                  />
                ))}

                <CategoryInput
                  currentCategory={currentCategory}
                  currentCategoryError={currentCategoryError}
                  setCurrentCategory={setCurrentCategory}
                />

                <SubmitButton
                  isLoading={uploadState.uploadLoading || isLoading}
                  error={uploadState.uploadError || error}
                  label="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default EditShop;
