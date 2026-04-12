@AGENTS.md
# CLAUDE.md

## PURPOSE

This file defines how Claude should behave while building the Krishna Tiles website.

Goal:

* Minimize token usage
* Avoid unnecessary explanations
* Focus on clean, production-ready code

---

## GLOBAL INSTRUCTIONS

* Do not explain concepts unless explicitly asked
* Do not repeat requirements
* Do not generate long text outputs
* Always prefer concise code over verbose code
* Always reuse components instead of duplicating logic
* Never over-engineer

---

## RESPONSE STYLE

* Output only what is asked
* Prefer:

  * Code blocks
  * Short bullet points
* Avoid:

  * Paragraph explanations
  * Theory
  * Over-commenting

---

## CODE GENERATION RULES

* Use Next.js (App Router) + Tailwind CSS
* Use functional components only
* Keep files small and modular
* Reuse components wherever possible

### Folder Structure

* /app → pages
* /components → reusable UI
* /lib → helpers / utils
* /services → API / Supabase calls

---

## UI RULES

* Mobile-first always
* Minimal design
* No unnecessary animations
* Use Tailwind only (no CSS files unless required)

---

## PERFORMANCE RULES

* Use Next/Image for all images
* Lazy load wherever possible
* Avoid large dependencies
* Avoid unnecessary re-renders

---

## REUSABILITY RULE

Before creating a new component:

* Check if an existing component can be reused
* If similar, extend instead of duplicate

---

## SUPABASE RULES

* Keep queries simple
* Avoid complex joins unless necessary
* Use clear table naming:

  * products
  * categories
  * brands
  * inquiries

---

## SEO RULES

* Always include:

  * title
  * meta description
* Use semantic HTML (h1, h2, etc.)
* Optimize images with alt text

---

## UX RULES

* Always include:

  * WhatsApp CTA
  * Call CTA
* Keep navigation simple
* Avoid multi-step flows

---

## WHEN GENERATING PAGES

Always:

* Keep layout clean
* Include CTA sections
* Avoid unnecessary dummy content

---

## WHAT TO AVOID

* No authentication system unless asked
* No payment integration
* No cart system
* No over-complicated state management

---

## DEBUGGING RULE

When fixing bugs:

* Show only the fix
* Do not repeat full file unless required

---

## TOKEN OPTIMIZATION RULES

* Prefer editing existing code instead of rewriting
* Avoid regenerating entire files
* Use diffs or partial updates when possible
* Keep responses under approximately 300 lines unless necessary

---

## PRIORITY ORDER

1. Functionality
2. Performance
3. SEO
4. Design

---

## OUTPUT EXPECTATION

Every response should:

* Be directly usable
* Require minimal modification
* Be production-oriented

---

## FINAL PRINCIPLE

Build like a senior engineer working under constraints:

* Fast
* Clean
* Scalable
* No fluff
