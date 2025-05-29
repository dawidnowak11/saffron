import React from 'react';
import { useForm } from 'react-hook-form';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedElement } from '../components/utils/AnimatedElement';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form data:', data);
    reset();
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the Saffron & Thyme team"
        backgroundImage="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-20">
        <div className="container">
          <SectionHeading 
            title="We'd Love to Hear From You" 
            subtitle="Have questions, feedback, or just want to say hello? Reach out to us."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedElement>
              <div className="bg-white p-8 rounded-lg shadow-md">
                {isSubmitSuccessful ? (
                  <div className="text-center py-8">
                    <div className="bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg\" className="h-8 w-8\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
                        <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-4">Message Sent!</h3>
                    <p className="text-neutral-600 mb-6">
                      Thank you for reaching out to us. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => reset()}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`block w-full p-2 border ${errors.name ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                          placeholder="John Doe"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`block w-full p-2 border ${errors.email ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                          placeholder="you@example.com"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                        />
                        {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
                      </div>
                      
                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className={`block w-full p-2 border ${errors.subject ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                          placeholder="What is your message about?"
                          {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && <p className="mt-1 text-sm text-error">{errors.subject.message}</p>}
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className={`block w-full p-2 border ${errors.message ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                          placeholder="Your message here..."
                          {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && <p className="mt-1 text-sm text-error">{errors.message.message}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        className="btn btn-primary w-full flex justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
            
            {/* Contact Information */}
            <AnimatedElement delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-neutral-600">123 Mediterranean Blvd, Coastal City, CA 90210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-neutral-600">Main: (555) 123-4567</p>
                        <p className="text-neutral-600">Reservations: (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-neutral-600">info@saffronandthyme.com</p>
                        <p className="text-neutral-600">reservations@saffronandthyme.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-neutral-600">Monday - Thursday: 12:00 PM - 10:00 PM</p>
                        <p className="text-neutral-600">Friday - Saturday: 12:00 PM - 11:30 PM</p>
                        <p className="text-neutral-600">Sunday: 11:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      className="bg-neutral-100 hover:bg-primary hover:text-white text-neutral-700 p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      className="bg-neutral-100 hover:bg-primary hover:text-white text-neutral-700 p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="bg-neutral-100 hover:bg-primary hover:text-white text-neutral-700 p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
                
                {/* Map */}
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Location</h3>
                  <div className="rounded-lg overflow-hidden h-80">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.49463492424037!3d34.024882472474306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5a8!2sSanta%20Monica%20Beach!5e0!3m2!1sen!2sus!4v1695598584446!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Restaurant location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};