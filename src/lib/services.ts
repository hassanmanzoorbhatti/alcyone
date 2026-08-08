import immigrationImg from "../assets/service-immigration.jpg";
import propertyImg from "../assets/service-property.jpg";
import criminalImg from "../assets/service-criminal.jpg";
import familyImg from "../assets/service-family.jpg";
import financialImg from "../assets/service-financial.jpg";
import businessImg from "../assets/service-business.jpg";

export type Service = {
  number: string;
  name: string;
  description: string;
  image?: string;
};

export const PRIMARY_SERVICES: Service[] = [
  {
    number: "01",
    name: "Immigration Law",
    description:
      "Guidance with UK immigration matters, applications, documentation and case preparation.",
    image: immigrationImg,
  },
  {
    number: "02",
    name: "Property Law",
    description:
      "Professional support for residential and commercial property transactions, ownership matters and disputes.",
    image: propertyImg,
  },
  {
    number: "03",
    name: "Criminal Defence",
    description:
      "Support relating to police investigations, court proceedings, fraud allegations, motoring offences and appeals.",
    image: criminalImg,
  },
];

export const ADDITIONAL_SERVICES: Service[] = [
  {
    number: "04",
    name: "Family Law",
    description: "Professional and sensitive support for family-related legal matters.",
    image: familyImg,
  },
  {
    number: "05",
    name: "Financial Claims & Debt Recovery",
    description:
      "Helping individuals and businesses recover unpaid debts, contractual claims and financial losses.",
    image: financialImg,
  },
  {
    number: "06",
    name: "Business & Legal Disputes",
    description:
      "Strategic support with commercial disagreements, legal documentation, case preparation and business-related matters.",
    image: businessImg,
  },
];

export const ALL_SERVICES: Service[] = [...PRIMARY_SERVICES, ...ADDITIONAL_SERVICES];
