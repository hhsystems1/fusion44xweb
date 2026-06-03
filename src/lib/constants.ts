export const siteConfig = {
  name: "Fusion 44X",
  tagline: "Chlorine-Free Pool & Spa Water Systems",
  url: "https://fusion44x.com",
  phone: "(555) 123-4567",
  email: "info@fusion44x.com",
  address: {
    street: "123 Innovation Drive",
    city: "Scottsdale",
    state: "AZ",
    zip: "85260",
    country: "US",
  },
  social: {
    facebook: "https://facebook.com/fusion44x",
    instagram: "https://instagram.com/fusion44x",
    youtube: "https://youtube.com/@fusion44x",
  },
  businessHours: {
    weekdays: "Mon–Fri: 8 AM – 6 PM",
    saturday: "Sat: 9 AM – 4 PM",
    sunday: "Sun: Closed",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/residential-pools", label: "Pool Systems" },
  { href: "/discover-fusion-44x/how-it-works", label: "How It Works" },
  { href: "/discover-fusion-44x/why-fusion-44-x", label: "Why Fusion 44X" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/free-spa-analysis", label: "Free Spa Analysis" },
] as const;

export const trustFeatures = [
  {
    title: "Lifetime Warranty",
    description: "Backed by our comprehensive warranty",
    icon: "shield",
  },
  {
    title: "Professional Installation",
    description: "Certified technicians nationwide",
    icon: "tool",
  },
  {
    title: "Safe Water Certified",
    description: "Tested against quality benchmarks",
    icon: "droplets",
  },
  {
    title: "Low Maintenance",
    description: "Dramatically less time and effort",
    icon: "clock",
  },
] as const;

export const howItWorksSteps = [
  {
    step: 1,
    title: "Install the Unit",
    description:
      "The Fusion 44X system is installed inline with your existing pool or spa plumbing by a certified professional.",
  },
  {
    step: 2,
    title: "Set It and Forget It",
    description:
      "Once installed, the system runs automatically. No daily testing, no chemical adjustments, no guesswork.",
  },
  {
    step: 3,
    title: "Enjoy Cleaner Water",
    description:
      "Experience softer, clearer water without the harsh effects of chlorine, salt, or sanitizer chemicals.",
  },
  {
    step: 4,
    title: "Minimal Ongoing Care",
    description:
      "Just periodic acid maintenance (about twice monthly) to keep your water perfectly balanced.",
  },
] as const;

export const benefits = [
  {
    title: "No Chlorine or Salt",
    description:
      "No chlorine, salt, or sanitizer chemicals added to the water. The Fusion 44X system uses a contained process inside the unit.",
    icon: "sparkles",
  },
  {
    title: "Softer, Gentler Water",
    description:
      "Experience water that feels noticeably softer on skin and eyes. No more red eyes or dry skin after swimming.",
    icon: "heart",
  },
  {
    title: "Less Maintenance",
    description:
      "Reduce your weekly pool maintenance to minimal acid checks about twice a month. No shocking, no algaecide, no clarifiers.",
    icon: "clock",
  },
  {
    title: "Cost Effective",
    description:
      "Stop buying chemicals month after month. The Fusion 44X pays for itself over time while delivering superior water quality.",
    icon: "dollar",
  },
] as const;

export const faqs = [
  {
    question: "How does Fusion 44X work?",
    answer:
      "The Fusion 44X system uses a patented contained process inside the unit to treat water without adding chlorine, salt, or sanitizer chemicals. The process works inline with your existing pool or spa plumbing.",
  },
  {
    question: "Does the system require any chemicals at all?",
    answer:
      "The system itself does not add chemicals to the water. However, like any water system, maintaining proper pH balance is important — this typically requires adjusting acid about twice a month.",
  },
  {
    question: "Is Fusion 44X safe for my family and pets?",
    answer:
      "Yes. The system eliminates the need for added chlorine, salt, and sanitizer chemicals. The water is tested against drinking-water quality benchmarks for safety.",
  },
  {
    question: "How much does the system cost?",
    answer:
      "Pricing varies based on your pool or spa size and configuration. Contact us for a free customized quote and spa analysis.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Professional installation typically takes 2-4 hours for most residential pools and spas. Our certified technicians handle the entire process.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. All Fusion 44X systems come with a comprehensive lifetime warranty covering manufacturing defects and performance.",
  },
] as const;

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "We installed Fusion 44X six months ago and the difference is remarkable. No more chemical smell, no more red eyes. The water feels incredible.",
    beforeAfter: true,
  },
  {
    name: "James R.",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "I was skeptical at first, but the savings on chemicals alone has been worth it. My spa water has never been clearer.",
    beforeAfter: false,
  },
  {
    name: "Lisa K.",
    location: "Tucson, AZ",
    rating: 5,
    text: "The best decision we made for our pool. Maintenance went from daily to almost nothing. The water is crystal clear and feels amazing.",
    beforeAfter: true,
  },
  {
    name: "Robert D.",
    location: "Mesa, AZ",
    rating: 4,
    text: "Installation was quick and professional. We've noticed a significant reduction in our chemical usage. Very happy with the results.",
    beforeAfter: false,
  },
] as const;
