'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Shield, Heart, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?[\d\s\-\(\)\.]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        consent: false
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50/60 via-emerald-50/40 to-green-100/30 relative overflow-hidden">
        {/* Floating success elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-40 h-40 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="text-white" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Thank You!</h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Your message has been sent successfully. I'll get back to you within 24 hours to discuss how we can work together on your journey to wellness.
            </p>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50 inline-block">
              <p className="text-slate-500 flex items-center">
                <Phone className="text-emerald-600 mr-2" size={16} />
                For immediate assistance, please call 
                <a href="tel:3235550192" className="text-emerald-600 hover:underline ml-1 font-semibold">(323) 555-0192</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50/60 via-emerald-50/40 to-green-100/30 relative overflow-hidden">
      {/* Floating calming elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 bg-emerald-200/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-green-200/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300/10 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full shadow-lg">
              <Heart className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600">
            Ready to take the first step? Let's start your journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-lg mr-3">
                  <MapPin className="text-white" size={20} />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-emerald-50/50 rounded-2xl hover:bg-emerald-50 transition-colors duration-200">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-full flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <a href="tel:3235550192" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200 text-lg">
                      (323) 555-0192
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Available during office hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-2xl hover:bg-green-50 transition-colors duration-200">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <a href="mailto:serena@blakepsychology.com" className="text-slate-600 hover:text-green-600 transition-colors duration-200 text-lg">
                      serena@blakepsychology.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-emerald-50/50 rounded-2xl hover:bg-emerald-50 transition-colors duration-200">
                  <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Address</h4>
                    <p className="text-slate-600 text-lg">
                      1287 Maplewood Drive<br />
                      Los Angeles, CA 90026
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Safe, private office space</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-2xl hover:bg-green-50 transition-colors duration-200">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-3 rounded-full flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Office Hours</h4>
                    <div className="text-slate-600 space-y-2">
                      <div className="flex items-center justify-between">
                        <span><strong>In-person:</strong> Tue & Thu</span>
                        <span className="text-emerald-600 font-semibold">10 AM–6 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span><strong>Virtual:</strong> Mon, Wed & Fri</span>
                        <span className="text-green-600 font-semibold">1 PM–5 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center text-slate-600">
                  <Shield className="text-emerald-500 mr-2" size={16} />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="flex items-center text-slate-600">
                  <Heart className="text-green-500 mr-2" size={16} />
                  <span>Confidential</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-emerald-600 mr-2" size={16} />
                  <span>Licensed PsyD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-emerald-100/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mr-3">
                <Send className="text-white" size={20} />
              </div>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.name ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-emerald-300 focus:border-emerald-500 hover:border-emerald-400'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 flex items-center"><span className="mr-1">⚠️</span>{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                      errors.phone ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-emerald-300 focus:border-emerald-500 hover:border-emerald-400'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    placeholder="(323) 555-0000"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600 flex items-center"><span className="mr-1">⚠️</span>{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                      errors.email ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-emerald-300 focus:border-emerald-500 hover:border-emerald-400'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 flex items-center"><span className="mr-1">⚠️</span>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  What brings you here? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.message ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-emerald-300 focus:border-emerald-500 hover:border-emerald-400'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-200 resize-none`}
                  placeholder="Tell me a bit about what you'd like to work on together..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600 flex items-center"><span className="mr-1">⚠️</span>{errors.message}</p>}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-slate-700 mb-2">
                  Preferred time to reach you *
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.preferredTime ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-emerald-300 focus:border-emerald-500 hover:border-emerald-400'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                  placeholder="e.g., Weekday mornings, evenings after 6pm"
                />
                {errors.preferredTime && <p className="mt-1 text-sm text-red-600 flex items-center"><span className="mr-1">⚠️</span>{errors.preferredTime}</p>}
              </div>

              <div className="flex items-start space-x-3 p-4 bg-emerald-50/50 rounded-xl">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-emerald-600 rounded border-emerald-300 focus:ring-2 focus:ring-emerald-200"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                  I agree to be contacted via phone or email to discuss scheduling and therapy services. Your information is kept strictly confidential. *
                </label>
              </div>
              {errors.consent && <p className="text-sm text-red-600 flex items-center"><span className="mr-1">⚠️</span>{errors.consent}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-3" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}