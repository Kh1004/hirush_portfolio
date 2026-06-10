'use client';
import React, { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white py-12">
      <AnimateOnScroll>
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h2
          className="font-coda text-[30px] font-normal text-center uppercase mb-2 leading-[1.25]"
          style={{ color: '#111111' }}
        >
          Contact Us
        </h2>
        <p className="text-center text-[#777777] text-[14px] mb-8">
          Get in touch with our automation specialists
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="md:w-[320px] flex-shrink-0">
            <div
              className="p-6 h-full"
              style={{ background: '#333333' }}
            >
              <h3
                className="font-coda text-[20px] font-normal uppercase mb-4 pb-2"
                style={{
                  color: '#DDDDDD',
                  textShadow: '1px 1px 1px #000',
                  borderBottom: '2px solid #B81005',
                }}
              >
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#B81005] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#DDDDDD] text-[13px] font-medium">Singapore Office</div>
                    <div className="text-[#B0B0B0] text-[11px] leading-[1.5]">HIRUSH AUTOMATION PTE.LTD<br />531A UPPER CROSS STREET<br />#04-95 HONG LIM COMPLEX<br />Singapore 051531</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#B81005] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#DDDDDD] text-[13px] font-medium">Sri Lanka Office</div>
                    <div className="text-[#B0B0B0] text-[11px] leading-[1.5]">HIRUSH AUTOMATION (PVT) LTD<br />247, MARUTHANKULAM ROAD<br />KOVILPUTHUKKULAM, VAVUNIYA<br />Sri Lanka</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#B81005] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#DDDDDD] text-[13px]">Singapore: (+65) 8183 0763</div>
                    <div className="text-[#DDDDDD] text-[13px]">Sri Lanka: (+94) 7660 99261</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#B81005] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#DDDDDD] text-[13px]">admin@hirushautomation.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#B81005] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#DDDDDD] text-[13px]">www.hirushautomation.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            {submitted ? (
              <div
                className="flex items-center justify-center h-full min-h-[200px] text-center p-8"
                style={{ background: 'rgba(184,16,5,0.06)', border: '1px solid #B81005' }}
              >
                <div>
                  <div className="text-[#B81005] text-4xl mb-3">✓</div>
                  <h3 className="font-coda text-[20px] text-[#111111] mb-2">Message Sent!</h3>
                  <p className="text-[14px] text-[#555555]">We&apos;ll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] text-[#333333] mb-1 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-[14px] px-[7px] py-[10px] text-[#333333] outline-none transition-colors duration-200"
                      style={{
                        background: '#EDEDED',
                        border: '1px solid #999',
                        borderRadius: '5px',
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#333333] mb-1 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-[14px] px-[7px] py-[10px] text-[#333333] outline-none transition-colors duration-200"
                      style={{
                        background: '#EDEDED',
                        border: '1px solid #999',
                        borderRadius: '5px',
                      }}
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] text-[#333333] mb-1 uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full text-[14px] px-[7px] py-[10px] text-[#333333] outline-none transition-colors duration-200"
                    style={{
                      background: '#EDEDED',
                      border: '1px solid #999',
                      borderRadius: '5px',
                    }}
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-[#333333] mb-1 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full text-[14px] px-[7px] py-[10px] text-[#333333] outline-none transition-colors duration-200 resize-none"
                    style={{
                      background: '#EDEDED',
                      border: '1px solid #999',
                      borderRadius: '5px',
                    }}
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[13px] uppercase font-bold text-white px-[15px] py-[8px] h-[35px] cursor-pointer transition-all duration-200 hover:opacity-90 active:translate-y-px"
                  style={{
                    background: '#B81005',
                    border: '2px solid #E01F0A',
                    borderRadius: '5px',
                    boxShadow: '0 0 5px rgba(250,189,182,0.5)',
                    textShadow: '1px 1px 1px #000',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
