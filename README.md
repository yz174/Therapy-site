# Dr. Serena Blake Psychology Website - https://serenablake.netlify.app/

A modern, responsive therapy practice website built with Next.js, featuring a calming design aesthetic and comprehensive patient engagement features.

## 🌿 Project Overview

This is a professional website for Dr. Serena Blake, a licensed clinical psychologist (PsyD) based in Los Angeles, CA. The website serves as both an informational platform and a patient acquisition tool, designed with therapeutic principles in mind to create a calming, trustworthy online presence.

## ✨ Unique Features & Therapeutic Focus

### 🧠 Psychology-Specific Design Elements
- **Calming Color Palette**: Light sap green theme promoting tranquility and healing
- **Trauma-Informed Design**: Non-triggering visuals and gentle animations
- **Trust-Building Elements**: Professional credentials, licensing information, and transparent pricing
- **Accessibility-First**: High contrast ratios and readable typography for all users

### 🎯 Target Audience Considerations
- **Anxiety Sufferers**: Soothing animations and non-overwhelming visual hierarchy
- **Trauma Survivors**: Safe, predictable navigation and gentle micro-interactions
- **Couples**: Dedicated relationship counseling section with appropriate imagery
- **General Mental Health**: Comprehensive FAQ addressing common therapy concerns

### 🔒 Privacy & Trust Features
- **HIPAA Compliance Messaging**: Clear privacy indicators throughout
- **Professional Credentials**: Prominent display of PsyD licensing
- **Transparent Pricing**: Upfront session fees and insurance information
- **Contact Security**: Multiple secure communication channels

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - Component-based UI library
- **TypeScript 5.2.2** - Type-safe development

### Styling & UI
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Tailwind Animate** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Cross-browser CSS compatibility

### Deployment
- **Static Export** - Optimized for hosting on any static platform
- **Image Optimization** - Unoptimized for static deployment compatibility

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   ├── Navigation.tsx     # Responsive navigation with scroll effects
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Landing section with CTA
│   │   ├── About.tsx      # Dr. Blake's credentials and experience
│   │   ├── Services.tsx   # Therapy services and pricing
│   │   ├── FAQ.tsx        # Common therapy questions
│   │   └── Contact.tsx    # Contact form and information
│   └── ui/                # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions
└── public/
    └── image.png          # Dr. Blake's professional photo
```

## 🎨 Design Philosophy

### Therapeutic Color Psychology
- **Primary Green (#10b981)**: Growth, healing, and renewal
- **Emerald Accents (#059669)**: Trust, stability, and professionalism
- **Light Backgrounds**: Reduces eye strain and creates openness
- **High Contrast Text**: Ensures accessibility for all users

### User Experience Principles
- **Progressive Disclosure**: Information revealed gradually to prevent overwhelm
- **Consistent Navigation**: Predictable user interface reduces anxiety
- **Mobile-First Design**: Accessible on all devices
- **Fast Loading**: Optimized performance for immediate access to help


## 🔧 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd dr-serena-blake-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Design

### Mobile Optimizations
- Touch-friendly navigation
- Optimized form inputs
- Readable typography scaling
- Efficient image loading

## 🎯 SEO & Performance

### Optimization Features
- **Static Generation**: Fast loading times
- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Comprehensive page metadata
- **Image Optimization**: Responsive images with proper alt text
- **Clean URLs**: SEO-friendly routing structure

