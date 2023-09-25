import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Tooltip } from "flowbite-react";
import { useState } from "react";
import { BiMessageEdit } from "react-icons/bi";

import {
  ProfileValidationSchema,
  profileValidationSchema,
} from "../../../../schemas/user.schema";
import useUserQuery from "../../../../hooks/useUserQuery";
import { uploadImage } from "../../../../utils/cloudinary.util";
import mutationService from "../../../../services/mutation.service";
import ContentWrapper from "../../../../components/ui/ContentWrapper";
import Input from "../../../../components/form/Input";
import SubmitButton from "../../../../components/form/SubmitButton";
import useDynamicInput from "./hooks/useDynamicInput";
import ImageInput from "../../../../components/form/ImageInput";

const EditProfile = () => {
  const [edit, setEdit] = useState(false);
  const [uploadState, setuploadState] = useState({
    uploadLoading: false,
    uploadError: "",
  });
  const { editProfileFields } = useDynamicInput(edit);
  const user = useUserQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ProfileValidationSchema>({
    resolver: zodResolver(profileValidationSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      image: user?.image || "",
    },
  });

  const onSuccess = () => {
    reset();
    setEdit(false);
  };
  const { mutate, isLoading, error } = mutationService.editProfile(onSuccess);

  const onSubmit = async ({ email, name, image }: ProfileValidationSchema) => {
    setuploadState({ uploadError: "", uploadLoading: true });

    let currentImage = image;
    if (image && image instanceof FileList && image.length > 0) {
      const { data, error } = await uploadImage(image[0]);
      if (error) {
        setuploadState({ uploadError: error, uploadLoading: false });

        return;
      }

      currentImage = data?.url;
    } else {
      currentImage = user?.image;
    }

    mutate({
      editUserProfileInput: {
        name,
        email,
        image: currentImage,
        prevEmail: user ? user.email! : "",
      },
    });
  };

  return (
    <ContentWrapper>
      <section className="grid w-full place-items-center text-center">
        <Helmet>
          <title>Profile | Litee Snack🍔</title>
        </Helmet>

        <div>
          <div className="md:w-[422px] bg-white rounded-lg shadow-sm text-left border">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center items-center gap-1">
                <h1 className="text-xl font-medium leading-tight tracking-tight md:text-2xl">
                  Your Profile.
                </h1>
                {!edit && (
                  <Tooltip content="Edit Profile">
                    <BiMessageEdit
                      size={25}
                      className="cursor-pointer text-rusty-red"
                      onClick={() => setEdit((prev) => !prev)}
                    />
                  </Tooltip>
                )}
              </div>
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
                        alt={user?.name || "user avatar"}
                        className="rounded-full w-32 h-32  object-cover"
                      />
                    )}
                  {(!watch("image") || typeof watch("image") === "string") && (
                    <img
                      src={
                        user?.image ||
                        "https://static.thenounproject.com/png/4035892-200.png"
                      }
                      alt={user?.name || "user avatar"}
                      className="rounded-full w-32 h-32  object-cover"
                    />
                  )}
                </div>
                {edit && (
                  <ImageInput
                    label="Change Profile Image: "
                    name="image"
                    errors={errors}
                    register={register}
                    isDisabled={edit}
                  />
                )}
                {editProfileFields.map((el) => (
                  <Input
                    key={el.name}
                    name={el.name}
                    isDisabled={el.isDisabled}
                    label={el.label}
                    register={register}
                    errors={errors}
                  />
                ))}
                {edit && (
                  <SubmitButton
                    isLoading={uploadState.uploadLoading || isLoading}
                    error={uploadState.uploadError || error}
                    label="Confirm"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default EditProfile;
