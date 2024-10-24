'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthButton,
  AuthFooterText,
  EmailInput,
  FormWrapper,
} from '@/app/components/Auth';
import { FieldContainer } from '@/app/components/Common/FieldWrapper';
import { CustomLink } from '@/app/components/Common/CustomLink';

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
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
            Enter registered email address to change your password.
          </p>
        </FieldContainer>
        <FieldContainer wrapperClassName="mt-8">
          <EmailInput
            label="Email"
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email}
          />
        </FieldContainer>
        <AuthButton type="submit">Reset Password</AuthButton>
      </FormWrapper>
    </form>
  );
}
