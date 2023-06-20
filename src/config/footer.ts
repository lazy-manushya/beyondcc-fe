import { SITE_PATHS } from "./routing";

export const FOOTER_ITEMS: {
  name: string;
  link: string;
}[] = [
  {
    name: "About Us",
    link: SITE_PATHS.ABOUT_PAGE,
  },
  {
    name: "How It Works",
    link: "#",
  },
  {
    name: "Pricing",
    link: SITE_PATHS.PRICING_PAGE,
  },
  {
    name: "FAQs",
    link: SITE_PATHS.FAQ_PAGE,
  },
  {
    name: "Contact Us",
    link: SITE_PATHS.CONTACT_PAGE,
  },
];

export const FOOTER_SOCIAL_ITEMS: {
  name: string;
  iconString: string;
  link: string;
}[] = [
  {
    name: "Facebook",
    iconString: "lab la-facebook-f",
    link: "#",
  },
  {
    name: "Instagram",
    iconString: "lab la-instagram",
    link: "#",
  },
  {
    name: "Twitter",
    iconString: "lab la-twitter",
    link: "#",
  },
];
