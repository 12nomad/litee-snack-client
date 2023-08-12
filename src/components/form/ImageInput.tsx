import {
  FieldErrors,
  FieldValue,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

interface IImageInput<T extends FieldValues> {
  label: string;
  isDisabled?: boolean;
  name: FieldValue<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const ImageInput = <T extends FieldValues>({
  errors,
  label,
  register,
  name,
  isDisabled = true,
}: IImageInput<T>) => {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 "
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        aria-describedby="image_help"
        id={name}
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/webp"
        disabled={!isDisabled}
        {...register(name)}
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="image_help"
      >
        JPG, JPEG, PNG or WEBP (MAX. 5MB).
      </p>
      {errors[name] && (
        <p role="alert" className="text-xs text-rose-700 mt-2">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default ImageInput;
