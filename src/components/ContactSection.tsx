// import React, { useState, useRef, useEffect } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import emailjs from '@emailjs/browser';
// import { emailjsConfig } from '../config/emailjs';

// const ContactSection: React.FC = () => {
//   useEffect(() => {
//     emailjs.init(emailjsConfig.publicKey);
//   }, []);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     try {
//       setIsSubmitting(true);
//       setSubmitStatus('idle');

//       console.log('EmailJS Config:', {
//         serviceId: emailjsConfig.serviceId,
//         templateId: emailjsConfig.templateId,
//         hasPublicKey: !!emailjsConfig.publicKey
//       });

//       const result = await emailjs.sendForm(
//         emailjsConfig.serviceId,
//         emailjsConfig.templateId,
//         formRef.current,
//         emailjsConfig.publicKey
//       );

//       console.log('EmailJS Response:', result);
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Failed to send email:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
//             GET IN TOUCH
//             <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"></span>
//           </h2>
//           <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
//             Have a project in mind or just want to connect? Feel free to reach out,I'm always open to new opportunities and collaborations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <div className="space-y-8">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-yellow-100">
//                   <Phone className="text-yellow-600" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900">Call Us:</h4>
//                   <p className="text-gray-600">+231886175012/+231772578789</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-yellow-100">
//                   <Mail className="text-yellow-600" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900">Mail Us:</h4>
//                   <p className="text-gray-600">emmanuelmmoiwohjr@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-yellow-100">
//                   <MapPin className="text-yellow-600" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900">Visit:</h4>
//                   <p className="text-gray-600">Thinker's Village, RIA Highway</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <input
//                 type="text"
//                 name="user_name"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="user_email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows={6}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//               <Send size={20} className={isSubmitting ? 'animate-spin' : ''} />
//             </button>

//             {/* Status Messages */}
//             {submitStatus === 'success' && (
//               <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
//                 Message sent successfully! I'll get back to you soon.
//               </div>
//             )}
//             {submitStatus === 'error' && (
//               <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                 Failed to send message. Please try again later.
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Globe, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

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
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 193, 7, 0.03) 0%, transparent 50%), linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #ffffff 100%)`
      }}
    >
      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200 to-teal-200 rounded-full opacity-20 animate-float"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block mb-4">
              GET IN <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">TOUCH</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to connect? Feel free to reach out, I'm always open to  
              <span className="font-semibold text-gray-800">new opportunities</span> and <span className="font-semibold text-gray-800">collaborations</span>.
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-yellow-500" />
                <span>Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="text-yellow-500" size={24} />
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you. Let's discuss how we can bring your ideas to life.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 group-hover:from-yellow-200 group-hover:to-orange-200 transition-colors duration-300">
                    <Phone className="text-yellow-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">Call Me:</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">+231886175012</p>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">+231772578789</p>
                    <p className="text-xs text-gray-500 mt-1">Available Mon-Fri, 9AM-6PM GMT</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-400">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-colors duration-300">
                    <Mail className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Email Me:</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">emmanuelmmoiwohjr@gmail.com</p>
                    <p className="text-xs text-gray-500 mt-1">I typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-400">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-100 to-teal-100 group-hover:from-green-200 group-hover:to-teal-200 transition-colors duration-300">
                    <MapPin className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">Visit Me:</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Thinker's Village, RIA Highway</p>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Monrovia, Liberia</p>
                    <p className="text-xs text-gray-500 mt-1">Available by appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Globe size={20} className="text-yellow-500" />
                Connect with me online
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/emmanuelmoiwohjr123" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="text-gray-700 group-hover:text-black transition-colors duration-300" size={20} />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Send me a message 🚀
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'name' 
                        ? 'border-yellow-400 ring-4 ring-yellow-100 transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-2 left-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded animate-fadeInUp">
                      What should I call you?
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'email' 
                        ? 'border-blue-400 ring-4 ring-blue-100 transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-2 left-3 bg-blue-400 text-white text-xs px-2 py-1 rounded animate-fadeInUp">
                      I'll use this to get back to you
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-green-400 ring-4 ring-green-100 transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute -top-2 left-3 bg-green-400 text-white text-xs px-2 py-1 rounded animate-fadeInUp">
                      Tell me about your project or idea
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-xl border border-green-200 flex items-center gap-3 animate-fadeInUp">
                    <CheckCircle className="text-green-600" size={20} />
                    <div>
                      <p className="font-semibold">Message sent successfully! 🎉</p>
                      <p className="text-sm text-green-600">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 rounded-xl border border-red-200 flex items-center gap-3 animate-fadeInUp">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div>
                      <p className="font-semibold">Oops! Something went wrong</p>
                      <p className="text-sm text-red-600">Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;