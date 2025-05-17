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

The contact form is set up to send emails from aline@lucidcodelabs.com to info@lucidcodelabs.com using SendGrid.

### SendGrid Setup Instructions

1. Create a free SendGrid account at [https://sendgrid.com/](https://sendgrid.com/)
2. Verify your sender identity (Single Sender Verification for the free tier)
   - Add and verify aline@lucidcodelabs.com as a sender
3. Create an API Key
   - Navigate to Settings > API Keys > Create API Key
   - Give it a name like "Website Contact Form"
   - Select "Restricted Access" and enable "Mail Send" permissions
   - Copy the generated API key
4. Create a `.env.local` file in the root directory with:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

### Important Notes

- The sender email (aline@lucidcodelabs.com) **must be verified** in your SendGrid account
- The free tier of SendGrid allows 100 emails per day
- This approach is much more reliable than using direct SMTP 
- SendGrid provides tracking, analytics, and better email deliverability

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