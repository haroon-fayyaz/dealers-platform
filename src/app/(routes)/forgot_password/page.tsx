'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import {
  AuthButton,
  AuthFooterText,
  EmailInput,
  FormWrapper,
} from '@/app/components/Auth';
import { FieldContainer } from '@/app/components/Common/FieldWrapper';
import { CustomLink } from '@/app/components/Common/CustomLink';

export default function ForgotPassword() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push('/reset_password');
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
            isRequired
            error={formik.touched.email && formik.errors.email}
          />
        </FieldContainer>
        <AuthButton type="submit">Reset Password</AuthButton>
      </FormWrapper>
    </form>
  );
}
