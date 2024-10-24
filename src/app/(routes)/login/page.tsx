'use client';

import { useFormik } from 'formik';
import {
  FormWrapper,
  AuthFooterText,
  AuthButton,
  EmailInput,
  PasswordInput,
} from '@/app/components/Auth';
import {
  FieldContainer,
  FieldWrapper,
} from '@/app/components/Common/FieldWrapper';
import CustomCheckbox from '@/app/components/Common/Checkbox';
import { CustomLink } from '@/app/components/Common/CustomLink';
import * as Yup from 'yup';

export default function SignInForm() {
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
        title="Sign In"
        footer={
          <AuthFooterText>
            Don&apos;t have an account?{' '}
            <CustomLink href="/register">Register Interest</CustomLink>
          </AuthFooterText>
        }
      >
        <FieldContainer>
          <EmailInput
            label="Email"
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email}
          />
          <PasswordInput
            label="Password"
            {...formik.getFieldProps('password')}
            error={formik.touched.password && formik.errors.password}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldWrapper wrapperClassName="flex items-center justify-between">
            <CustomCheckbox label="Remember me" id="remember" />
            <CustomLink href="/forgot-password">Forgot Password?</CustomLink>
          </FieldWrapper>
        </FieldContainer>
        <AuthButton type="submit">Login</AuthButton>
      </FormWrapper>
    </form>
  );
}
