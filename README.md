# Piran Gayrimenkul - Modern Real Estate Consultancy Website

A modern, responsive website for Piran Gayrimenkul, a leading Turkish real estate consultancy firm specializing in urban transformation, land development, and construction advisory services.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Multi-language Support**: Turkish (default) and English with react-i18next
- **Interactive Components**: Contact forms, navigation, and user-friendly interfaces
- **Professional Content**: Comprehensive service descriptions and project showcases
- **SEO Optimized**: Semantic HTML structure and proper meta tags
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🏗️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd pirangayrimenkul
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment on Vercel

This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with a single click

### Manual Deployment
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header.tsx     # Navigation with language toggle
│   ├── Hero.tsx       # Hero section with CTA
│   ├── Services.tsx   # Services showcase
│   ├── About.tsx      # About company section
│   ├── Projects.tsx   # Portfolio section
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer with links
├── i18n/              # Internationalization
├── locales/           # Translation files (TR/EN)
├── App.tsx            # Main application
└── main.tsx           # Entry point
```

## 🎨 Key Features

### Multi-language Support
- Turkish (default) and English
- Complete translation coverage
- Language toggle in header

### Services Offered
- **Kentsel Dönüşüm**: Urban transformation consultancy
- **Gayrimenkul Değerlendirme**: Real estate evaluation
- **İnşaat Danışmanlığı**: Construction consultancy  
- **Kurumsal Danışmanlık**: Corporate advisory services

### Professional Contact Forms
- React Hook Form with validation
- Multiple subject categories
- Responsive design
- Success/error handling

## 📱 Responsive Design
Optimized for desktop, tablet, and mobile devices with Tailwind CSS.

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

Built with ❤️ for Piran Gayrimenkul - Your Trusted Real Estate Partner
