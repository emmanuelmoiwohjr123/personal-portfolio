const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Log environment variable status (without exposing actual values)
console.log('EmailJS Environment Variables Status:', {
  hasServiceId: !!serviceId,
  hasTemplateId: !!templateId,
  hasPublicKey: !!publicKey
});

// Validate environment variables
if (!serviceId || !templateId || !publicKey) {
  console.error('Missing EmailJS environment variables:', {
    serviceId: !serviceId ? 'missing' : 'present',
    templateId: !templateId ? 'missing' : 'present',
    publicKey: !publicKey ? 'missing' : 'present'
  });
}

export const emailjsConfig = {
  serviceId,
  templateId,
  publicKey
};
