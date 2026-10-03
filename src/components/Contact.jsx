import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!form.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!form.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Client-side demo submission - no actual backend
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  const contactItems = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'akkapolulalitha@gmail.com',
      href: '#',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/A-LALITHA-KUMARI',
      href: '#',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/a-lalitha-179889321',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle,rgba(255,47,120,0.12),rgba(90,11,40,0.15),transparent_70%)] blur-[110px]"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Burgundy Rounded Section Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#2e0717]/80 via-[#18050e]/90 to-[#0c0509]/95 border border-white/10 p-5 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Subtle top specular line */}
          <div 
            className="pointer-events-none absolute top-0 left-6 sm:left-12 right-6 sm:right-12 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/25 to-transparent" 
            aria-hidden="true" 
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-12 sm:pb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2F78] animate-ping" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Have an idea or opportunity?
            </h2>

            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Have an opportunity, project idea, or just want to say hello?
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* LEFT: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group rounded-3xl bg-gradient-to-b from-[#1c0815]/85 via-[#12060e]/90 to-[#0a0508]/95 border border-white/10 hover:border-[#FF2F78]/50 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_30px_-5px_rgba(255,47,120,0.2)] flex items-center gap-3.5 sm:gap-4 min-h-[52px]"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#300615]/80 border border-[#FF2F78]/30 flex items-center justify-center text-[#FF4D8D] group-hover:text-white group-hover:bg-[#5A0B28]/70 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,47,120,0.2)] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-0.5 overflow-hidden">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#777078]">
                        {item.label}
                      </div>
                      <div className="font-heading font-semibold text-xs sm:text-sm text-white group-hover:text-[#FF8FB5] transition-colors truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Glassmorphism Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-gradient-to-b from-[#1c0815]/85 via-[#12060e]/90 to-[#0a0508]/95 border border-white/10 p-5 sm:p-9 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
              
              {/* Subtle top edge specular reflection */}
              <div 
                className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/20 to-transparent" 
                aria-hidden="true" 
              />

              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#300615] border border-[#FF2F78]/50 text-[#FF4D8D] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(255,47,120,0.35)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#FF8FB5] leading-relaxed">
                      Thanks for reaching out! This demo form is ready to connect to a backend or email service.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#FF2F78]/50 transition-all cursor-pointer shadow-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-name" 
                      className="text-xs font-mono uppercase tracking-wider text-[#B8B0B6] block"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#08080B]/80 border ${
                        errors.name ? 'border-[#FF2F78]' : 'border-white/10'
                      } text-sm text-white placeholder-[#777078] focus:outline-none focus:border-[#FF2F78] focus:ring-1 focus:ring-[#FF2F78] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#FF4D8D] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-email" 
                      className="text-xs font-mono uppercase tracking-wider text-[#B8B0B6] block"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#08080B]/80 border ${
                        errors.email ? 'border-[#FF2F78]' : 'border-white/10'
                      } text-sm text-white placeholder-[#777078] focus:outline-none focus:border-[#FF2F78] focus:ring-1 focus:ring-[#FF2F78] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#FF4D8D] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-subject" 
                      className="text-xs font-mono uppercase tracking-wider text-[#B8B0B6] block"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => {
                        setForm({ ...form, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="Project inquiry or opportunity"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#08080B]/80 border ${
                        errors.subject ? 'border-[#FF2F78]' : 'border-white/10'
                      } text-sm text-white placeholder-[#777078] focus:outline-none focus:border-[#FF2F78] focus:ring-1 focus:ring-[#FF2F78] transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-[#FF4D8D] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-message" 
                      className="text-xs font-mono uppercase tracking-wider text-[#B8B0B6] block"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Hi Lalitha, I would like to discuss..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#08080B]/80 border ${
                        errors.message ? 'border-[#FF2F78]' : 'border-white/10'
                      } text-sm text-white placeholder-[#777078] focus:outline-none focus:border-[#FF2F78] focus:ring-1 focus:ring-[#FF2F78] transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#FF4D8D] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF2F78] to-[#FF4D8D] hover:from-[#FF4D8D] hover:to-[#FF8FB5] shadow-[0_0_25px_rgba(255,47,120,0.45)] hover:shadow-[0_0_35px_rgba(255,47,120,0.7)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        </div>

      </div>
    </section>
  );
}
