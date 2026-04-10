"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !phone) {
    return {
      status: "error",
      message: "Пожалуйста, заполните обязательные поля: имя и телефон.",
    };
  }

  // TODO: integrate with email service (Resend, Nodemailer) or CRM
  // For now, log to server console
  console.log("New contact form submission:", { name, company, phone, message });

  return {
    status: "success",
    message: "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
  };
}
