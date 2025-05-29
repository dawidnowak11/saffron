import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedElement } from '../components/utils/AnimatedElement';

// Menu categories and items
const menuData = {
  starters: [
    {
      name: "Mediterranean Mezze Platter",
      description: "Hummus, baba ganoush, tzatziki, olives, and warm pita bread",
      price: "$16",
      tags: ["v"]
    },
    {
      name: "Grilled Octopus",
      description: "Tender octopus with olive oil, lemon, and herbs on a bed of chickpea puree",
      price: "$26",
      tags: ["gf"]
    },
    {
      name: "Crispy Calamari",
      description: "Flash-fried calamari with lemon aioli and marinara sauce",
      price: "$18",
      tags: []
    },
    {
      name: "Spanakopita",
      description: "Flaky phyllo pastry filled with spinach and feta cheese",
      price: "$14",
      tags: ["v"]
    },
    {
      name: "Bruschetta",
      description: "Toasted bread topped with diced tomatoes, garlic, basil, and extra virgin olive oil",
      price: "$12",
      tags: ["v", "vg"]
    }
  ],
  mains: [
    {
      name: "Seafood Paella",
      description: "Traditional Spanish rice dish with saffron, shrimp, mussels, and calamari",
      price: "$28",
      tags: ["gf"]
    },
    {
      name: "Lamb Tagine",
      description: "Slow-cooked lamb with apricots, almonds, and aromatic Moroccan spices",
      price: "$32",
      tags: ["gf"]
    },
    {
      name: "Grilled Mediterranean Sea Bass",
      description: "Whole fish grilled with lemon, herbs, and olive oil, served with roasted vegetables",
      price: "$34",
      tags: ["gf"]
    },
    {
      name: "Moussaka",
      description: "Layered eggplant, potatoes, and spiced ground lamb topped with béchamel sauce",
      price: "$26",
      tags: []
    },
    {
      name: "Vegetable Couscous",
      description: "Fluffy couscous with roasted seasonal vegetables and harissa sauce",
      price: "$22",
      tags: ["v", "vg"]
    },
    {
      name: "Chicken Souvlaki",
      description: "Grilled marinated chicken skewers with Greek salad and tzatziki",
      price: "$24",
      tags: []
    }
  ],
  desserts: [
    {
      name: "Baklava",
      description: "Layers of phyllo pastry filled with chopped nuts and sweetened with honey syrup",
      price: "$10",
      tags: ["v"]
    },
    {
      name: "Crème Brûlée",
      description: "Rich custard base topped with a layer of hardened caramelized sugar",
      price: "$12",
      tags: ["v", "gf"]
    },
    {
      name: "Orange Almond Cake",
      description: "Moist almond cake infused with orange syrup, served with yogurt",
      price: "$11",
      tags: ["v", "gf"]
    },
    {
      name: "Tiramisu",
      description: "Coffee-soaked ladyfingers layered with mascarpone cream",
      price: "$12",
      tags: ["v"]
    }
  ],
  drinks: [
    {
      name: "Signature Sangria",
      description: "Red wine with fresh fruit, brandy, and a hint of cinnamon",
      price: "$14",
      tags: []
    },
    {
      name: "Mediterranean Gin & Tonic",
      description: "Gin infused with rosemary and thyme, premium tonic, and citrus",
      price: "$16",
      tags: []
    },
    {
      name: "Lebanese Arak",
      description: "Traditional anise-flavored spirit, served with water and ice",
      price: "$12",
      tags: []
    },
    {
      name: "Fresh Mint Tea",
      description: "Steeped fresh mint leaves with honey",
      price: "$6",
      tags: ["v", "vg", "gf"]
    },
    {
      name: "Turkish Coffee",
      description: "Strong coffee prepared in a cezve with cardamom",
      price: "$7",
      tags: ["v", "vg", "gf"]
    }
  ]
};

// Menu categories
const categories = [
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" }
];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  return (
    <>
      <PageHeader 
        title="Our Menu" 
        subtitle="Explore our Mediterranean-inspired cuisine"
        backgroundImage="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-20">
        <div className="container">
          <SectionHeading 
            title="A Taste of the Mediterranean" 
            subtitle="Our menu features fresh ingredients and authentic recipes"
          />
          
          {/* Legend */}
          <div className="flex justify-center mb-12 gap-4 flex-wrap">
            <span className="flex items-center text-sm text-neutral-600">
              <span className="w-3 h-3 inline-block bg-primary rounded-full mr-2"></span>
              v - Vegetarian
            </span>
            <span className="flex items-center text-sm text-neutral-600">
              <span className="w-3 h-3 inline-block bg-secondary rounded-full mr-2"></span>
              vg - Vegan
            </span>
            <span className="flex items-center text-sm text-neutral-600">
              <span className="w-3 h-3 inline-block bg-accent rounded-full mr-2"></span>
              gf - Gluten Free
            </span>
          </div>
          
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
          
          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
              <AnimatedElement key={index} delay={index * 50} className="border-b border-neutral-200 pb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold">{item.name}</h3>
                  <span className="text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-neutral-600 mb-2">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.includes("v") && (
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      Vegetarian
                    </span>
                  )}
                  {item.tags.includes("vg") && (
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded">
                      Vegan
                    </span>
                  )}
                  {item.tags.includes("gf") && (
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded">
                      Gluten Free
                    </span>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chef's Recommendations */}
      <section className="py-16 bg-neutral-100">
        <div className="container">
          <SectionHeading 
            title="Chef's Recommendations" 
            subtitle="Our chef's favorite seasonal specialties"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lobster Risotto",
                description: "Creamy Arborio rice with fresh lobster, saffron, and Parmesan",
                price: "$38",
                image: "https://images.pexels.com/photos/4552100/pexels-photo-4552100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Grilled Lamb Chops",
                description: "Herb-marinated lamb chops with roasted vegetables and mint sauce",
                price: "$36",
                image: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Vegetable Stuffed Eggplant",
                description: "Roasted eggplant stuffed with quinoa, vegetables, and feta cheese",
                price: "$24",
                image: "https://images.pexels.com/photos/6419736/pexels-photo-6419736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((dish, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
        </div>
      </section>
    </>
  );
};