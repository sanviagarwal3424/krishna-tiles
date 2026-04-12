export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Harmu, Ranchi",
    rating: 5,
    review: "Excellent quality tiles at very reasonable prices. The staff was knowledgeable and helped me choose the perfect marble-look tiles for my living room. Highly recommended!",
    project: "Living Room Renovation",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Kanke Road, Ranchi",
    rating: 5,
    review: "Got the entire bathroom done with Kajaria tiles from Krishna Tiles. The installation team was professional and the result is stunning. My bathroom looks like a 5-star hotel now!",
    project: "Bathroom Renovation",
  },
  {
    id: "3",
    name: "Amit Agarwal",
    location: "Bariatu, Ranchi",
    rating: 4,
    review: "Very good collection of tiles. I was surprised by the variety available. Found exactly what I was looking for my kitchen backsplash. Delivery was on time too.",
    project: "Kitchen Backsplash",
  },
  {
    id: "4",
    name: "Sunita Devi",
    location: "Lalpur, Ranchi",
    rating: 5,
    review: "Krishna Tiles has been our family's go-to for 10+ years. Always quality products, fair pricing, and genuine advice. Just got my new house tiled — absolutely love it!",
    project: "New Home Construction",
  },
  {
    id: "5",
    name: "Vikash Singh",
    location: "Doranda, Ranchi",
    rating: 5,
    review: "The outdoor tiles I bought here are excellent. 2 years later and they still look as good as new. Proper anti-skid, no cracking — very durable.",
    project: "Outdoor & Parking Area",
  },
  {
    id: "6",
    name: "Meena Pandey",
    location: "Ashok Nagar, Ranchi",
    rating: 4,
    review: "Great showroom experience. The team listened to my requirements and budget and suggested the best options. The bedroom tiles look gorgeous. Will definitely come back.",
    project: "Bedroom Flooring",
  },
];
