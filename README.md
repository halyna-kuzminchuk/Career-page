# MacArtney Careers Website — Design Brief

---

## Working Method

This project is built step by step.

Rules for AI:
- Always propose before doing
- One step at a time
- Wait for explicit approval before moving to the next step
- Never introduce changes that were not requested
- If something is unclear — ask, do not assume
- If a decision has visual consequences — show options, do not pick

---

## Project Goal

Evolve the MacArtney Careers website into a modern, Stripe-inspired design
while keeping it recognisably MacArtney.

This is a **visual evolution**, not a redesign.

The scope covers all pages and reusable templates:
- Home / careers landing
- Locations overview
- Sustainability
- Job search / vacancies
- Work category template — Sales, Engineering, Workshop, Business Support, etc.
- Location detail template
- Article template

Your job is purely:
→ visual composition
→ layout refinement
→ component transformation

NEVER:
- Change text content
- Add new sections
- Remove existing sections
- Reorganise content order

---

## Target Audience

This website targets candidates at the **Interest stage** of the hiring funnel.
They arrived via a job post or industry referral — not brand awareness.

### Who they are

Thoughtful, skilled professionals seeking meaningful work, supportive teams,
and long-term growth. Four core profiles:

- **Sales** — relationship-builders energised by technology, who translate
  complexity into clear solutions for global clients
- **Engineering** — technically driven, want ownership, global projects,
  and a culture that trusts their judgment
- **Workshop** — hands-on craftspeople who take pride in quality and want
  a team where every skill level is valued
- **Business Support** — contributors who want their work to matter and to
  be treated as individuals, not employee IDs

### How they arrive

Hopeful but cautious. Motivated by trust, learning, and purpose.
Wary of high-pressure environments, empty slogans, and signs that
employees are treated as numbers.

### What they need to see

Authenticity, clarity, and real evidence of a people-first culture.
Real people in real moments — not staged photography or corporate copy.

### Primary CTA goal

Move the visitor from **interest → intent**:
explore open roles or submit a spontaneous application.

### Emotional journey

Arrive curious → feel recognised → leave trusting

---

## Brand & Visual Identity

### Philosophy

The visual system should feel:
- calm
- premium
- technical
- human
- trustworthy
- Scandinavian
- spacious
- editorial rather than corporate

Avoid:
- overly aggressive tech aesthetics
- startup-style clutter
- excessive gradients
- visual noise
- trendy UI effects without purpose

### Tone of voice

Warm, respectful, and grounded.
Speak with clarity and care — like a trusted colleague, not a billboard.
Avoid hype and jargon.

---

## Colour System

Use **only** the colours defined below. No exceptions.
Do not introduce any colour outside this system —
not for shadows, borders, overlays, or hover states.
All colour values must be expressed as CSS custom properties.

### Solid colours

```css
--color-dark-blue:  #001F3E;
--color-mid-blue:   #002D5A;
--color-accent:     #FCB331;
--color-cyan:       #3E91AD;
--color-white:      #F7F6F9;
--color-grey:       #CAD0D9;
--color-black:      #0A0A0A;
```

### Photography gradient

Applied to image backgrounds only. Never over people.
Angle: −51° · Blend mode: Overlay

| Stop | Hex      |
|------|----------|
| 0%   | #E8F1F8  |
| 25%  | #C8DFF0  |
| 45%  | #DDE9F2  |
| 55%  | #B5CFE4  |
| 75%  | #9DBDDA  |
| 100% | #8BAECE  |

---

## Typography

### Fonts

```css
/* Headings */
font-family: "Ubuntu", "IBM Plex Sans", system-ui;

/* Body */
font-family: "IBM Plex Sans", system-ui, "Segoe UI", sans-serif;
```

### Scale

```css
--text-xs:      0.75rem;    /* 12px — micro labels */
--text-sm:      0.8125rem;  /* 13px — UI labels, tags */
--text-base:    1rem;       /* 16px — body */
--text-md:      1.125rem;   /* 18px — intro paragraphs */
--text-lg:      1.25rem;    /* 20px — card titles */
--text-xl:      1.375rem;   /* 22px — sub-headings */
--text-2xl:     1.5rem;     /* 24px — H4/H5 */
--text-3xl:     1.9375rem;  /* 31px — H3 */
--text-4xl:     2.375rem;   /* 38px — H2 */
--text-5xl:     3rem;       /* 48px — H1 subtitles */
--text-6xl:     3.75rem;    /* 60px — hero headings */
--text-display: 5rem;       /* 80px — display */
```

---

## Spacing System

```css
--space-1:  0.25rem;
--space-2:  0.5rem;
--space-3:  0.75rem;
--space-4:  1rem;
--space-6:  1.5rem;
--space-8:  2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
```

---

## Border Radius

```css
--radius-sm:  8px;
--radius-md:  12px;
--radius-lg:  18px;
--radius-xl:  24px;
--radius-2xl: 32px;
```

---

## Page Structure (FROZEN)

Content order on every page is final. Visual treatment only.

### Main Navigation
1. Home
2. Work
   - Sales
   - Engineering
   - Workshop
   - Business Support
3. Locations
4. Sustainability
5. Jobs CTA button

`Jobs` is a CTA button in the navigation, not a standard navigation item.

### Home / Front Page
1. Navigation
2. Hero — headline, subtitle, CTA
3. Career area cards — Sales, Engineering, Workshop, Business Support
4. Locations preview
5. Employee quote
6. CTA banner

### Locations Overview
Structure frozen — visual treatment only.

Contains location cards that link to the reusable location detail template.

### Sustainability
Structure frozen — visual treatment only.

### Job Search / Vacancies
Structure frozen — visual treatment only.

This page is reached through the `Jobs` CTA button.

### Work Category Template
Structure frozen — visual treatment only.

Used for role/category pages such as:
- Sales
- Engineering
- Workshop
- Business Support

### Location Detail Template
Structure frozen — visual treatment only.

Used for all individual location pages. These pages share the same structure.

### Article Template
Structure frozen — visual treatment only.

---

## Component Rules

Components must:
- be reusable
- be isolated
- avoid side effects
- avoid page-specific dependencies
- support accessibility by default
- degrade gracefully without JavaScript

Each component should:
- have a single responsibility
- expose minimal required modifiers
- avoid deep nesting
- avoid styling based on DOM position

Avoid:
- component-specific magic numbers
- tightly coupled layouts
- styling children through parent page selectors

---

## Layout Rules

- Mobile-first always
- Prefer asymmetric splits: 40/60 or 60/40
- Avoid rigid equal-column grids unless functionally necessary
- Prefer floating visuals and layered images over flat placement
- Use flex/grid — never positioning hacks
- No fixed heights unless absolutely necessary

---

## File Structure

```
/css
  tokens.css
  base.css
  utilities.css
  layout.css
  /components
    buttons.css
    cards.css
    forms.css
    navigation.css
    hero.css
    modals.css
  /pages
    home.css
    work.css
    life.css
    locations.css
    search.css

/js
  /core
    navigation.js
    accessibility.js
  /features
    animations.js
    search.js
    alerts.js
```

---

## Naming Convention

BEM-inspired:

```
block__element--modifier

Examples:
  card__title
  card__image
  card--featured
  hero__media
  btn--outline
  navigation__item
```

---

## HTML Rules

- Semantic HTML always
- Proper heading hierarchy
- Landmark elements
- Descriptive button text and aria-labels
- No div soup
- No fake buttons from divs

---

## CSS Rules

- CSS custom properties for all values
- clamp() for responsive typography
- No `!important`
- No hardcoded colours
- No arbitrary spacing values
- No inline styles
- Max nesting depth: 3 levels

---

## JavaScript Rules

- Vanilla JS only
- ES modules
- defer all scripts
- Progressive enhancement
- CSS animation before JS animation
- No unnecessary frameworks

---

## Contrast Requirements

All text and interactive elements must meet WCAG AA contrast minimums.
Never sacrifice readability for aesthetics.

Focus states must remain clearly visible on:
- dark backgrounds
- image overlays
- tinted surfaces
- gradient areas

---

## Accessibility

Minimum: WCAG AA

Required:
- Visible focus states
- Keyboard navigation
- Screen reader support
- Logical tab order
- Sufficient colour contrast
- Skip links
- prefers-reduced-motion support

---

## Image Rules

Required:
- use real photography whenever possible
- avoid generic stock imagery
- use responsive images
- preserve natural skin tones
- optimize all assets

Technical requirements:
- use width and height attributes
- lazy-load non-critical images
- use WebP or AVIF
- avoid CLS shifts
- use meaningful alt text

Avoid:
- decorative images without purpose
- oversaturated editing
- artificial corporate stock imagery

---

## Performance

Target: Lighthouse 90+

Required:
- Responsive images
- Lazy loading
- WebP/AVIF format
- Deferred scripts
- Minimal dependencies

---

## Umbraco Compatibility Rules

This frontend system will later be implemented in Umbraco CMS.
All code and architecture decisions must remain compatible with:

- Razor templates
- server-rendered HTML
- CMS-managed content
- dynamic content blocks
- reusable content modules

Required:

- semantic server-rendered HTML
- modular reusable sections
- CMS-friendly component structure
- content editable independently from layout
- flexible content lengths
- resilient layouts for unknown editor input

Avoid:

- hardcoded content assumptions
- JS-rendered critical content
- layout systems dependent on exact text length
- fragile DOM coupling
- framework-specific rendering assumptions
- tightly coupled frontend state systems

Components must:

- tolerate missing optional content
- support dynamic CMS fields
- support editor-controlled ordering where possible
- remain accessible with dynamic content

All frontend code should be:

- progressively enhanced
- server-render friendly
- maintainable by backend developers
- compatible with long-term enterprise maintenance

The frontend should function correctly:

- before JavaScript loads
- with partial content
- with translated content
- with editor-generated variations

---

## Success Criteria

The result should:
- feel like Stripe visually
- feel like MacArtney in identity
- be directly implementable in the existing codebase
- elevate the current design without rebuilding it
- pass WCAG AA
- score Lighthouse 90+
