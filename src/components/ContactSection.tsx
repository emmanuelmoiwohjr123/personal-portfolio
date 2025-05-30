import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const ContactSection: React.FC = () => {
  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      console.log('EmailJS Config:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        hasPublicKey: !!emailjsConfig.publicKey
      });

      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      console.log('EmailJS Response:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            GET IN TOUCH
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out,I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Phone className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Call Us:</h4>
                  <p className="text-gray-600">+231886175012/+231772578789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Mail className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Mail Us:</h4>
                  <p className="text-gray-600">emmanuelmmoiwohjr@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <MapPin className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Visit:</h4>
                  <p className="text-gray-600">Thinker's Village, RIA Highway</p>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} className={isSubmitting ? 'animate-spin' : ''} />
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;