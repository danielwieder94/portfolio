import emailjs from "emailjs-com";

export type EmailParams = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  phoneNumber: string;
};

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  params: EmailParams,
  userId: string
) => {
  try {
    console.log(
      "params",
      params,
      "userId",
      userId,
      "serviceId",
      serviceId,
      "templateId",
      templateId
    );
    const response = await emailjs.send(serviceId, templateId, params, userId);
    console.log("Email successfully sent!", response);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
