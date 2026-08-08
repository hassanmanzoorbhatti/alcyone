export const FIRM = {
  name: "Alcyone Law",
  legalName: "Alcyone Law Ltd",
  description:
    "Specialist immigration and family law advice for individuals, families and businesses, delivered with clarity, precision and personal understanding.",
  address: ["167–169 Great Portland Street", "London W1W 5PF", "United Kingdom"],
  office: "+44 (0)20 3393 7333",
  officeTel: "+442033937333",
  mobile: "+44 (0)7572 440599",
  mobileTel: "+447572440599",
  email: "info@alcyonelaw.com",
  hours: [
    { day: "Monday–Friday", time: "9:00 AM–5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  sra: "8014879",
  companyNumber: "16941565",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/coming-soon" },
  { label: "About", to: "/coming-soon" },
  { label: "Our People", to: "/coming-soon" },
  { label: "Insights", to: "/coming-soon" },
  { label: "Contact", to: "/coming-soon" },
] as const;

export const NETWORK_LOCATIONS = [
  "Private Immigration",
  "Business Immigration",
  "Family Law",
  "British Citizenship",
  "Asylum & Human Rights",
  "Appeals & Reviews",
] as const;

export const STATS = [
  { number: "10+", label: "Years of specialist experience" },
  { number: "SRA", label: "Authorised & regulated practice" },
  { number: "London", label: "Great Portland Street office" },
  { number: "1:1", label: "Personal, client-focused advice" },
] as const;

export const HERO_STATS = [
  { number: "10+", label: "Years of specialist experience" },
  { number: "SRA", label: "Regulated practice — 8014879" },
  { number: "London", label: "Great Portland Street" },
] as const;
