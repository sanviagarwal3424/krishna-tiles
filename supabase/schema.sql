-- Krishna Tiles — Supabase Schema
-- Run this in your Supabase SQL Editor

-- ===== CATEGORIES =====
create table if not exists categories (
  id         text primary key,
  name       text not null,
  slug       text not null unique,
  description text,
  icon       text,
  image_url  text,
  product_count integer default 0,
  created_at timestamptz default now()
);

-- ===== BRANDS =====
create table if not exists brands (
  id          text primary key,
  name        text not null,
  tagline     text,
  description text,
  logo_url    text,
  created_at  timestamptz default now()
);

-- ===== PRODUCTS =====
create table if not exists products (
  id          text primary key,
  name        text not null,
  category    text references categories(id),
  brand       text references brands(id),
  size        text,
  finish      text,
  material    text,
  description text,
  features    text[],          -- array of feature strings
  images      text[],          -- array of image URLs
  room_types  text[],          -- e.g. ["bathroom", "kitchen"]
  price_range text,
  in_stock    boolean default true,
  is_featured boolean default false,
  is_new      boolean default false,
  created_at  timestamptz default now()
);

-- ===== INQUIRIES =====
create table if not exists inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  requirement text,
  product_id  text references products(id),
  status      text default 'new',   -- new | read | replied
  created_at  timestamptz default now()
);

-- ===== BLOG POSTS =====
create table if not exists blog_posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  title       text not null,
  excerpt     text,
  content     text,
  category    text,
  published   boolean default false,
  published_at timestamptz,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ===== RLS POLICIES =====
-- Enable Row Level Security
alter table categories  enable row level security;
alter table brands      enable row level security;
alter table products    enable row level security;
alter table inquiries   enable row level security;
alter table blog_posts  enable row level security;

-- Public read access for content tables
create policy "Public read categories"  on categories  for select using (true);
create policy "Public read brands"      on brands      for select using (true);
create policy "Public read products"    on products    for select using (true);
create policy "Public read blog_posts"  on blog_posts  for select using (published = true);

-- Anyone can insert inquiries (contact form)
create policy "Anyone can insert inquiries" on inquiries for insert with check (true);

-- Only authenticated users (admin) can manage everything
create policy "Admin manage categories"  on categories  for all using (auth.role() = 'authenticated');
create policy "Admin manage brands"      on brands      for all using (auth.role() = 'authenticated');
create policy "Admin manage products"    on products    for all using (auth.role() = 'authenticated');
create policy "Admin manage inquiries"   on inquiries   for select using (auth.role() = 'authenticated');
create policy "Admin manage blog_posts"  on blog_posts  for all using (auth.role() = 'authenticated');
