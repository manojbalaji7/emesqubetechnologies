export const site = {
  name: "EMES Qube Technologies",
  shortName: "EMES Qube",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.emesqube.com",
  email: "hello@emesqube.com",
  phone: "+91 99999 99999",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
  location: "Chennai, Tamil Nadu, India",
  tagline: "Modern digital solutions for growing businesses",
  description: "EMES Qube Technologies delivers professional website development, web application development, and mobile app development services for small and medium businesses."
};

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    summary: "Fast, responsive, SEO-friendly corporate websites and landing pages that convert visitors into inquiries.",
    bullets: ["Business websites", "Landing pages", "CMS-ready structure", "Technical SEO", "Performance optimization"]
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    summary: "Secure, scalable web applications built for operations, customer portals, dashboards, and workflow automation.",
    bullets: ["Custom dashboards", "Role-based access", "API integrations", "Cloud-ready architecture", "Analytics dashboards"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary: "User-friendly mobile apps for Android and iOS with reliable performance and modern user experiences.",
    bullets: ["Android and iOS apps", "Cross-platform apps", "Push notifications", "App store readiness", "Backend integration"]
  }
];

export const faqs = [
  ["Do you work with small businesses?", "Yes. Our services are designed for small and medium businesses that need practical, scalable, and cost-effective digital solutions."],
  ["Can you redesign an existing website?", "Yes. We can modernize your current website with improved design, navigation, SEO, accessibility, and performance."],
  ["Do you provide mobile-responsive websites?", "Yes. Every website is built mobile-first and tested for phone, tablet, laptop, and desktop experiences."],
  ["Can you build custom web applications?", "Yes. We can develop custom portals, dashboards, workflow tools, and business applications based on your requirements."],
  ["How can I request a service?", "Use the service request form or WhatsApp button. We will review your requirement and respond with the next steps."]
];
