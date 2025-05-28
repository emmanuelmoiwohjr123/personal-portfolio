export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Validate environment variables
if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
    !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  console.error('Missing EmailJS environment variables. Please check your .env file.');
}
