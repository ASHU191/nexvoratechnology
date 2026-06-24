import emailjs from "@emailjs/browser";

// Initialize EmailJS (replace with your actual Service ID)
const SERVICE_ID = "service_irq9s0m"; // You'll provide this
const TEMPLATE_ID = "template_54idgqp"; // You'll provide this
const PUBLIC_KEY = "EsMbpQIc6geh29MHu"; // You'll provide this

// Add error logging for debugging (client-side only)
if (typeof window !== "undefined") {
  (window as any).__emailjsDebug = true;
}

export function initializeEmailJS() {
  emailjs.init(PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: "nexvoratechnology.online@gmail.com",
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        phone: data.phone,
        service: data.service,
        message: data.message,
        submitted_at: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Karachi",
        }),
      },
      PUBLIC_KEY
    );

    return {
      success: true,
      message: "Email sent successfully!",
      status: response.status,
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
      error,
    };
  }
}
