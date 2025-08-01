# Website Plan – WTFManuals.com

## Overview
WTFManuals.com will launch as a SaaS/app landing page to showcase the platform, capture leads, and provide a gateway for users to sign up for the service. The website will emphasise clarity, trust, and ease of use, reflecting our brand mission to “turn chaos into clarity.”

## Recommended Stack
- **Jamstack Approach:** Use **Next.js** (React framework) for static site generation and dynamic client‑side interactions. This provides fast load times and good SEO.  
- **Hosting:** Deploy to **Vercel** or **Netlify** for seamless CI/CD and global edge caching.  
- **CMS Integration:** Use **Notion** as a simple CMS for blog posts and updates; integrate via Notion API.  
- **Forms & CRM Integration:** Use **Notion forms** or embed a third‑party form (e.g., Typeform) connected to Zapier to automatically add leads to your Notion CRM.

If you prefer a no‑code approach, **Webflow** can also be used to design and publish the site without coding while maintaining responsiveness.

## Sitemap
- **Home:** Hero section, value proposition, primary call‑to‑action (CTA) to start for free.  
- **Features:** Detailed breakdown of platform capabilities (ingestion, enrichment, interactive manuals, video scripts).  
- **Pricing:** Clear pricing tiers with comparison table and CTA buttons.  
- **How It Works:** Visual explanation of the workflow: upload a manual → AI enrichment → output interactive guide.  
- **Blog:** Educate users with articles and tutorials (powered by Notion or Markdown).  
- **About Us:** Team overview, mission and story.  
- **Contact / Support:** Support form, FAQs, and social links.  
- **Login / Sign Up:** Authentication gateway to the SaaS dashboard.

## Wireframe‑Style Layout
1. **Hero Section:** Full‑width background with tagline “Turn chaos into clarity,” a short description and a primary CTA button (“Start Free”).  
2. **Trust Indicators:** Logos of partner brands or testimonials to build credibility.  
3. **Feature Blocks:** Three or four cards explaining ingestion, enrichment, interactive manuals, and video script generation, each with icons.  
4. **Screenshots/Mockups:** Visuals showing before/after manual conversions.  
5. **Pricing Table:** Display different tiers; highlight the recommended plan.  
6. **FAQ Accordion:** Answer common questions about privacy, pricing, and usage.  
7. **Footer:** Quick links (Privacy, Terms, Legal, Contact), social icons and newsletter signup.

## Starter Code (HTML/CSS/JS)
The `/website_src` folder contains a basic starter template using plain HTML, CSS and a sprinkle of JavaScript. You can migrate it into a Next.js or React project later. The structure includes:

- `index.html`: Homepage with hero, feature section, pricing table and contact form.  
- `style.css`: Basic styling consistent with your brand palette.  
- `script.js`: Simple interactive behaviours (menu toggle, form submission placeholder).  

### Setup Instructions
1. Copy the `website_src` folder to your development environment.  
2. Open `index.html` in a browser to view the landing page.  
3. Customise text, replace placeholder images with your brand assets, and update links.  
4. If converting to Next.js: create pages for each route and import CSS modules; embed dynamic content from Notion or your database.  
5. Configure forms to send submissions to your Notion CRM using Zapier or Make.

## Security Best Practices
- Enforce HTTPS and use secure headers (Content‑Security‑Policy, X‑Frame‑Options).  
- Validate and sanitise all user inputs server‑side; protect against injection and XSS.  
- Use strong authentication methods and password hashing for login.  
- Implement rate limiting and monitoring for abusive requests.

## SEO & Accessibility
- Add descriptive meta titles, descriptions and structured data (JSON‑LD).  
- Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<footer>`).  
- Provide `alt` text for images and ensure contrast meets WCAG guidelines.  
- Ensure keyboard navigability and ARIA labels for interactive elements.  

## Hosting, CMS & Domain Advice
- **Domain:** Register “wtfmanuals.com” with a reputable registrar (e.g., Namecheap).  
- **Hosting:** Use Vercel/Netlify (for Next.js) or Webflow hosting.  
- **CMS:** Connect Notion via API for blog posts; alternatively use a headless CMS like Sanity or Contentful.  
- **Analytics:** Set up Google Analytics or Plausible to track site performance.

Following this plan will give you a scalable foundation that can evolve as you add features and content.
