# GreenShelf - Sustainable Products Store

## Project Description
GreenShelf is a modern web application built with Next.js that showcases a curated collection of eco-friendly and sustainable products. Users can browse products, view detailed information, and authenticate through a mock login system. The app features a responsive design with dark/light theme toggling, a reusable Navbar and Footer, and plans for social authentication integration.

---

## Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SadiaAhmedBushra/greenshelf
   cd greenshelf


2. **Install dependencies:**
    npm install


3. **Run the development server:**
    npm run dev


4. **Open your browser:**

Go to http://localhost:3000 to see the app.


## Route Summary
| Route           | Description                      |
| --------------- | -------------------------------- |
| `/`             | Home page                        |
| `/products`     | List of all sustainable products |
| `/product/[id]` | Product details page             |
| `/login`        | Mock login page                  |



## Implemented Features

- Responsive Navbar with active link highlighting and theme toggle (light/dark mode).
- Footer with relevant links (customizable).
- Products listing page with cards showing product image, name, price, and description preview.
- Product details page with detailed description and larger product image.
- Mock authentication system with hardcoded credentials.
- Login/logout functionality that updates UI accordingly.
- Route protection for authenticated pages (planned for full implementation).
- Skeleton loaders for products and product details during data fetching.
- Smooth animations on page content using Framer Motion.

## Feature Explanation

### Responsive Navbar & Footer

The Navbar adapts to screen size with a hamburger menu on mobile. It shows active page links and allows users to toggle between light and dark themes. The Footer provides consistent site information across pages.

### Products Listing & Details

Users can browse a grid of products, each displayed as a card with uniform image sizes and essential info. Clicking a product navigates to a detail page with full info and a large image, all styled for an aesthetic experience.

### Mock Authentication

Users can log in using hardcoded email and password. Upon login, the Navbar updates to replace the Login link with the user’s avatar and a dropdown menu with options including Logout. This allows for simulating a user session without backend integration.

### Route Protection (Planned)

Certain pages will require login; unauthenticated users will be redirected to login. This feature will be expanded to include real authentication methods in future updates.

### Loading Skeletons & Animations

While data loads, skeleton placeholders ensure smooth UX without abrupt content flashes. Framer Motion is used for subtle fade and slide animations to enhance page transitions and interactions.
