import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import {
  AddProductValidationSchema,
  addProductValidationSchema,
} from "../../../../schemas/shop.schema";
import { uploadImage } from "../../../../utils/cloudinary.util";
import mutationService from "../../../../services/mutation.service";
import SubmitButton from "../../../../components/form/SubmitButton";
import { IFormField } from "../../../../interfaces/form-fields.interface";
import Input from "../../../../components/form/Input";
import ImageInput from "../../../../components/form/ImageInput";
import ContentWrapper from "../../../../components/ui/ContentWrapper";

const addProductFields: IFormField<FieldValues>[] = [
  {
    label: "Name: ",
    name: "name",
  },
  {
    label: "Description: ",
    name: "description",
  },
];

const AddProduct = () => {
  const params = useParams<{ shopId: string }>();
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
    control,
  } = useForm<AddProductValidationSchema>({
    resolver: zodResolver(addProductValidationSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  if (!params.shopId) return <Navigate to="/" replace />;

  const onSuccess = () => {
    reset();
    navigate(`/${params.shopId}`);
  };
  const { mutate, isLoading, error } = mutationService.addProduct(onSuccess);

  const onSubmit = async ({
    name,
    image,
    description,
    price,
    options,
  }: AddProductValidationSchema) => {
    setuploadState({ uploadError: "", uploadLoading: true });

    let currentImage: string | undefined;
    if (image instanceof FileList && image.length > 0) {
      const { data, error } = await uploadImage(image[0]);
      if (error) {
        setuploadState({ uploadError: error, uploadLoading: false });
        return;
      }

      currentImage = data?.url;
    } else {
      setuploadState({
        uploadError: "Please upload a shop image...",
        uploadLoading: false,
      });
      return;
    }

    mutate({
      createProductInput: {
        description,
        name,
        price,
        shopId: +params.shopId!,
        options,
        image: currentImage,
      },
    });
  };

  return (
    <ContentWrapper>
      <Helmet>
        <title>Add Product | Litee Snack🍔</title>
      </Helmet>

      <section className="grid w-full place-items-center text-center">
        <div>
          <h2
            className="text-left mb-4 flex items-center gap-2 text-lg underline cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeftCircle /> Back to shop
          </h2>
          <div className="md:w-[422px] bg-white rounded-lg shadow-sm text-left border">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-medium leading-tight tracking-tight md:text-2xl">
                Add New Product.
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
                        alt="shop image"
                        className="rounded-full w-32 h-32  object-cover"
                      />
                    )}
                </div>

                <ImageInput
                  name="image"
                  label="Upload Product Image:"
                  errors={errors}
                  register={register}
                />

                {addProductFields.map((el) => (
                  <Input
                    key={el.name}
                    name={el.name}
                    label={el.label}
                    register={register}
                    errors={errors}
                  />
                ))}

                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm text-gray-900 "
                  >
                    Price (USD):
                  </label>
                  <input
                    type="number"
                    step={0.01}
                    id="price"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                      errors.price?.message
                        ? "focus:ring-rose-700 focus:border-rose-700"
                        : "focus:ring-sky-700 focus:border-sky-700"
                    }`}
                    placeholder="••••••••"
                    {...register("price", { valueAsNumber: true, min: 0 })}
                  />
                  {errors.price?.message && (
                    <p role="alert" className="text-xs text-rose-700 mt-2">
                      {errors.price?.message}
                    </p>
                  )}
                </div>

                {/* TODO: Product Options */}
                <div>
                  <p
                    className="flex items-center gap-1 text-gray-900 font-medium cursor-pointer"
                    onClick={() => append({ label: "" })}
                  >
                    <IoMdAddCircleOutline /> <span>Add options</span>
                  </p>

                  {fields.map((field, index) => (
                    <div key={field.id} className="flex items-start gap-2 mt-2">
                      <div>
                        <input
                          type="text"
                          id={`options.${index}.label`}
                          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                            errors.options?.[index]?.label?.message
                              ? "focus:ring-rose-700 focus:border-rose-700"
                              : "focus:ring-sky-700 focus:border-sky-700"
                          }`}
                          placeholder="label"
                          {...register(`options.${index}.label`, {
                            minLength: 2,
                            required: true,
                          })}
                        />
                        {errors.options?.[index]?.label?.message && (
                          <p
                            role="alert"
                            className="text-xs text-rose-700 mt-2"
                          >
                            {errors.options?.[index]?.label?.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="number"
                          step={0.01}
                          id={`options.${index}.extra`}
                          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                            errors.options?.[index]?.extra?.message
                              ? "focus:ring-rose-700 focus:border-rose-700"
                              : "focus:ring-sky-700 focus:border-sky-700"
                          }`}
                          placeholder="extra (0 if free)"
                          {...register(`options.${index}.extra`, {
                            valueAsNumber: true,
                            min: 0,
                          })}
                        />
                        {errors.options?.[index]?.extra?.message && (
                          <p
                            role="alert"
                            className="text-xs text-rose-700 mt-2"
                          >
                            {errors.options?.[index]?.extra?.message}
                          </p>
                        )}
                      </div>
                      <Tooltip content="Delete Option">
                        <TiDelete
                          size={30}
                          className="cursor-pointer mt-2"
                          onClick={() => remove(+field.id)}
                        />
                      </Tooltip>
                    </div>
                  ))}
                </div>

                <SubmitButton
                  error={uploadState.uploadError || error}
                  isLoading={uploadState.uploadLoading || isLoading}
                  label="Add"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default AddProduct;
