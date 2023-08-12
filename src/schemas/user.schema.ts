import { z } from 'zod';

import { Role } from '../gql/generated/graphql';

export const signupValidationSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z
      .string()
      .min(1, { message: 'E-mail is required' })
      .email({ message: 'E-mail must be a valid e-mail' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    passwordConfirmation: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    role: z.nativeEnum(Role, {
      errorMap: (issue) => {
        switch (issue.code) {
          case 'invalid_enum_value':
            return { message: 'Please choose one of the options' };
          default:
            return { message: 'Role is required' };
        }
      },
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'Passwords do not match',
  });
export type SignupValidationSchema = z.infer<typeof signupValidationSchema>;

export const logInValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail must be a valid e-mail' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});
export type LogInValidationSchema = z.infer<typeof logInValidationSchema>;

export const accountVerificationValidationSchema = z.object({
  code: z.string().trim().min(1, { message: 'Verification code is required' }),
});
export type AccountVerificationValidationSchema = z.infer<
  typeof accountVerificationValidationSchema
>;

export const resetPasswordStepOneValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail must be a valid e-mail' }),
});
export type ResetPasswordStepOneValidationSchema = z.infer<
  typeof resetPasswordStepOneValidationSchema
>;

export const resetPasswordStepTwoValidationSchema = z.object({
  code: z.string().min(1, { message: 'Verification code is required' }),
});
export type ResetPasswordStepTwoValidationSchema = z.infer<
  typeof resetPasswordStepTwoValidationSchema
>;

export const resetPasswordStepThreeValidationSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    passwordConfirmation: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'Passwords do not match',
  });
export type ResetPasswordStepThreeValidationSchema = z.infer<
  typeof resetPasswordStepThreeValidationSchema
>;

export const profileValidationSchema = z.object({
  image: z.union([
    z.string(),
    z.string().url(),
    z
      .any()
      .refine((file?: FileList) => {
        if (!file) return true;
        if (file && file.length === 0) return true;
        if (file)
          return [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp',
          ].includes(file[0].type);
      }, 'only .jpg, .jpeg, .png and .webp formats are supported...')
      .refine((file?: FileList) => {
        if (!file) return true;
        if (file && file.length === 0) return true;
        if (file) return file?.[0]?.size <= 5_000_000;
      }, `max image size is 5MB...`),
  ]),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail must be a valid e-mail' }),
});
export type ProfileValidationSchema = z.infer<typeof profileValidationSchema>;
