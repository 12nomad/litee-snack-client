import { z } from 'zod';

export const searchShopValidationSchema = z.object({
  search: z
    .string()
    .min(3, { message: 'keyword must be at least 3 characters' }),
});
export type SearchShopValidationSchema = z.infer<
  typeof searchShopValidationSchema
>;

export const createShopValidationSchema = z.object({
  image: z.union([
    z.string().url(),
    z
      .any()
      .refine(
        (file) =>
          ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
            file?.[0]?.type,
          ),
        'Only .jpg, .jpeg, .png and .webp formats are supported.',
      )
      .refine((file) => file?.[0]?.size <= 5_000_000, `Max image size is 5MB.`),
    z.string().nullish(),
  ]),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  address: z.string().min(1, { message: 'Address is required' }),
});
export type CreateShopValidationSchema = z.infer<
  typeof createShopValidationSchema
>;

export const addProductValidationSchema = z.object({
  image: z.union([
    z.string().url(),
    z
      .any()
      .refine(
        (file) =>
          ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
            file?.[0]?.type,
          ),
        'Only .jpg, .jpeg, .png and .webp formats are supported.',
      )
      .refine((file) => file?.[0]?.size <= 5_000_000, `Max image size is 5MB.`),
    z.string().nullish(),
  ]),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  description: z.string().min(1, { message: 'Address is required' }),
  price: z
    .number({ invalid_type_error: 'Please provide a valid price' })
    .min(0.01, { message: 'Price is required' }),
  options: z
    .array(
      z.object({
        label: z
          .string()
          .min(2, { message: 'Name must be at least 2 characters' }),
        extra: z
          .number({ invalid_type_error: 'Please provide a valid price' })
          .min(0, { message: 'Price is required' })
          .optional(),
      }),
    )
    .optional(),
});
export type AddProductValidationSchema = z.infer<
  typeof addProductValidationSchema
>;

export const editShopValidationSchema = z.object({
  image: z.union([
    z.string().url(),
    z
      .any()
      .refine(
        (file) =>
          ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
            file?.[0]?.type,
          ),
        'Only .jpg, .jpeg, .png and .webp formats are supported.',
      )
      .refine((file) => file?.[0]?.size <= 5_000_000, `Max image size is 5MB.`),
    z.string().nullish(),
  ]),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  address: z.string().min(1, { message: 'Address is required' }),
});
export type EditShopValidationSchema = z.infer<typeof editShopValidationSchema>;
