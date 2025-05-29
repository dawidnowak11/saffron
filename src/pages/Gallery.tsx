import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedElement } from '../components/utils/AnimatedElement';

// Gallery categories and images
const galleryData = {
  food: [
    {
      src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mediterranean appetizer platter",
      caption: "Mediterranean Mezze Selection"
    },
    {
      src: "https://images.pexels.com/photos/5490385/pexels-photo-5490385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Grilled fish with herbs",
      caption: "Fresh Catch of the Day"
    },
    {
      src: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Grilled octopus",
      caption: "Chargrilled Octopus"
    },
    {
      src: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Seafood paella",
      caption: "Traditional Seafood Paella"
    },
    {
      src: "https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Lamb tagine",
      caption: "Moroccan Lamb Tagine"
    },
    {
      src: "https://images.pexels.com/photos/6419736/pexels-photo-6419736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Stuffed eggplant",
      caption: "Vegetable Stuffed Eggplant"
    },
    {
      src: "https://images.pexels.com/photos/2295285/pexels-photo-2295285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Baklava dessert",
      caption: "Honey-Drizzled Baklava"
    },
    {
      src: "https://images.pexels.com/photos/6136262/pexels-photo-6136262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Cheese platter",
      caption: "Mediterranean Cheese Selection"
    }
  ],
  restaurant: [
    {
      src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Restaurant interior",
      caption: "Main Dining Room"
    },
    {
      src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Outdoor patio",
      caption: "Seaside Terrace"
    },
    {
      src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Private dining room",
      caption: "Private Dining Experience"
    },
    {
      src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Bar area",
      caption: "Cocktail Lounge"
    },
    {
      src: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Kitchen",
      caption: "Our Open Kitchen"
    },
    {
      src: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Table setting",
      caption: "Elegant Table Settings"
    }
  ],
  events: [
    {
      src: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Wedding reception",
      caption: "Wedding Celebrations"
    },
    {
      src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Corporate event",
      caption: "Corporate Gatherings"
    },
    {
      src: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Private party",
      caption: "Private Celebrations"
    },
    {
      src: "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Chef's table",
      caption: "Chef's Table Experience"
    }
  ]
};

// Gallery categories
const categories = [
  { id: "food", name: "Food & Drinks" },
  { id: "restaurant", name: "Restaurant" },
  { id: "events", name: "Events" }
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("food");
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    caption: string;
  }>(null);

  const openLightbox = (image: { src: string; alt: string; caption: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <PageHeader 
        title="Gallery" 
        subtitle="A visual journey through our restaurant and cuisine"
        backgroundImage="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-20">
        <div className="container">
          <SectionHeading 
            title="Explore Our World" 
            subtitle="Browse through images of our cuisine, restaurant, and special events"
          />
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData[activeCategory as keyof typeof galleryData].map((image, index) => (
              <AnimatedElement key={index} delay={index * 50}>
                <div 
                  className="relative overflow-hidden rounded-lg cursor-pointer gallery-image"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <p className="text-white p-4 font-medium">{image.caption}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
};