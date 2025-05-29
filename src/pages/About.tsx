import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedElement } from '../components/utils/AnimatedElement';

export const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Our story, philosophy, and team"
        backgroundImage="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <img 
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Restaurant founding" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </AnimatedElement>
            
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="The journey of Saffron & Thyme"
                centered={false}
              />
              
              <AnimatedElement>
                <p className="text-lg text-neutral-700 mb-6">
                  Saffron & Thyme was born from a passion for Mediterranean cuisine and a desire to bring authentic flavors to Coastal City. Founded in 2012 by Chef Elena Dimitri, our restaurant began as a small taverna serving family recipes passed down through generations.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <p className="text-lg text-neutral-700 mb-6">
                  With Elena's background in fine dining and her travels across Greece, Spain, Morocco, and Lebanon, Saffron & Thyme quickly established itself as a culinary destination, blending traditional techniques with contemporary presentation.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={300}>
                <p className="text-lg text-neutral-700">
                  Over the years, we've grown from our humble beginnings to become one of the most celebrated Mediterranean restaurants in the region, while still maintaining the warm, family atmosphere that has been our hallmark since day one.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-20 bg-neutral-100">
        <div className="container">
          <SectionHeading 
            title="Our Philosophy" 
            subtitle="The principles that guide our culinary approach"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Flavors",
                description: "We stay true to traditional Mediterranean recipes while adding our own contemporary twist. Each dish respects its cultural origins and tells a story of the region.",
                image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Fresh, Local Ingredients",
                description: "We source the freshest seasonal produce from local farmers and import specialty items directly from the Mediterranean to ensure authentic flavors and support sustainable agriculture.",
                image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Warm Hospitality",
                description: "We believe dining is about more than just food—it's about creating memories. Our service embraces the Mediterranean tradition of treating guests like family.",
                image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((philosophy, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <img 
                    src={philosophy.image} 
                    alt={philosophy.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-display font-semibold mb-4">{philosophy.title}</h3>
                    <p className="text-neutral-600">{philosophy.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-20">
        <div className="container">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The culinary artists behind Saffron & Thyme"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Elena Dimitri",
                title: "Executive Chef & Founder",
                bio: "With over 20 years of culinary experience across the Mediterranean, Elena brings authentic flavors and techniques to every dish.",
                image: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Marco Rossi",
                title: "Head Chef",
                bio: "Specializing in Italian coastal cuisine, Marco's innovative approach combines tradition with modern culinary trends.",
                image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Sophia Kazan",
                title: "Pastry Chef",
                bio: "Trained in Paris, Sophia creates exquisite desserts that blend French technique with Mediterranean flavors.",
                image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Carlos Mendoza",
                title: "Sommelier",
                bio: "With extensive knowledge of Mediterranean wines, Carlos expertly pairs each dish with the perfect complement.",
                image: "https://images.pexels.com/photos/7363687/pexels-photo-7363687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-neutral-600 max-w-xs mx-auto">{member.bio}</p>
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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="container">
          <SectionHeading 
            title="What People Are Saying" 
            subtitle="Reviews from critics and loyal customers"
            className="text-white"
          />
          
          <AnimatedElement>
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.4 2.13-1.76V5.95c-1.73.35-3.13 1.05-4.2 2.1-1.08 1.06-1.85 2.26-2.29 3.6-.45 1.45-.5 2.8-.14 4.05.38 1.25 1.14 2.13 2.29 2.63 1.15.5 2.3.51 3.46.03 1.17-.49 1.97-1.27 2.4-2.35.46-1.08.69-2.2.69-3.34zm10.14 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.13-1.08-.136-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.4 2.13-1.76V5.95c-1.73.35-3.13 1.05-4.2 2.1-1.08 1.06-1.85 2.26-2.29 3.6-.45 1.45-.5 2.8-.14 4.05.38 1.25 1.16 2.13 2.31 2.63 1.15.5 2.3.51 3.46.03 1.17-.49 1.95-1.27 2.38-2.35.46-1.08.69-2.2.69-3.34z" />
              </svg>
              <p className="text-2xl font-display italic mb-8">
                "Saffron & Thyme offers one of the most authentic Mediterranean dining experiences I've had outside the region. Chef Elena's passion for preserving traditional flavors while embracing modern techniques creates a truly exceptional culinary journey."
              </p>
              <div>
                <p className="text-xl font-semibold text-primary">The Coastal Times</p>
                <p className="text-white/80">Restaurant Review, 2025</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};