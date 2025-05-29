import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, Utensils } from 'lucide-react';
import { AnimatedElement } from '../components/utils/AnimatedElement';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="h-screen min-h-[600px] relative flex items-center justify-center bg-hero-pattern bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="container text-center text-white z-10">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4">
              Saffron & Thyme
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-xl md:text-2xl font-display mb-8">
              A Taste of the Mediterranean
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={400}>
            <Link to="/reservations" className="btn btn-primary">
              Book a Table
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <AnimatedElement>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                  Welcome to Saffron & Thyme
                </h2>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <p className="text-lg text-neutral-700 mb-6">
                  Nestled in the heart of Coastal City, Saffron & Thyme offers an exquisite Mediterranean dining experience that combines traditional recipes with modern culinary techniques.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={300}>
                <p className="text-lg text-neutral-700 mb-8">
                  Our chef's passion for authentic flavors and commitment to using only the finest locally-sourced ingredients ensures each dish tells a story of the rich culinary heritage of the Mediterranean region.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <Link to="/about" className="inline-flex items-center font-medium text-primary hover:text-primary-600 transition-colors">
                  Learn more about us
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </AnimatedElement>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <AnimatedElement>
                <img 
                  src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Restaurant interior" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </AnimatedElement>
              <div className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-display text-lg">Est. 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-neutral-100">
        <div className="container">
          <SectionHeading 
            title="Our Signature Dishes" 
            subtitle="Explore our chef's carefully crafted Mediterranean specialties"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Seafood Paella",
                description: "A traditional Spanish rice dish with saffron, shrimp, mussels, and calamari.",
                image: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                price: "$28"
              },
              {
                name: "Lamb Tagine",
                description: "Slow-cooked lamb with apricots, almonds, and aromatic Moroccan spices.",
                image: "https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                price: "$32"
              },
              {
                name: "Grilled Octopus",
                description: "Tender octopus with olive oil, lemon, and herbs on a bed of chickpea puree.",
                image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                price: "$26"
              }
            ].map((dish, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-display font-semibold">{dish.name}</h3>
                      <span className="text-primary font-medium">{dish.price}</span>
                    </div>
                    <p className="text-neutral-600">{dish.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <AnimatedElement>
              <Link to="/menu" className="btn btn-primary">
                View Full Menu
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-primary" />,
                title: "Award-Winning Cuisine",
                description: "Our restaurant has been recognized with multiple culinary awards for excellence in Mediterranean cuisine."
              },
              {
                icon: <Utensils className="w-12 h-12 text-primary" />,
                title: "Fresh Ingredients",
                description: "We source the freshest local and imported ingredients to create authentic Mediterranean flavors."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Private Events",
                description: "Host your special occasion in our elegant private dining room with customized menus."
              }
            ].map((feature, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="container">
          <SectionHeading 
            title="What Our Guests Say" 
            subtitle="Hear from those who have experienced our Mediterranean hospitality"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The seafood paella transported me straight to Valencia. Absolutely magnificent flavors!",
                author: "Maria Rodriguez",
                title: "Food Critic"
              },
              {
                quote: "An unforgettable dining experience with impeccable service and stunning presentation.",
                author: "James Chen",
                title: "Regular Guest"
              },
              {
                quote: "The lamb tagine is the best I've had outside of Morocco. A must-try!",
                author: "Sophie Laurent",
                title: "Travel Blogger"
              }
            ].map((testimonial, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <svg className="w-10 h-10 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.4 2.13-1.76V5.95c-1.73.35-3.13 1.05-4.2 2.1-1.08 1.06-1.85 2.26-2.29 3.6-.45 1.45-.5 2.8-.14 4.05.38 1.25 1.14 2.13 2.29 2.63 1.15.5 2.3.51 3.46.03 1.17-.49 1.97-1.27 2.4-2.35.46-1.08.69-2.2.69-3.34zm10.14 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.13-1.08-.136-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.4 2.13-1.76V5.95c-1.73.35-3.13 1.05-4.2 2.1-1.08 1.06-1.85 2.26-2.29 3.6-.45 1.45-.5 2.8-.14 4.05.38 1.25 1.16 2.13 2.31 2.63 1.15.5 2.3.51 3.46.03 1.17-.49 1.95-1.27 2.38-2.35.46-1.08.69-2.2.69-3.34z" />
                  </svg>
                  <p className="mb-4 text-white/90">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary-50 rounded-lg p-8 md:p-12 text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Reserve Your Table Today
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
                Experience the rich flavors of the Mediterranean in an elegant setting. Book your table now for an unforgettable dining experience.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <Link to="/reservations" className="btn btn-primary">
                Make a Reservation
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};