# Krishna Tiles — Website Vision & PRD

## PURPOSE

Production-ready, mobile-first website for **Krishna Tiles** — a local tile and sanitaryware retailer in Ranchi, India.

**NOT an e-commerce website.** This is a lead-generation focused digital showroom designed to:
- Increase showroom visits
- Generate WhatsApp and call inquiries
- Rank on Google for local SEO keywords

Users browse online but purchase offline.

---

## DESIGN VISION — "Luxury Showroom Experience"

### Core Philosophy

Think **Apple Store meets architecture studio**. This is NOT a typical tile shop website. It's a premium digital showroom that makes people feel like they're walking into a luxury space.

### Design Principles

1. **Heavy whitespace** — let products breathe
2. **One dominant visual per screen** — no clutter
3. **Large, elegant typography** — minimal words, maximum impact
4. **Neutral palette** — white, off-white, warm grey, charcoal, deep black
5. **Subtle parallax/fades** — not flashy, just refined
6. **Editorial design language** — like a design magazine, not a retail store

### Color Palette

| Role | Color |
|------|-------|
| Background | `#FFFFFF` / `#FAFAF8` (warm off-white) |
| Text Primary | `#1A1A1A` (near black) |
| Text Secondary | `#6B6B6B` (warm grey) |
| Accent | `#0492C5` (brand cyan from logo) |
| Accent Warm | `#C4956A` (warm bronze/terracotta) |
| Border/Divider | `#E8E6E3` (light warm grey) |

### Typography

- **Headings**: Large serif or elegant sans-serif (e.g., `Playfair Display` or `Inter` with wide letter-spacing)
- **Body**: Clean sans-serif (`Inter` or `DM Sans`)
- **Size scale**: Generous — hero headings at 4-6rem, section titles at 2.5-3rem
- **Letter-spacing**: Wide on uppercase labels (0.15-0.25em)

---

## TECH STACK

- Frontend: Next.js (App Router)
- Styling: Tailwind CSS
- Backend: Supabase
- Image optimization: Next/Image
- SEO: Server-side rendering + metadata
- Deployment: Vercel (auto-deploy from GitHub)
- Domain: krishnatiles.in

---

## WEBSITE STRUCTURE

### Page Flow

1. **Homepage** — Immersive hero → Story scroll → Collections → Featured → Brands → Testimonials → CTA
2. **About Us** — Brand story, showroom photos, team
3. **Products** — Filterable product grid
4. **Product Detail** — Large gallery, specs, CTAs
5. **Brands** — Premium brand showcase
6. **Gallery / Inspiration** — Room-based visual showcase
7. **Testimonials** — Customer reviews
8. **Contact / Visit Store** — Map, timings, inquiry form
9. **FAQ** — Common questions
10. **Blog** — SEO articles
11. **Local SEO Pages** — "Tiles in Ranchi" etc.

---

## HOMEPAGE SECTIONS

### 1. Hero (Fullscreen)

- Full-viewport height
- Center: Single stunning tile/space image
- Soft shadow, floating feel
- Minimal text overlay: brand name + one-line tagline
- Subtle scroll indicator

### 2. Scroll Transition — Brand Story

- As user scrolls: smooth parallax reveals
- "Crafting spaces since [year]" or similar
- One powerful line per scroll section
- Think Apple product page storytelling

### 3. Collection Grid

- Gallery-style layout (not typical e-commerce grid)
- Large hero images for each category
- Hover: subtle zoom + overlay text
- Categories: Tiles, Sanitaryware, Taps, Kitchens

### 4. Featured Products

- 3-4 products max, editorial layout
- Large images, minimal text
- "Explore" CTA (not "Buy Now")

### 5. Brand Showcase

- Clean logo grid or horizontal scroll
- "Authorised dealer" messaging
- Premium brand presentation

### 6. Testimonials

- Clean cards, Google rating prominent
- Real customer names and context

### 7. CTA Strip

- Strong conversion section
- WhatsApp + Call + Visit Store
- "Experience our showroom" messaging

---

## GLOBAL UX FEATURES

- **Floating WhatsApp Button** — always visible, primary CTA
- **Sticky Call Button** — mobile + desktop
- **"Get Directions"** — Google Maps link
- **Fast loading** — under 2 seconds
- **Fully responsive** — mobile-first
- **Smooth scroll** — subtle animations on scroll

---

## PRODUCT PAGES

### Listing Page
- Filters: Size, Color, Finish, Type
- Grid layout with large images
- Product cards: Image + Name + "Enquire on WhatsApp"

### Detail Page
- Large image gallery
- Product specs table
- Use cases (Bathroom / Kitchen / Living)
- CTAs: WhatsApp, Call, Visit Store
- Related products

---

## SEO IMPLEMENTATION

### On-page
- Dynamic meta titles/descriptions per page
- H1, H2 structured headings
- Image alt text everywhere
- Clean, semantic URLs

### Target Keywords
- tile shop in Ranchi
- sanitaryware store near me
- bathroom tiles in Ranchi
- best tiles showroom in Ranchi

### Local SEO
- Google Business Profile integration
- LocalBusiness schema
- NAP consistency

### Schema Markup
- LocalBusiness
- Product
- FAQ

---

## LEAD GENERATION (CRITICAL)

- Floating WhatsApp button (always visible)
- Sticky call button
- Inquiry form (name, phone, requirement)
- Product-level enquiry CTA
- Callback request option

---

## COMPONENT SYSTEM

Reusable components:
- Header/Navbar
- Footer
- HeroSection
- ProductCard
- CategoryCard
- TestimonialCard
- CTAStrip
- TrustSection
- FilterSidebar
- BlogCard

---

## DATA STRUCTURE (SUPABASE)

Tables: products, categories, brands, inquiries, blog_posts

Each product: name, category, images, size, finish, description

---

## PERFORMANCE

- Lazy loading images
- Next.js Image optimization
- Minimal JS bundle
- Lighthouse score target: 90+

---

## PRIORITY ORDER

1. Functionality
2. Performance
3. SEO
4. Design (luxury aesthetic)

---

## RULES

- Prioritize conversion over aesthetics
- Always include CTA (Call / WhatsApp)
- Keep UX extremely simple
- Optimize for Indian mobile users
- No checkout or cart system
- No authentication unless asked
- No payment integration

---

## FINAL GOAL

This website should function as a 24/7 sales system that:
- Attracts users via SEO
- Builds trust via premium design
- Converts via WhatsApp and calls
- Drives showroom visits

The design should make Krishna Tiles feel like a **luxury destination**, not just another tile shop.
