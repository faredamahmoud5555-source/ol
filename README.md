# AELIA — Luxury Fragrance E‑Commerce

An original, ultra-minimal luxury perfume storefront (brand, copy, and
visual identity are wholly original — inspired by the *category* of
niche perfumery, not copied from any single brand). Built with Next.js
15/16 App Router, TypeScript, Tailwind v4, Framer Motion, GSAP, Prisma,
and Stripe.

## What's fully built

- **All 12 requested pages**: Home, Collection, Product Detail, About,
  Journal (index + detail), Contact, Wishlist, Cart, Checkout, Login,
  Register, User Dashboard, Admin Dashboard (Overview/Orders/
  Customers/Inventory/Coupons).
- **Design system**: warm-bone/matte-ink/brass palette, Fraunces
  (display serif) + Manrope (body sans), an original hand-drawn bottle
  illustration used in place of stock photography, editorial spacing.
- **Animation**: Framer Motion page transitions, scroll reveals,
  magnetic CTA buttons, animated add-to-cart; GSAP `ScrollTrigger`
  pinned horizontal scroll on the ingredients section.
- **Commerce logic**: cart/wishlist state (persisted to
  `localStorage`), coupon codes, search/filter/sort on the collection
  page, RHF + Zod validation on every form.
- **Real backend code, not mocked stubs**: Prisma schema
  (`prisma/schema.prisma`) modeling Users, Products, Orders,
  OrderItems, Reviews, Coupons, Wishlist, Addresses, NextAuth tables;
  a Stripe Checkout session route and signature-verified webhook that
  updates order status and emails a confirmation via Resend; a
  Credentials-based NextAuth v5 setup with bcrypt password hashing;
  a Cloudinary upload helper for admin product photos.

## What you need to add before this is live

This was built in a sandboxed environment with no database, no Stripe/
Resend/Cloudinary accounts, and no outbound access to Google Fonts or
Prisma's binary CDN — so a few things are wired in code but need your
own credentials and a `prisma generate`/`migrate` pass to go live:

1. **Database**: create a Postgres instance (Vercel Postgres, Neon,
   Supabase, Railway all work), set `DATABASE_URL` in `.env`, then run:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
2. **Seed the catalog**: the storefront currently reads products from
   `src/lib/data.ts` (in-memory) so it runs with zero setup. To move to
   Postgres, write a `prisma/seed.ts` from that same file and point
   `src/app/collection`, `src/app/product/[slug]`, and
   `src/app/api/checkout` at `prisma.product.findMany()` /
   `findUnique()` instead.
3. **Stripe**: set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`
   (from `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
   in dev, or the Dashboard in production).
4. **Auth**: set `AUTH_SECRET` (`npx auth secret`) and wire the
   `/api/register` route's created user into a real session; add an
   admin-role check (e.g. a middleware on `/admin/*`) before launch —
   the Admin Dashboard currently has no route guard.
5. **Resend / Cloudinary**: add API keys; the code paths already call
   both correctly.
6. **Fonts**: `next/font/google` needs outbound network access at
   build time — this works automatically on Vercel and any normal dev
   machine; it only fails in network-restricted sandboxes.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion ·
GSAP · React Hook Form · Zod · Prisma · PostgreSQL · NextAuth v5 ·
Stripe · Cloudinary · Resend · shadcn-style primitives

## Local development

```bash
npm install
cp .env.example .env   # fill in real values
npx prisma generate
npm run dev
```

## Folder structure

```
src/
  app/                 # routes (App Router)
    admin/             # admin dashboard (overview, orders, customers, products, coupons)
    api/                # route handlers (auth, checkout, webhooks, register, contact, newsletter)
    product/[slug]/
    journal/[slug]/
    ...
  components/          # UI building blocks (product-card, hero, bottle-mark, etc.)
  lib/                  # data.ts (mock catalog), store.tsx (cart/wishlist), prisma/stripe/auth/resend/cloudinary clients
prisma/
  schema.prisma         # full data model
```

## Design notes

- No photography is used anywhere — every fragrance is represented by
  the same single-line `BottleMark` SVG illustration, distinguished
  only by its cap/liquid color, in place of licensed or AI-generated
  product photos.
- Brand name, product names, and all copy (philosophy, journal posts,
  ingredient sourcing notes) are original.
