import { useEffect, useState } from 'react';
import { IFormField } from '../../../../../interfaces/form-fields.interface';
import { FieldValues } from 'react-hook-form';

const useDynamicInput = (edit: boolean) => {
  const [editProfileFields, setEditProfileFields] = useState<
    IFormField<FieldValues>[]
  >([
    {
      label: 'Name: ',
      name: 'name',
      isDisabled: edit,
    },
    {
      label: 'E-mail: ',
      name: 'email',
      isDisabled: edit,
    },
  ]);

  useEffect(() => {
    setEditProfileFields((prev) =>
      prev.map((el) => ({ ...el, isDisabled: edit })),
    );
  }, [edit]);

  return { editProfileFields };
};

export default useDynamicInput;
