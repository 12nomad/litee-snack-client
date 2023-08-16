import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  CreateShopValidationSchema,
  createShopValidationSchema,
} from '../../../../schemas/shop.schema';
import { uploadImage } from '../../../../utils/cloudinary.util';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import mutationService from '../../../../services/mutation.service';
import { IFormField } from '../../../../interfaces/form-fields.interface';
import Input from '../../../../components/form/Input';
import SubmitButton from '../../../../components/form/SubmitButton';
import ImageInput from '../../../../components/form/ImageInput';
import CategoryInput from '../../../../components/form/CategoryInput';

const createShopFields: IFormField<FieldValues>[] = [
  {
    label: 'Name: ',
    name: 'name',
  },
  {
    label: 'Address: ',
    name: 'address',
  },
];

const CreateShop = () => {
  const [uploadState, setuploadState] = useState({
    uploadLoading: false,
    uploadError: '',
  });
  const [currentCategory, setCurrentCategory] = useState<string[]>([]);
  const [currentCategoryError, setCurrentCategoryError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CreateShopValidationSchema>({
    resolver: zodResolver(createShopValidationSchema),
  });
  const onSuccess = () => {
    reset();
    navigate('/');
  };
  const { mutate, isLoading, error } = mutationService.createShop(onSuccess);

  const onSubmit = async ({
    name,
    image,
    address,
  }: CreateShopValidationSchema) => {
    setCurrentCategoryError('');
    setuploadState({ uploadError: '', uploadLoading: true });

    if (currentCategory.length < 1) {
      setCurrentCategoryError('Select at least one category...');
      setuploadState({ uploadError: '', uploadLoading: false });
      return;
    }

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
        uploadError: 'Please upload a shop image...',
        uploadLoading: false,
      });
      return;
    }

    mutate({
      createShopInput: {
        address,
        name,
        image: currentImage,
        category: currentCategory,
      },
    });
  };

  return (
    <ContentWrapper>
      <Helmet>
        <title>Create Shop | Litee Snack🍔</title>
      </Helmet>

      <section className="grid w-full place-items-center text-center">
        <div>
          <div className="md:w-[422px] bg-white rounded-lg shadow-sm text-left">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-medium leading-tight tracking-tight md:text-2xl">
                Create New Shop.
              </h1>

              <form
                className="space-y-4 md:space-y-6 text-rusty-red"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid place-items-center">
                  {watch('image') &&
                    watch('image') instanceof FileList &&
                    watch('image').length > 0 && (
                      <img
                        src={URL.createObjectURL(watch('image')[0])}
                        alt="shop image"
                        className="rounded-full w-32 h-32  object-cover"
                      />
                    )}
                </div>

                <ImageInput
                  label="Upload Shop Image: "
                  name="image"
                  errors={errors}
                  register={register}
                />

                {createShopFields.map((el) => (
                  <Input
                    key={el.name}
                    name={el.name}
                    label={el.label}
                    type={el.type}
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
                  label="Confirm"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default CreateShop;
