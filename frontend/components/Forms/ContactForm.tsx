// ContactForm.tsx

import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { useTranslation } from "@/providers/TranslationProvider";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type Props = {
  /** Your site key from Google reCAPTCHA admin console */
  recaptchaSiteKey: string;
  /** Optional: initial values */
  initialValues?: Partial<FormValues>;
};

export const ContactForm: React.FC<Props> = ({
  recaptchaSiteKey,
  initialValues,
}) => {
  const { dict } = useTranslation();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const ValidationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, dict["form-validations"]["too-short"])
      .required(dict["form-validations"].required),
    company: Yup.string()
      .trim()
      .max(128, dict["form-validations"]["too-long"])
      .optional(),
    email: Yup.string()
      .email(dict["form-validations"]["invalid-email"])
      .required(dict["form-validations"].required),
    phone: Yup.string()
      .trim()
      .matches(
        // very lenient intl pattern; adjust to your needs
        /^\+?[0-9\s().-]{7,}$/,
        dict["form-validations"]["invalid-phone"]
      )
      .required(dict["form-validations"].required),
    message: Yup.string()
      .trim()
      .min(10, dict["form-validations"]["more-detail"])
      .required(dict["form-validations"].required),
  });

  const defaultValues: FormValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    ...initialValues,
  };

  const handleSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    setRecaptchaError(null);

    // Grab the token (v2 Checkbox or v2 Invisible)
    const token = recaptchaRef.current?.getValue() || "";
    if (!token) {
      setRecaptchaError(dict.contacts["recaptcha-error"]);
      helpers.setSubmitting(false);
      return;
    }

    try {
      const formData = {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(dict.contacts["email-success"]);
        helpers.resetForm();
        recaptchaRef.current?.reset();
      } else {
        toast.error(dict.contacts["email-error"]);
      }
    } catch (err: any) {
      // Show a friendly error
      toast.error(dict.contacts["general-error"]);
      setRecaptchaError(err?.message || dict.contacts["general-error"]);
      // It’s often good to reset the token after a failed submit:
      recaptchaRef.current?.reset();
    } finally {
      helpers.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
      validateOnBlur
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form
          noValidate
          aria-labelledby="contactFormTitle"
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          <label className="font-semibold" htmlFor="name">
            {dict.contacts["name"]} *
          </label>
          <Field
            className="input w-full"
            id="name"
            name="name"
            autoComplete="name"
          />
          <ErrorMessage className="text-error" name="name" component="div" />

          <label className="font-semibold" htmlFor="company">
            {dict.contacts["company"]}
          </label>
          <Field
            className="input w-full"
            id="company"
            name="company"
            autoComplete="organization"
          />
          <ErrorMessage className="text-error" name="company" component="div" />

          <label className="font-semibold" htmlFor="email">
            Email *
          </label>
          <Field
            className="input w-full"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
          />
          <ErrorMessage className="text-error" name="email" component="div" />

          <label className="font-semibold" htmlFor="phone">
            {dict.contacts["phone"]} *
          </label>
          <Field
            className="input w-full"
            id="phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
          />
          <ErrorMessage className="text-error" name="phone" component="div" />

          <label className="font-semibold" htmlFor="message">
            {dict.contacts["message"]} *
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            className="textarea w-full"
            rows={5}
            placeholder={dict.contacts["textarea-placeholder"]}
          />
          <ErrorMessage className="text-error" name="message" component="div" />

          {/* reCAPTCHA (v2 Checkbox). For v2 Invisible, set size="invisible" and call execute() before submit */}
          <div aria-live="polite" aria-atomic="true" className="overflow-auto">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaSiteKey}
              onChange={() => {
                // Clear any previous error when user completes the challenge
                setRecaptchaError(null);
              }}
            />
            {recaptchaError && (
              <div style={{ color: "crimson", marginTop: 6 }}>
                {recaptchaError}
              </div>
            )}
          </div>

          <button
            className="btn btn-md btn-primary disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
            style={{ marginTop: 8 }}
          >
            {isSubmitting
              ? dict.contacts["sending"]
              : dict.contacts["send-message"]}
          </button>

          <p style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
            * {dict.contacts["required-fields"]}
          </p>
        </Form>
      )}
    </Formik>
  );
};
