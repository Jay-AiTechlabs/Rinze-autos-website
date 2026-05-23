import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, MessageCircle, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  const featuredCars = [
    {
      id: 1,
      name: "Mercedes-Benz GLE 450",
      year: 2022,
      price: "₦45,000,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/featured-car-1-2JhF2SeHRrwMwFpepLumBL.webp",
      badge: "Featured",
      status: "Available"
    },
    {
      id: 2,
      name: "Toyota Corolla SE",
      year: 2022,
      price: "₦12,500,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/featured-car-2-4dSXpnMZ9dtNYqAYtaYmig.webp",
      badge: "New Arrival",
      status: "Available"
    },
    {
      id: 3,
      name: "Mercedes-Benz ML 350",
      year: 2015,
      price: "₦31,500,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/featured-car-4-8JLtptR9wLZfvAHTnfU9Tb.webp",
      badge: "Premium",
      status: "Available"
    },
    {
      id: 4,
      name: "Dodge Challenger",
      year: 2020,
      price: "₦28,000,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/featured-car-3-QYPQApLgXbRPtqpSpixzdz.webp",
      badge: "Featured",
      status: "Available"
    },
    {
      id: 5,
      name: "Toyota Tundra",
      year: 2021,
      price: "₦35,000,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/featured-car-1-2JhF2SeHRrwMwFpepLumBL.webp",
      badge: "New",
      status: "Available"
    },
    {
      id: 6,
      name: "Mercedes-Benz GLE 53 AMG",
      year: 2023,
      price: "₦52,000,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/featured-car-2-4dSXpnMZ9dtNYqAYtaYmig.webp",
      badge: "Premium",
      status: "Available"
    }
  ];

  const services = [
    {
      title: "24/7 Operations",
      description: "Always available for inspections and consultations"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs, all duties fully paid and verified"
    },
    {
      title: "Quality Assured",
      description: "Accident-free vehicles with full documentation"
    },
    {
      title: "Financing Available",
      description: "Flexible payment plans tailored to your needs"
    },
    {
      title: "International Imports",
      description: "Direct imports from USA, China, and Nigeria stock"
    },
    {
      title: "Swap Deals",
      description: "Trade-in your current vehicle for premium options"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold display-font text-accent">RINZE</div>
            <div className="text-sm text-muted-foreground">AUTOS</div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#featured" className="text-sm hover:text-accent transition-colors">Inventory</a>
            <a href="#why-us" className="text-sm hover:text-accent transition-colors">Why Us</a>
            <a href="#services" className="text-sm hover:text-accent transition-colors">Services</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            size="sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/HofZAaGoWW5cRjiLRcVucQ/hero-luxury-car-XaSKHy8NBYHzinSh6j2ePY.webp"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold display-font mb-4 text-white">
            Luxury Meets Authenticity
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Premium vehicles from USA, China & Nigeria. Accident-free, fully cleared, 24/7 service.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
              Explore Inventory
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
            >
              Book Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-secondary/30 border-t border-b border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15.1K+</div>
              <p className="text-muted-foreground">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1,300+</div>
              <p className="text-muted-foreground">Vehicles Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">Featured Inventory</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked luxury vehicles carefully selected for quality and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Card 
                key={car.id}
                className="overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCar(car.id)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img 
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-semibold">
                    {car.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{car.year}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">{car.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Details <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">Why Choose RINZE AUTOS</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-accent text-accent-foreground">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Every vehicle is accident-free with full documentation and customs duties paid</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-accent text-accent-foreground">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Always available for inspections, consultations, and customer support</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-accent text-accent-foreground">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">International Sourcing</h3>
                <p className="text-muted-foreground">Direct imports from USA, China, and local Nigerian stock</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-accent text-accent-foreground">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">No hidden costs. All prices include duties and are clearly displayed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6 hover:border-accent transition-colors">
                <h3 className="text-xl font-bold mb-3 text-accent">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">Get In Touch</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
              <p className="text-lg text-muted-foreground mt-4">
                Ready to find your dream car? Contact us today for inspections and inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:border-accent transition-colors">
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-3">+234 816 484 4363</p>
                <p className="text-muted-foreground text-sm">+234 814 115 4301</p>
              </Card>

              <Card className="p-8 text-center hover:border-accent transition-colors">
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">rinzeglobalserviceltd@gmail.com</p>
              </Card>

              <Card className="p-8 text-center hover:border-accent transition-colors">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Plot 1518 J, off Ahmadu Bello Way, Mabushi, Abuja</p>
              </Card>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/40 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold display-font text-accent mb-4">RINZE AUTOS</div>
              <p className="text-sm text-muted-foreground">Premium luxury car dealership in Abuja, Nigeria</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#featured" className="hover:text-accent transition-colors">Inventory</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Car Financing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Swap Deals</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Inspections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 RINZE AUTOS LIMITED. All rights reserved. | Abuja, Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
