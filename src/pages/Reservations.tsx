import React from 'react';
import { useForm } from 'react-hook-form';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedElement } from '../components/utils/AnimatedElement';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';

type ReservationFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  message: string;
};

export const Reservations: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ReservationFormData>();

  const onSubmit = async (data: ReservationFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Reservation data:', data);
    reset();
  };

  return (
    <>
      <PageHeader 
        title="Reservations" 
        subtitle="Book your table at Saffron & Thyme"
        backgroundImage="https://images.pexels.com/photos/6210933/pexels-photo-6210933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-20">
        <div className="container">
          <SectionHeading 
            title="Reserve Your Table" 
            subtitle="For groups of 10 or more, please call us directly at (555) 123-4567"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <AnimatedElement>
              <div className="bg-white p-8 rounded-lg shadow-md">
                {isSubmitSuccessful ? (
                  <div className="text-center py-8">
                    <div className="bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-4">Reservation Confirmed!</h3>
                    <p className="text-neutral-600 mb-6">
                      Thank you for your reservation request. We've sent a confirmation email with all the details.
                    </p>
                    <button 
                      onClick={() => reset()}
                      className="btn btn-primary"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                            placeholder="John Doe"
                            {...register('name', { required: 'Name is required' })}
                          />
                        </div>
                        {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                      </div>
                      
                      {/* Email */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                            placeholder="you@example.com"
                            {...register('email', { 
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                              }
                            })}
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
                      </div>
                      
                      {/* Phone */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            className={`block w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                            placeholder="(555) 123-4567"
                            {...register('phone', { required: 'Phone number is required' })}
                          />
                        </div>
                        {errors.phone && <p className="mt-1 text-sm text-error">{errors.phone.message}</p>}
                      </div>
                      
                      {/* Date */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                          Date
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input
                            type="date"
                            id="date"
                            className={`block w-full pl-10 pr-3 py-2 border ${errors.date ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                            min={new Date().toISOString().split('T')[0]}
                            {...register('date', { required: 'Date is required' })}
                          />
                        </div>
                        {errors.date && <p className="mt-1 text-sm text-error">{errors.date.message}</p>}
                      </div>
                      
                      {/* Time */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                          Time
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-neutral-400" />
                          </div>
                          <select
                            id="time"
                            className={`block w-full pl-10 pr-3 py-2 border ${errors.time ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                            {...register('time', { required: 'Time is required' })}
                          >
                            <option value="">Select a time</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
                          </select>
                        </div>
                        {errors.time && <p className="mt-1 text-sm text-error">{errors.time.message}</p>}
                      </div>
                      
                      {/* Number of Guests */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-1">
                          Number of Guests
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Users className="h-5 w-5 text-neutral-400" />
                          </div>
                          <select
                            id="guests"
                            className={`block w-full pl-10 pr-3 py-2 border ${errors.guests ? 'border-error' : 'border-neutral-300'} rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none`}
                            {...register('guests', { required: 'Number of guests is required' })}
                          >
                            <option value="">Select number of guests</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.guests && <p className="mt-1 text-sm text-error">{errors.guests.message}</p>}
                      </div>
                      
                      {/* Occasion */}
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="occasion" className="block text-sm font-medium text-neutral-700 mb-1">
                          Occasion (Optional)
                        </label>
                        <select
                          id="occasion"
                          className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none"
                          {...register('occasion')}
                        >
                          <option value="">Select an occasion</option>
                          <option value="birthday">Birthday</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="business">Business Meal</option>
                          <option value="date">Date Night</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      {/* Special Requests */}
                      <div className="col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm focus:ring focus:ring-primary-300 focus:outline-none"
                          placeholder="Dietary restrictions, seating preferences, etc."
                          {...register('message')}
                        />
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
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          'Book a Table'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
            
            {/* Reservation Information */}
            <AnimatedElement delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Reservation Information</h3>
                  <p className="text-neutral-600 mb-6">
                    To ensure we can provide you with the best dining experience, please make your reservation at least 24 hours in advance. For same-day reservations, please call us directly.
                  </p>
                  <p className="text-neutral-600">
                    For groups of 10 or more, special events, or private dining inquiries, please contact our events team at <span className="text-primary">events@saffronandthyme.com</span> or call <span className="text-primary">(555) 987-6543</span>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-neutral-200 pb-2">
                      <span>Monday - Thursday</span>
                      <span>12:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200 pb-2">
                      <span>Friday - Saturday</span>
                      <span>12:00 PM - 11:30 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200 pb-2">
                      <span>Sunday</span>
                      <span>11:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Reservation Policy</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li>We hold reservations for 15 minutes past the scheduled time.</li>
                    <li>A credit card is required for parties of 6 or more.</li>
                    <li>Cancellations within 24 hours of your reservation may incur a fee.</li>
                    <li>Special dietary requirements can be accommodated with advance notice.</li>
                  </ul>
                </div>
                
                <div 
                  className="rounded-lg overflow-hidden h-64 relative"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-2xl font-display font-semibold mb-2">Private Dining</h3>
                      <p className="mb-4">Host your special event with us</p>
                      <a href="mailto:events@saffronandthyme.com" className="btn btn-primary">
                        Inquire Now
                      </a>
                    </div>
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