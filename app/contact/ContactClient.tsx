"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#EEEEEE] py-12"
      >
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-poppins text-[#757575] text-sm font-medium mb-2">
              Get In Touch
            </p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto mb-4" />
            <h1
              className="font-poppins text-[#505050] font-bold mb-4"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: "1.2" }}
            >
              Contact Our Expert Team
            </h1>
            <p
              className="font-poppins text-[#757575] max-w-2xl mx-auto"
              style={{ fontSize: "20px", lineHeight: "30px" }}
            >
              Have questions about your career path? Reach out to us and our counselors will get back to you within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Phone */}
              <div className="bg-white border border-[#EEEEEE] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFF5F5] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#C20000]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-[#333333] text-lg mb-1">
                      Phone
                    </h3>
                    <p className="font-poppins text-[#757575] text-sm mb-2">
                      Call us during business hours
                    </p>
                    <a href="tel:+919670699777" className="font-poppins font-semibold text-[#C20000] hover:text-[#B30000] transition-colors">
                      +91 9670699777
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white border border-[#EEEEEE] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFF5F5] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#C20000]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-[#333333] text-lg mb-1">
                      Email
                    </h3>
                    <p className="font-poppins text-[#757575] text-sm mb-2">
                      Send us an email anytime
                    </p>
                    <a href="mailto:jeetfoundation2016@gmail.com" className="font-poppins font-semibold text-[#C20000] hover:text-[#B30000] transition-colors break-all">
                      jeetfoundation2016@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white border border-[#EEEEEE] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFF5F5] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#C20000]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-[#333333] text-lg mb-1">
                      Address
                    </h3>
                    <p className="font-poppins text-[#757575] text-sm">
                      5/126 Vikash Khand<br />
                      Gomtinagar, Lucknow (U.P) - 226010
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white border border-[#EEEEEE] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFF5F5] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#C20000]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-[#333333] text-lg mb-1">
                      Business Hours
                    </h3>
                    <div className="font-poppins text-[#757575] text-sm space-y-1">
                      <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div>Sat: 10:00 AM - 4:00 PM</div>
                      <div>Sun: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-[#EEEEEE] rounded-xl p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-[#4CAF50]" />
                    </div>
                    <h3 className="font-poppins font-bold text-[#333333] text-2xl mb-2">
                      Thank You!
                    </h3>
                    <p className="font-poppins text-[#757575] text-center">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000] transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="Career Guidance">Career Guidance</option>
                        <option value="Course Information">Course Information</option>
                        <option value="Admission Query">Admission Query</option>
                        <option value="Scholarship">Scholarship</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your career goals and how we can help..."
                        rows={5}
                        className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#C20000] text-white font-poppins font-semibold rounded-lg hover:bg-[#B30000] transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>

                    <p className="font-poppins text-[#757575] text-xs text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F5F5F5] border-t border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins font-bold text-[#333333] text-2xl mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#C20000] rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does it take to get a response?",
                a: "We typically respond to all inquiries within 24 hours during business days."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free 30-minute initial consultation to understand your career goals."
              },
              {
                q: "Can I schedule a call with a counselor?",
                a: "Absolutely. You can book a consultation through our website or by calling us directly."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and digital payment methods."
              },
              {
                q: "Are your services available online?",
                a: "Yes, we offer both online and in-person consultations for your convenience."
              },
              {
                q: "How can I track my application status?",
                a: "You'll receive regular updates via email and can check your status on our portal."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-[#EEEEEE] rounded-xl p-6"
              >
                <h3 className="font-poppins font-bold text-[#333333] text-base mb-3">
                  {faq.q}
                </h3>
                <p className="font-poppins text-[#757575] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-[#EEEEEE]">
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <h3 className="font-poppins font-bold text-[#505050] text-2xl mb-3">
            Still Have Questions?
          </h3>
          <p className="font-poppins text-[#757575] mb-6">
            Our team is here to help. Reach out to us through any of the channels above.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#C20000" }}
          >
            Schedule a Call
          </button>
        </div>
      </section>
    </div>
  );
}
