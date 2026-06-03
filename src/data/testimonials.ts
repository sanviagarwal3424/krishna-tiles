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
    name: "Nikhil Raj",
    location: "Ranchi",
    rating: 5,
    review: "Best tiles showroom at Ranchi. Went to 4-5 shops before this, nothing compared. Huge variety and the staff actually knows what they're talking about.",
    project: "Home Tiles",
  },
  {
    id: "2",
    name: "Aman Kumar",
    location: "Ranchi",
    rating: 5,
    review: "Bought Johnson and Kajaria tiles for my new flat. Good rates, no hidden charges. They even helped with quantity calculation so I didn't over-order.",
    project: "New Flat",
  },
  {
    id: "3",
    name: "Anup Kumar",
    location: "Ranchi",
    rating: 5,
    review: "Been coming here for years. Did my parents' house, now doing mine. Reliable shop, they don't push expensive stuff — they suggest what actually fits your budget.",
    project: "Family Home",
  },
];
