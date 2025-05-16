# TechNova Solutions Landing Page

A professional, modern, and animated landing page for a software development company. Built with Next.js, React, and styled-components.

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth animations powered by Framer Motion
- Interactive components with hover effects and transitions
- Clean, modular component structure
- Optimized for performance

## Sections

- **Hero** - An eye-catching introduction with animated background elements
- **Services** - Comprehensive list of offered services with beautiful cards
- **Team** - Showcase of team members with interactive elements
- **Vision** - Company vision and values with animated illustrations
- **Clients** - Client logos and testimonials
- **Journey** - Client journey visualization with a timeline
- **Contact** - Contact form and company information
- **Footer** - Site navigation and additional information

## Technologies Used

- Next.js - React framework for production
- React - Frontend library
- styled-components - Component-level styling
- Framer Motion - Animation library
- React Intersection Observer - Trigger animations on scroll
- React Scroll - Smooth scrolling to page sections

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Colors can be adjusted in `styles/globals.css` by modifying the CSS variables
- Company information can be updated in respective component files
- Service offerings can be modified in the `Services.js` component
- Team member information can be updated in the `Team.js` component

## Email Configuration

The contact form is set up to send emails to aline@lucidcodelabs.com. To configure the email functionality:

1. Create a `.env.local` file in the root directory with the following variables:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
```

2. For Gmail, you'll need to use an App Password:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification > App passwords
   - Generate a new app password and use it for EMAIL_PASSWORD

3. For other email providers, adjust the EMAIL_HOST, EMAIL_PORT, and EMAIL_SECURE values accordingly.

## Deployment

This project can be easily deployed to platforms like Vercel or Netlify:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

MIT

## Acknowledgements

- Design inspired by modern software company websites
- Icons from Feather Icons
- Font from Google Fonts (Inter) 