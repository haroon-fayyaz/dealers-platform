'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { withLabelAndInput } from '@/app/components/Common/LabelInput';
import { Input } from '@/components/ui/input';
import { AuthButton, FormWrapper } from '../Auth';
import CustomCheckbox from '../Common/Checkbox';
import { CustomLink } from '../Common/CustomLink';
import { FieldContainer, FieldWrapper } from '../Common/FieldWrapper';
import { ErrorHelperText } from '../Common/ErrorHelperText';

const LabeledInput = withLabelAndInput(Input);
const LabeledSelect = withLabelAndInput(Select);

function Step2() {
  const formik = useFormik({
    initialValues: {
      company_name: '',
      contact_name: '',
      contact_telephone: '',
      company_type: '',
      business_type: '',
      agree_to_terms: false,
    },
    validationSchema: Yup.object({
      company_name: Yup.string().required('Company Name is required'),
      contact_name: Yup.string().required('Contact Name is required'),
      contact_telephone: Yup.string().required('Contact Telephone is required'),
      company_type: Yup.string().required('Company Type is required'),
      business_type: Yup.string().required('Business Type is required'),
      agree_to_terms: Yup.boolean().oneOf([true], 'Agree to Terms is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper title="Complete Registration">
        <LabeledInput
          label="Company Name"
          id="company_name"
          wrapperClassName="mt-8"
          isRequired
          placeholder="Company Name"
          {...formik.getFieldProps('company_name')}
          error={formik.touched.company_name && formik.errors.company_name}
        />
        <LabeledInput
          label="Contact Name"
          id="contact_name"
          isRequired
          placeholder="Contact Name"
          {...formik.getFieldProps('contact_name')}
          error={formik.touched.contact_name && formik.errors.contact_name}
        />
        <LabeledInput
          label="Contact Telephone Number"
          id="contact_telephone"
          isRequired
          type="tel"
          placeholder="Contact Telephone Number"
          {...formik.getFieldProps('contact_telephone')}
          error={
            formik.touched.contact_telephone && formik.errors.contact_telephone
          }
        />

        <LabeledSelect
          label="Company Type"
          id="company_type"
          onValueChange={(value) => formik.setFieldValue('company_type', value)}
          isRequired
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Company Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sole_trader">Sole Trader</SelectItem>
            <SelectItem value="limited_company">LTD Company</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </LabeledSelect>
        <ErrorHelperText
          error={formik.touched.company_type && formik.errors.company_type}
        />

        <LabeledSelect
          label="Business Type"
          id="business_type"
          onValueChange={(value) =>
            formik.setFieldValue('business_type', value)
          }
          isRequired
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Business Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="motor_trader">Motor Trader</SelectItem>
            <SelectItem value="car_breaker">Car Breaker</SelectItem>
            <SelectItem value="vehicle_exporter">Vehicle Exporter</SelectItem>
          </SelectContent>
        </LabeledSelect>
        <ErrorHelperText
          error={formik.touched.business_type && formik.errors.business_type}
        />

        <FieldContainer>
          <FieldWrapper>
            <CustomCheckbox
              label={
                <span>
                  I agree to the&nbsp;
                  <CustomLink href="/terms-and-conditions">
                    Terms of Service
                  </CustomLink>
                  &nbsp;and&nbsp;
                  <CustomLink href="/privacy-policy">Privacy Policy</CustomLink>
                </span>
              }
              id="agree_to_terms"
              onChange={formik.setFieldValue.bind(null, 'agree_to_terms')}
              onBlur={formik.setFieldTouched.bind(null, 'agree_to_terms')}
            />
            {formik.touched.agree_to_terms && formik.errors.agree_to_terms && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.agree_to_terms}
              </p>
            )}
          </FieldWrapper>
        </FieldContainer>
        <AuthButton>Submit</AuthButton>
      </FormWrapper>
    </form>
  );
}

export default Step2;
