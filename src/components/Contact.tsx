import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation('common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      title: t('contact.info.phone'),
      content: '+90 850 346 46 52',
      href: 'tel:+908503464652',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('contact.info.email'),
      content: 'info@pirangyd.com',
      href: 'mailto:info@pirangyd.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t('contact.info.address'),
      content: t('contact.info.addressContent'),
      href: '#',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-8 py-8 bg-slate-50 overflow-hidden"
    >
      {/* Diamond/Rhombus Pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diamonds"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40,10 L70,40 L40,70 L10,40 Z"
                fill="none"
                stroke="rgb(100 116 139)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#diamonds)"
          />
        </svg>
      </div>

      {/* Rounded Squares Decoration */}
      <div className="absolute top-40 left-20 w-24 h-24 border-2 border-blue-200/30 rounded-2xl rotate-45" />
      <div className="absolute bottom-40 right-24 w-32 h-32 border-2 border-slate-300/40 rounded-3xl -rotate-12" />

      {/* Dual Gradient Glow */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-amber-600">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              {t('footer.contact')}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group block relative backdrop-blur-xl bg-white/90 rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {/* Gradient accent */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${info.gradient} rounded-l-xl`}
                  />

                  <div className="pl-2">
                    <h4 className="font-bold text-slate-800 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 text-sm group-hover:text-blue-600 transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 relative backdrop-blur-xl bg-white/90 rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            >
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 flex items-center gap-2 z-10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-semibold">
                  {t('contact.info.mapView')}
                </span>
              </div>

              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1819772766814!2d29.043544376546395!3d41.02197197134857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f8c3e8e7d9%3A0x9e6e8c8e8e8e8e8e!2zS8O8w6fDvGsgw4dhbWzEsWNhLCBMaWJhZGl5ZSBDYWQuIE5vOjUyLCAzNDY5MiDDnHNrw7xkYXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1698342400000!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0, marginTop: '48px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    className="peer w-full px-4 py-3 backdrop-blur-xl bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="İsim"
                  />
                  <label className="absolute left-4 -top-2.5 text-xs text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1">
                    {t('contact.form.name')} *
                  </label>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      Bu alan zorunludur
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="peer w-full px-4 py-3 backdrop-blur-xl bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Email"
                  />
                  <label className="absolute left-4 -top-2.5 text-xs text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1">
                    {t('contact.form.email')} *
                  </label>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      Geçerli bir e-posta giriniz
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="tel"
                    {...register('phone')}
                    className="peer w-full px-4 py-3 backdrop-blur-xl bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Telefon"
                  />
                  <label className="absolute left-4 -top-2.5 text-xs text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1">
                    {t('contact.form.phone')}
                  </label>
                </div>

                <div className="relative">
                  <select
                    {...register('subject', { required: true })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white border border-slate-300 rounded-xl text-slate-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  >
                    <option
                      value=""
                      className="bg-white"
                    >
                      {t('contact.form.subject')}
                    </option>
                    <option
                      value="urban-transformation"
                      className="bg-white"
                    >
                      {t('contact.form.subjects.urbanTransformation')}
                    </option>
                    <option
                      value="real-estate"
                      className="bg-white"
                    >
                      {t('contact.form.subjects.valuation')}
                    </option>
                    <option
                      value="construction"
                      className="bg-white"
                    >
                      {t('contact.form.subjects.construction')}
                    </option>
                    <option
                      value="corporate"
                      className="bg-white"
                    >
                      {t('contact.form.subjects.investment')}
                    </option>
                    <option
                      value="other"
                      className="bg-white"
                    >
                      {t('contact.form.subjects.other')}
                    </option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">
                      Bu alan zorunludur
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows={5}
                  {...register('message', { required: true })}
                  className="peer w-full px-4 py-3 backdrop-blur-xl bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Mesaj"
                ></textarea>
                <label className="absolute left-4 -top-2.5 text-xs text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1">
                  {t('contact.form.message')} *
                </label>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    Bu alan zorunludur
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t('contact.form.sending')}</span>
                  </span>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>{t('contact.form.send')}</span>
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="backdrop-blur-xl bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="shrink-0">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-emerald-300 font-medium">
                    {t('contact.form.success')}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
