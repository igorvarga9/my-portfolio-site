import iconDev from "assets/images/icon-dev.svg";
import iconApp from "assets/images/icon-app.svg";
import iconDesign from "assets/images/icon-design.svg";
import iconPhoto from "assets/images/icon-photo.svg";

import clientAvatar1 from "assets/images/client-brent.jpeg";
import clientAvatar2 from "assets/images/client-andre.jpeg";

import clientLogo1 from "assets/images/logo-noumena.png";
import clientLogo2 from "assets/images/logo-skipforce.jpeg";
import clientLogo3 from "assets/images/logo-desertsoftware.png";
import clientLogo4 from "assets/images/logo-datemine.png";
import clientLogo5 from "assets/images/logo-mycashless.jpeg";
import clientLogo6 from "assets/images/logo-fultonwork.png";
import clientLogo7 from "assets/images/logo-metricfire.jpeg";

export const summary = [
  "Hi. I provide web development services for startups, and small and medium-sized enterprises. I have worked on tens of challenging projects and looking for more opportunity.",
  "As a full-stack developer, I can do all but my greatest experience is with API Development. (REST & GraphQL).",
  "I also have built many single page applications in React, Next.js, and Angular frameworks.",
  "I help worldwide customers from various business with my coding, building a core team, and providing best-matching solutions.",
];

export const services = [
  {
    subject: "Web Development",
    description: "High-quality development of sites at the professional level.",
    image: iconDev,
  },
  {
    subject: "Mobile apps",
    description:
      "Professional development of applications for iOS and Android.",
    image: iconApp,
  },
  {
    subject: "Web design",
    description:
      "The most modern and high-quality design made at a professional level.",
    image: iconDesign,
  },
  {
    subject: "Web development",
    description: "High-quality development of sites at the professional level.",
    image: iconPhoto,
  },
];

export const testimonials = [
  {
    name: "Brent Sanders",
    company: "Fultonwork - CTO",
    feedback:
      "Mark is a unique find on UpWork. He is a strong communicator but also incredibly diligent and self-driven. We engaged Mark's help on a large codebase that had many issues to be addressed. He worked carefully and methodically each week on the project and always advanced and improved the code as he went. Mark does great work and would be a valuable asset to any team.",
    photo: clientAvatar1,
  },
  {
    name: "Andre Lee",
    company: "Noumena - CEO",
    feedback:
      "Mark delivered good work on this project and our entire team enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were strong. He helped us find additional freelancers to support the work. We enjoyed working with Mark and will likely have additional jobs for him in the future.",
    photo: clientAvatar2,
  },
];

export const clients = [
  { logo: clientLogo1, url: "https://app.noumena.pro/" },
  { logo: clientLogo7, url: "https://www.metricfire.com/" },
  { logo: clientLogo5, url: "https://mycashless.com/" },
  { logo: clientLogo6, url: "https://resources.istcoalition.org/fulton-works" },
  { logo: clientLogo2, url: "https://skipforce.com/" },
  { logo: clientLogo3, url: "https://www.desertsoftware.com.au/" },
  { logo: clientLogo4, url: "https://staging-app.datareporter.com" },
];
