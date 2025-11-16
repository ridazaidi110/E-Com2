# Modern E-Commerce Website

A fully frontend-only modern e-commerce website built with React + Vite + TailwindCSS and Framer Motion for smooth animations.

## Features

- 🏠 **Home Page** - Hero section, category browsing, and featured products
- 🛍️ **Products Page** - Product grid with filtering and search functionality
- 📦 **Product Details** - Detailed product view with quantity selector
- 🛒 **Cart Page** - Full cart management with localStorage persistence
- ✅ **Checkout Page** - Order summary (demo only, no payment processing)
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Powered by Framer Motion

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Context API** - State management for cart and theme
- **localStorage** - Persistent cart storage

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── products.json          # Product data source
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with cart icon
│   │   ├── Footer.jsx         # Footer component
│   │   ├── ProductCard.jsx   # Reusable product card
│   │   └── AnimatedButton.jsx # Animated button component
│   ├── context/
│   │   ├── CartContext.jsx    # Cart state management
│   │   └── ThemeContext.jsx   # Dark mode state management
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   ├── Products.jsx       # Products listing page
│   │   ├── ProductDetails.jsx # Product detail page
│   │   ├── Cart.jsx           # Shopping cart page
│   │   └── Checkout.jsx       # Checkout page
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features in Detail

### Cart Management
- Add products to cart
- Update quantities
- Remove items
- Persistent storage using localStorage
- Real-time total calculation

### Product Filtering
- Filter by category
- Search by name or description
- URL-based category filtering

### Animations
- Page transitions
- Hover effects on cards and buttons
- Smooth image zoom on hover
- Animated cart badge
- Stagger animations for product grids

### Dark Mode
- Toggle button in navbar
- Persistent theme preference
- Smooth theme transitions

## Customization

### Adding Products
Edit `public/products.json` to add or modify products. Each product should have:
- `id` - Unique identifier
- `name` - Product name
- `price` - Product price (number)
- `description` - Product description
- `image` - Image URL
- `category` - Product category

### Styling
Modify `tailwind.config.js` to customize colors, spacing, and other design tokens.

## License

This project is open source and available for personal and commercial use.

