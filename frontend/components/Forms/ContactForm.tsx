// ContactForm.tsx

import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

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

const ValidationSchema = Yup.object({
  name: Yup.string().trim().min(2, "Too short").required("Required"),
  company: Yup.string().trim().max(128, "Too long").optional(),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .trim()
    .matches(
      // very lenient intl pattern; adjust to your needs
      /^\+?[0-9\s().-]{7,}$/,
      "Invalid phone number"
    )
    .required("Required"),
  message: Yup.string()
    .trim()
    .min(10, "Please provide a bit more detail")
    .required("Required"),
});

export const ContactForm: React.FC<Props> = ({
  recaptchaSiteKey,
  initialValues,
}) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

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
      setRecaptchaError("Please verify that you are not a robot.");
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
        toast.success(
          "✅ Your message has been sent! Somebody from our team will reach you shortly."
        );
        helpers.resetForm();
        recaptchaRef.current?.reset();
      } else {
        toast.error("❌ Failed to send your message. Please try again.");
      }
    } catch (err: any) {
      // Show a friendly error
      toast.error("⚠️ Something went wrong. Please try again later.");
      setRecaptchaError(
        err?.message || "Something went wrong. Please try again."
      );
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
            Name *
          </label>
          <Field
            className="input w-full"
            id="name"
            name="name"
            autoComplete="name"
          />
          <ErrorMessage className="text-error" name="name" component="div" />

          <label className="font-semibold" htmlFor="company">
            Company
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
            Phone *
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
            Message *
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            className="textarea w-full"
            rows={5}
            placeholder="How can we help?"
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
            {isSubmitting ? "Sending…" : "Send message"}
          </button>

          <p style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
            * required fields
          </p>
        </Form>
      )}
    </Formik>
  );
};
