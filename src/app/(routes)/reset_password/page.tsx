'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthButton,
  AuthFooterText,
  FormWrapper,
  PasswordInput,
} from '@/app/components/Auth';
import { FieldContainer } from '@/app/components/Common/FieldWrapper';
import { CustomLink } from '@/app/components/Common/CustomLink';
import { PASSWORD_REGEX } from '@/utils/constants';

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          PASSWORD_REGEX,
          'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        )
        .required('Password is required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper
        title="Forgot Password"
        footer={
          <AuthFooterText>
            Back to <CustomLink href="/login">Sign In</CustomLink>
          </AuthFooterText>
        }
      >
        <FieldContainer wrapperClassName="mt-4">
          <p className="text-sm text-custom-gray">
            New password must be different from previous password.
          </p>
        </FieldContainer>
        <FieldContainer wrapperClassName="mt-8">
          <PasswordInput
            label="Password"
            {...formik.getFieldProps('password')}
            isRequired
            error={formik.touched.password && formik.errors.password}
          />
          <PasswordInput
            label="Confirm Password"
            {...formik.getFieldProps('confirm_password')}
            isRequired
            error={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
          />
        </FieldContainer>
        <AuthButton type="submit">Reset Password</AuthButton>
      </FormWrapper>
    </form>
  );
}
