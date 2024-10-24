import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RadioGroupItem } from '@/components/ui/radio-group';
import {
  AuthButton,
  AuthFooterText,
  EmailInput,
  FormWrapper,
  PasswordInput,
} from '@/app/components/Auth';
import {
  withLabelAndRadioGroupItem,
  CustomRadioGroup,
} from '@/app/components/Common/RadioGroup';
import { CustomLabel } from '../Common/LabelInput';
import { FieldContainer, FieldWrapper } from '../Common/FieldWrapper';
import { CustomLink } from '../Common/CustomLink';
import { PASSWORD_REGEX } from '@/utils/constants';

const LabeledRadioGroupItem = withLabelAndRadioGroupItem(RadioGroupItem);

function Step1() {
  const formik = useFormik({
    initialValues: {
      register_as: 'dealer',
      want_to: 'sell',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string()
        .matches(
          PASSWORD_REGEX,
          'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        )
        .required('Password is required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
      register_as: Yup.string()
        .oneOf(['individual', 'dealer'], 'Must be either individual or dealer')
        .required('Register As is required'),
      want_to: Yup.string()
        .oneOf(
          ['sell', 'buy', 'buyandsell'],
          'Must be either sell, buy or buyandsell'
        )
        .required('I Want To is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper
        title="Register"
        footer={
          <AuthFooterText>
            Already have an account?&nbsp;
            <CustomLink href="/login">Sign In</CustomLink>
          </AuthFooterText>
        }
      >
        <FieldContainer wrapperClassName="mt-8">
          <FieldWrapper>
            <CustomLabel label="Register As" isRequired={true} />
            <CustomRadioGroup
              value={formik.values.register_as}
              onValueChange={formik.setFieldValue.bind(null, 'register_as')}
            >
              <LabeledRadioGroupItem
                label="Dealer"
                value="dealer"
                id="dealer"
                optionHint="(For businesses looking to trade multiple cars)"
                labelProps={{ className: 'text-black font-normal' }}
              />
              <LabeledRadioGroupItem
                label="Individual"
                value="individual"
                id="individual"
                optionHint="(For a person looking to list a one off car sale)"
                labelProps={{ className: 'text-black font-normal' }}
              />
            </CustomRadioGroup>
          </FieldWrapper>
        </FieldContainer>
        <FieldContainer>
          <FieldWrapper>
            <CustomLabel label="I Want To" isRequired={true} />
            <CustomRadioGroup
              value={formik.values.want_to}
              onValueChange={formik.setFieldValue.bind(null, 'want_to')}
            >
              <LabeledRadioGroupItem
                label="Sell cars with Dealers car.co.uk"
                value="sell"
                id="sell"
                labelProps={{ className: 'text-black font-normal' }}
              />
              <LabeledRadioGroupItem
                label="Buy cars from Dealers car.co.uk"
                value="buy"
                id="buy"
                labelProps={{ className: 'text-black font-normal' }}
              />
              <LabeledRadioGroupItem
                label="Buy & Sell cars with Dealers car.co.uk"
                value="buyandsell"
                id="buyandsell"
                labelProps={{ className: 'text-black font-normal' }}
              />
            </CustomRadioGroup>
          </FieldWrapper>
        </FieldContainer>
        <FieldContainer>
          <EmailInput
            label="Email"
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email}
          />
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
        <AuthButton>Sign Up</AuthButton>
      </FormWrapper>
    </form>
  );
}

export default Step1;
