# Shafaq's Bridal Salon — Website

A modern, responsive, frontend-only luxury website for **Shafaq's Bridal Salon**, a premier beauty salon operating for 15 years in DHA Phase 2, Lahore, Pakistan. Built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Features

- **Luxury Bridal Design**: Elegant palette (blush pink, ivory, gold accents, deep maroon contrast), Playfair Display headings, and smooth scroll interactions.
- **Single-Page Navigation**: Sticky header with smooth scrolling across all sections (Home, About, Services, Packages, Gallery, Reviews, Booking, Contact).
- **Comprehensive Services & Editable Prices**: 9 distinct salon service categories with editable pricing placeholders.
- **Curated Bridal Packages**: Classic, Premium, and Royal package cards with detailed inclusions.
- **Interactive Gallery & Lightbox**: Masonry grid with category filters (Bridal, Makeup, Hair, Nails) and high-res modal view.
- **Client Reviews & Google Rating**: Testimonials and a Google rating badge (4.1 ⭐ from 71+ reviews).
- **WhatsApp Booking Concierge**: Interactive booking form that validates user inputs and generates a pre-filled WhatsApp message sent directly to `923244456711`.
- **Location & Google Maps**: Embedded map for DHA Phase 2 T-Block Lahore with quick directions and FAQs.
- **Bilingual English & Urdu Toggle**: Instant RTL/LTR language switcher supporting Urdu text.
- **Floating WhatsApp & Mobile Call Button**: Quick contact access for mobile visitors.

---

## 📁 Project Structure

```text
Shafaq_Saloon/
├── index.html              # HTML root with Google Fonts & SEO meta tags
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Custom theme colors & fonts
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── src/
    ├── main.jsx            # React root entry point
    ├── App.jsx             # Main App layout & language state
    ├── index.css           # Tailwind directives & custom animations
    ├── data/
    │   └── siteData.js     # 📝 All static content, services, pricing & Urdu translations
    └── components/
        ├── AnnouncementBar.jsx # Top promotional banner
        ├── Header.jsx          # Sticky navigation & language toggle
        ├── Hero.jsx            # Hero banner with trust metrics
        ├── About.jsx           # 15 years history & stat counters
        ├── Services.jsx        # Service cards & WhatsApp inquiry
        ├── Packages.jsx        # Bridal package tiers
        ├── Gallery.jsx         # Filterable gallery & lightbox modal
        ├── Reviews.jsx         # Customer testimonials & Google badge
        ├── BookingForm.jsx     # Appointment form with WhatsApp integration
        ├── Contact.jsx         # Address, opening hours, Google map & FAQs
        ├── Footer.jsx          # Footer links & social icons
        └── FloatingWhatsApp.jsx# Bottom-right floating chat button
```

---

## 🚀 How to Run Locally

1. **Clone or open the project folder** in your terminal.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## ✏️ How to Edit Content

All text, services, prices, phone numbers, addresses, and reviews are stored in a single easy-to-edit file:
`src/data/siteData.js`

To update prices, services, or business details:
1. Open `src/data/siteData.js`.
2. Edit the relevant field (e.g. `price`, `address`, `phone`, `services`, or `packages`).
3. Save the file — the website updates instantly with Vite HMR (Hot Module Replacement).

---

## 🖼️ How to Replace Images

The project currently uses professional Unsplash placeholders. To replace them with real salon photos:
1. Place your salon photos in a `public/images/` folder (or upload them to an image hosting service).
2. Update the image URLs in `src/data/siteData.js` (under `services`, `gallery`, and component images).

---

## 🌐 How to Deploy for Free

### Option 1: Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click **New Project**.
3. Import your GitHub repository. Vercel will automatically detect Vite and configure the build settings (`npm run build`).
4. Click **Deploy**. Your site will be live instantly with a free SSL certificate!

### Option 2: Netlify
1. Run the build command locally to verify:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository to Netlify for continuous deployment.
