export const business = {
  name: "Krishna Tiles",
  tagline: "Premium Tiles & Sanitaryware for Your Dream Home",
  subTagline: "Ranchi's trusted destination for floor tiles, wall tiles, bathroom fittings & more",
  phone: "+916513551148",
  phoneDisplay: "065135 51148",
  whatsapp: "919431101780",
  whatsappMessage: "Hi Krishna Tiles! I'm interested in your tile collection. Can you help me?",
  email: "info@krishnatiles.com",
  address: {
    line1: "Lalji Hirji Rd, Upper Bazar",
    city: "Ranchi",
    state: "Jharkhand",
    pincode: "834001",
    full: "Lalji Hirji Rd, Upper Bazar, Ranchi, Jharkhand 834001",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.568!2d85.334!3d23.359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4f7e3f3b3b3b3b3!2sKrishna%20Tiles!5e0!3m2!1sen!2sin!4v1234567890",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Krishna+Tiles+Lalji+Hirji+Rd+Upper+Bazar+Ranchi+Jharkhand+834001",
  timings: {
    weekdays: "10:00 AM – 8:00 PM",
    sunday: "Closed",
    note: "Monday to Saturday",
  },
  rating: 4.2,
  reviews: 59,
  stats: {
    yearsInBusiness: 20,
    brandsStocked: 50,
    tileVariety: 5000,
    happyCustomers: 10000,
  },
  brands: [
    "Kajaria",
    "Somany",
    "Orient Bell",
    "Jaquar",
    "Cera",
    "RAK Ceramics",
    "Johnson Tiles",
    "Nitco",
  ],
  services: [
    "In-store Shopping",
    "In-store Pick-up",
    "Same-day Delivery",
    "Expert Consultation",
  ],
  socialLinks: {
    google:
      "https://www.google.com/maps/place/Krishna+tiles/@23.359,85.334,17z",
  },
};

export const getWhatsAppLink = (message?: string) => {
  const msg = message || business.whatsappMessage;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
};

export const getCallLink = () => `tel:${business.phone}`;
