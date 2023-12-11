import { useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import CustomInput from "../../theme/CustomInput";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { E164Number } from "libphonenumber-js";
import { sendEmail } from "../../utils/email/sendEmail";
import { EmailParams } from "../../utils/email/sendEmail";
import { motion } from "framer-motion";
import useFormValidation from "../../hooks/useFormValidation";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>();
  const [formOpacity, setFormOpacity] = useState(1); // New state for form opacity
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { errors, validate } = useFormValidation([
    "first_name",
    "last_name",
    "company",
    "email",
    "phone_number",
  ]);

  const form = useRef<HTMLFormElement>(null);
  // Handle changes to the phone number input field
  const handlePhoneNumberChange = (value: E164Number | undefined) => {
    if (!value || isPossiblePhoneNumber(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      const isFormValid = validate(formData);
      const formDataObject = Object.fromEntries(formData) as EmailParams;
      if (isFormValid) {
        console.log("form valid");
        // await sendEmail(
        //   process.env.REACT_APP_EMAIL_SERVICE_ID || "",
        //   process.env.REACT_APP_EMAIL_TEMPLATE_ID || "",
        //   formDataObject,
        //   process.env.REACT_APP_EMAIL_USER_ID || ""
        // );
      }

      console.log("submitted");
      setIsSubmitted(true);
      setFormOpacity(0); // Start fading out the form
      setTimeout(() => {
        setIsSubmitted(true);
        setShowSuccessMessage(true); // Show success message after a delay
      }, 500); // Adjust delay as needed
    }
  };
  return (
    <section id="contact" className="w-full fade-out">
      <div className="form-wrapper isolate mt-[40%] -mb-[10%] px-6 pb-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-3xl mb-8 font-bold tracking-tight text-slate-300/75 sm:text-4xl">
            Contact me
          </h2>
        </div>
        {!isSubmitted || !showSuccessMessage ? (
          <form
            ref={form}
            action="#"
            method="POST"
            className={`form mx-auto ${isSubmitted ? "fade-out" : ""}`}
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ opacity: formOpacity, transition: "opacity 0.5s ease" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-slate-300/75 bg-transparent border-0 border-b-2 border-slate-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500/50 focus:outline-none focus:ring-0 focus:border-blue-600/50 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 dark:focus:border-blue-500/50 peer-focus:dark:text-blue-500/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-slate-300/75 bg-transparent border-0 border-b-2 border-slate-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500/50 focus:outline-none focus:ring-0 focus:border-blue-600/50 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 dark:focus:border-blue-500/50 peer-focus:dark:text-blue-500/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-slate-300/75 bg-transparent border-0 border-b-2 border-slate-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500/50 focus:outline-none focus:ring-0 focus:border-blue-600/50 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 dark:focus:border-blue-500/50 peer-focus:dark:text-blue-500/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-slate-300/75 bg-transparent border-0 border-b-2 border-slate-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500/50 focus:outline-none focus:ring-0 focus:border-blue-600/50 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 dark:focus:border-blue-500/50 peer-focus:dark:text-blue-500/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              {/* Phone number field with country prefix */}
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="phone-number"
                  className="peer-focus:font-medium block text-sm leading-6 text-slate-300"
                >
                  Phone number
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="country-select text-sm text-slate-300/75"
                  inputComponent={CustomInput}
                  defaultCountry="IL"
                  international
                  withCountryCallingCode
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-slate-300/75"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    style={{
                      backgroundColor: "transparent",
                    }}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-300/75 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500/50 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* <Switch.Group as="div" className=" mt-2 flex gap-x-4 sm:col-span-2">
              <div className="flex items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? " bg-white/75" : "bg-black/75",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-slate-500 shadow-sm ring-1 ring-red-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-slate-300/75">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-blue-500/75">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group> */}
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-500/50 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Let's talk
              </button>
            </div>
          </form>
        ) : (
          <div
            className="wrapper fade-in mb-5 mt-[20%] group "
            style={{
              opacity: formOpacity === 0 ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <p className=" text-slate-300/75 success-message ">
              Message sent successfully, We'll talk soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
