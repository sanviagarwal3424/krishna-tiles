# Logo + Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the bloated 138KB logo with compact geometric SVGs, rebuild the Header into a premium glass-morphic bar with scroll-shrink + entrance animation, and wire the new assets across Header/Hero/Footer.

**Architecture:** Two new SVG variants (`logo-mark` and `logo-full`), a rewritten `Header.tsx` using framer-motion + `usePathname`, updated CSS for the header block, and asset swaps in Hero + Footer. Delete the legacy 138KB SVGs last.

**Tech Stack:** Next.js 16 App Router, React 19, framer-motion 12, plain CSS with custom properties.

**Spec:** `docs/superpowers/specs/2026-04-21-logo-header-design.md`

---

## Task 1: Create `public/logo-mark.svg` (compact header logomark)

**Files:**
- Create: `public/logo-mark.svg`

- [ ] **Step 1: Write the compact logomark**

Write to `public/logo-mark.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 72" role="img" aria-label="Krishna Tiles">
  <!-- Diamond cluster (top-left decorative mark) -->
  <g transform="translate(6 10)">
    <rect x="0" y="12" width="14" height="14" transform="rotate(45 7 19)" fill="#884A7F"/>
    <rect x="14" y="0" width="14" height="14" transform="rotate(45 21 7)" fill="#FB743D"/>
    <rect x="14" y="24" width="14" height="14" transform="rotate(45 21 31)" fill="#A5F919"/>
  </g>
  <!-- Chevron K stack: three offset arrows, dark → light -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
    <path d="M56 12 L72 36 L56 60" stroke="#181820"/>
    <path d="M72 12 L88 36 L72 60" stroke="#888B8F"/>
    <path d="M88 12 L104 36 L88 60" stroke="#C4C7CA"/>
  </g>
  <!-- KRISHNA wordmark -->
  <text x="118" y="50" font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="38" font-weight="800" letter-spacing="-0.5" fill="#0492C5">KRISHNA</text>
</svg>
```

- [ ] **Step 2: Verify file size < 2KB**

Run: `wc -c public/logo-mark.svg`
Expected: under 2000 bytes.

- [ ] **Step 3: Do not commit yet**

Legacy files still reference `logo.svg`. Commit with the full swap in Task 5 once new files are wired.

---

## Task 2: Create `public/logo-full.svg` (hero/print variant with subtitle)

**Files:**
- Create: `public/logo-full.svg`

- [ ] **Step 1: Write the full logo**

Write to `public/logo-full.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 180" role="img" aria-label="Krishna Tiles · Sanitaryware · Taps · Kitchens">
  <!-- Diamond cluster -->
  <g transform="translate(12 20)">
    <rect x="0" y="20" width="22" height="22" transform="rotate(45 11 31)" fill="#884A7F"/>
    <rect x="22" y="0" width="22" height="22" transform="rotate(45 33 11)" fill="#FB743D"/>
    <rect x="22" y="40" width="22" height="22" transform="rotate(45 33 51)" fill="#A5F919"/>
  </g>
  <!-- Chevron K stack -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="12">
    <path d="M86 20 L112 60 L86 100" stroke="#181820"/>
    <path d="M112 20 L138 60 L112 100" stroke="#888B8F"/>
    <path d="M138 20 L164 60 L138 100" stroke="#C4C7CA"/>
  </g>
  <!-- KRISHNA wordmark -->
  <text x="180" y="82" font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="60" font-weight="800" letter-spacing="-0.5" fill="#0492C5">KRISHNA</text>
  <!-- Divider -->
  <line x1="12" y1="128" x2="408" y2="128" stroke="#0492C5" stroke-width="2"/>
  <!-- Category subtitles -->
  <g font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="16" font-weight="600" fill="#222223" letter-spacing="3">
    <text x="50" y="158" text-anchor="middle">TILES</text>
    <text x="160" y="158" text-anchor="middle">SANITARYWARE</text>
    <text x="270" y="158" text-anchor="middle">TAPS</text>
    <text x="365" y="158" text-anchor="middle">KITCHENS</text>
  </g>
  <!-- Vertical separators -->
  <g stroke="#888" stroke-width="1">
    <line x1="100" y1="142" x2="100" y2="162"/>
    <line x1="220" y1="142" x2="220" y2="162"/>
    <line x1="310" y1="142" x2="310" y2="162"/>
  </g>
</svg>
```

- [ ] **Step 2: Verify file size < 4KB**

Run: `wc -c public/logo-full.svg`
Expected: under 4000 bytes.

- [ ] **Step 3: Do not commit yet**

---

## Task 3: Rewrite `src/components/Header.tsx` with motion and active-page state

**Files:**
- Rewrite: `src/components/Header.tsx`

- [ ] **Step 1: Replace file contents**

Write the entire file with:

```tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { business, getCallLink } from "@/data/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        className={`header ${scrolled ? "header--scrolled" : ""}`}
        id="header"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="header__inner">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="header__logo" aria-label="Krishna Tiles home">
              <Image
                src="/logo-mark.svg"
                alt="Krishna Tiles"
                width={200}
                height={56}
                className="header__logo-img"
                priority
              />
            </Link>
          </motion.div>

          <nav className="header__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header__link ${isActive(link.href) ? "header__link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <a
              href={getCallLink()}
              className="header__cta-link"
              aria-label={`Call ${business.phoneDisplay}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <span>{business.phoneDisplay}</span>
            </a>
          </div>

          <button
            className={`header__menu-btn ${mobileOpen ? "header__menu-btn--open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mobile-nav__cta">
              <a href={getCallLink()} className="btn btn--primary btn--lg">
                Call Now — {business.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--lg"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit 2>&1 | tail -15`
Expected: no errors mentioning `Header.tsx` or `framer-motion`.

- [ ] **Step 3: Do not commit yet**

CSS classes referenced (`header--scrolled`, `header__link--active`, `header__menu-btn--open`, `header__logo-img`) don't exist yet. Task 4 adds them.

---

## Task 4: Update `src/app/globals.css` header block

**Files:**
- Modify: `src/app/globals.css` lines ~434–573 (everything in the `/* ===== Header ===== */` and mobile-nav blocks).

- [ ] **Step 1: Replace the header CSS block**

Find the block starting with `/* ===== Header ===== */` (line ~434) and ending before `/* ===== Hero ===== */` (line ~575). Replace everything in between with:

```css
/* ===== Header ===== */
:root {
  --header-height: 80px;
  --header-height-compact: 64px;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(24px);
  -webkit-backdrop-filter: saturate(180%) blur(24px);
  height: var(--header-height);
  transition: height var(--transition-base),
              background var(--transition-base),
              box-shadow var(--transition-base);
}

.header--scrolled {
  height: var(--header-height-compact);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.04),
              0 8px 24px -12px rgba(0, 0, 0, 0.12);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
  height: 100%;
  max-width: var(--max-width-wide);
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

.header__logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.header__logo-img {
  height: 44px;
  width: auto;
  transition: height var(--transition-base);
}

.header--scrolled .header__logo-img {
  height: 36px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.header__link {
  font-size: var(--fs-xs);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-light);
  transition: color var(--transition-fast);
  position: relative;
  padding: 0.25rem 0;
}

.header__link:hover {
  color: var(--color-primary);
}

.header__link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.header__link:hover::after,
.header__link--active::after {
  width: 100%;
}

.header__link--active {
  color: var(--color-primary);
}

.header__cta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header__cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--fs-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-text-light);
  transition: color var(--transition-fast);
}

.header__cta-link:hover {
  color: var(--color-primary);
}

.header__menu-btn {
  display: none;
  position: relative;
  width: 28px;
  height: 20px;
}

.header__menu-btn span {
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  height: 1.5px;
  background: var(--color-primary);
  transition: transform var(--transition-base), top var(--transition-base), opacity var(--transition-fast);
}

.header__menu-btn span:nth-child(1) { top: 4px; }
.header__menu-btn span:nth-child(2) { top: 14px; }

.header__menu-btn--open span:nth-child(1) {
  top: 9px;
  transform: rotate(45deg);
}

.header__menu-btn--open span:nth-child(2) {
  top: 9px;
  transform: rotate(-45deg);
}

/* Mobile nav */
.mobile-nav {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg);
  z-index: 99;
  padding: var(--space-3xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: 0;
}

.header--scrolled ~ .mobile-nav,
.header:has(~ .mobile-nav) {
  top: var(--header-height-compact);
}

.mobile-nav__link {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 400;
  letter-spacing: -0.01em;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-border-light);
  color: var(--color-text);
}

.mobile-nav__cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-3xl);
}

@media (max-width: 768px) {
  .header {
    height: var(--header-height-compact);
  }
  .header__logo-img {
    height: 36px;
  }
  .header__nav,
  .header__cta {
    display: none;
  }
  .header__menu-btn {
    display: block;
  }
}
```

- [ ] **Step 2: Remove the duplicate `--header-height` in `:root`**

The original `:root` at top of the file declares `--header-height: 72px;` (around line 63). Delete that single line — the new header block re-declares it with the new value (80px) plus the compact variant.

Search for `--header-height: 72px` and delete just that line from the top `:root` block.

- [ ] **Step 3: Do not commit yet**

Task 5 will swap logo references in Hero and Footer, delete legacy SVGs, and commit everything together.

---

## Task 5: Swap logo references in Hero + Footer, delete legacy SVGs, commit all

**Files:**
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/Footer.tsx`
- Delete: `public/logo.svg`
- Delete: `public/Logo Krishna Tiles (1).svg`

- [ ] **Step 1: Read HeroSection.tsx to locate the logo reference**

Run: `grep -n "logo.svg\|Logo Krishna\|src=" src/components/HeroSection.tsx`
Expected: one or more lines referencing `/logo.svg` or an inline `<svg>`.

If the hero uses an inline SVG (not a file reference), skip to Step 3.
If the hero references `/logo.svg`, change it to `/logo-full.svg` using Edit tool.

- [ ] **Step 2: Update Footer brand to use `logo-mark.svg`**

Open `src/components/Footer.tsx`. Find the element using the `.footer__brand` class (a text heading with "Krishna Tiles" or similar). Replace it with:

```tsx
<Image
  src="/logo-mark.svg"
  alt="Krishna Tiles"
  width={180}
  height={50}
  className="footer__brand-img"
/>
```

Ensure `import Image from "next/image";` is present.

Also add this rule to `globals.css` right after the `.footer__brand` rule:

```css
.footer__brand-img {
  height: 44px;
  width: auto;
  margin-bottom: var(--space-md);
  /* Invert to render on the dark footer background */
  filter: brightness(0) invert(1);
  opacity: 0.9;
}
```

The `filter: brightness(0) invert(1)` converts the whole logo to white — appropriate against the dark footer. If the logo needs to keep its blue/diamond colors on dark, replace the filter with `filter: none;` and test visually.

- [ ] **Step 3: Delete legacy SVGs**

```bash
rm public/logo.svg "public/Logo Krishna Tiles (1).svg"
```

- [ ] **Step 4: Verify no stale references**

Run: `grep -rn "logo.svg\|Logo Krishna Tiles" src public 2>&1 | grep -v logo-mark\\|logo-full`
Expected: no output.

- [ ] **Step 5: Build**

Run: `npm run build 2>&1 | tail -30`
Expected: succeeds. 38 pages generated.

- [ ] **Step 6: Commit everything**

```bash
git add public/logo-mark.svg public/logo-full.svg src/components/Header.tsx src/components/Footer.tsx src/components/HeroSection.tsx src/app/globals.css
git add -u public
git commit -m "feat(header): premium refined header with motion, new compact logomark"
```

---

## Task 6: Playwright verification

**Files:**
- Auto-create: `docs/superpowers/artifacts/header-*.png`

- [ ] **Step 1: Start dev server in background**

Start `npm run dev` in background, wait for it to be ready on port 3000 (or 3001 if 3000 is in use — capture the chosen port).

- [ ] **Step 2: Desktop screenshots via Playwright MCP**

Using Playwright MCP tools:
1. `browser_resize` to 1440×900.
2. `browser_navigate` to `http://localhost:<port>/`.
3. `browser_take_screenshot` saving to `docs/superpowers/artifacts/header-desktop-top.png`.
4. Scroll 300px: `browser_evaluate` with `window.scrollTo(0, 300)`.
5. `browser_take_screenshot` saving to `docs/superpowers/artifacts/header-desktop-scrolled.png`.
6. Navigate to `/products`.
7. `browser_take_screenshot` saving to `docs/superpowers/artifacts/header-desktop-products.png` — active state should show on Products link.

- [ ] **Step 3: Mobile screenshots**

1. `browser_resize` to 390×844.
2. `browser_navigate` to `http://localhost:<port>/`.
3. `browser_take_screenshot` saving to `docs/superpowers/artifacts/header-mobile-closed.png`.
4. `browser_click` on the hamburger button.
5. `browser_take_screenshot` saving to `docs/superpowers/artifacts/header-mobile-open.png`.

- [ ] **Step 4: Console check**

Run: `browser_console_messages` — expect no errors.

- [ ] **Step 5: Kill dev server**

- [ ] **Step 6: Commit screenshots**

```bash
git add docs/superpowers/artifacts/
git commit -m "docs: header redesign verification screenshots"
```

---

## Success criteria

- `npm run build` exits zero.
- `ls public/` shows only `images/`, `logo-mark.svg`, and `logo-full.svg` — no 138KB legacy SVGs.
- Header renders logo readably at desktop and mobile.
- Scroll past 8px compacts the header (height shrinks, shadow appears).
- Current route link shows active underline.
- No console errors on `/`, `/products`, `/about`.
- 5 screenshots saved under `docs/superpowers/artifacts/`.
