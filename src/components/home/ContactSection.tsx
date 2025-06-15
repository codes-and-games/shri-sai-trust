import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your message! We will get back to you soon.');
      reset();
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-700 mb-3">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="font-lato text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any questions, suggestions, or to join our cause.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-2xl text-navy-700 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-lato text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-lato text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block font-lato text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-lato text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-lato py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-montserrat font-bold text-2xl text-navy-700 mb-6">
              Contact Information
            </h3>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-navy-700">
                      Our Location
                    </h4>
                    <p className="font-lato text-gray-600">
                      Paud Road, Kothrud
                      <br />
                      Pune, 411058
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-navy-700">
                      Phone
                    </h4>
                    <p className="font-lato text-gray-600">
                      <a
                        href="tel:+11234567890"
                        className="hover:text-primary-600 transition-colors"
                      >
                        (+91) 98500 29119
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-navy-700">
                      Email
                    </h4>
                    <p className="font-lato text-gray-600">
                      <a
                        href="mailto:info@givinghands.org"
                        className="hover:text-primary-600 transition-colors"
                      >
                        shedgesagar2@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

                <div className="bg-primary-50 border border-primary-200 py-8 px-6 mt-10 rounded-xl shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">Support Us: Bank Details</h2>
          <div className="space-y-2 text-primary-900 text-base">
            <div>
              <span className="font-semibold">Bank Name:</span> Janaseva Sahakari Bank Ltd., Hadapsar, Pune
            </div>
            <div>
              <span className="font-semibold">Account Name:</span> SHREE SAI EDUCATION TRUST
            </div>
            <div>
              <span className="font-semibold">Account Number:</span> 15023004594
            </div>
            <div>
              <span className="font-semibold">IFSC Code:</span> JANA0000015
            </div>
            <div>
              <span className="font-semibold">Branch:</span> BHUSARI COLONY-KOTHRUD
            </div>
          </div>
          <p className="mt-6 text-center text-primary-600 font-medium">
            Your contribution empowers lives. Thank you for your support!
          </p>
        </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;