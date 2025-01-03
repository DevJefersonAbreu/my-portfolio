export type CategoryType = "all" | "mobile" | "website" | "desktop" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Dating Mobile App Design",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "mobile",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "2",
    title: "E Commerce Mobile App Design",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "mobile",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "website",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "4",
    title: "Task Management Desktop App",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "desktop",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "website",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "6",
    title: "Fitness Tracking App",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "mobile",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "7",
    title: "Code Editor Theme",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "other",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "8",
    title: "Weather Desktop Widget",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "desktop",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "9",
    title: "Restaurant Booking System",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "website",
    image: "/assets/imagesAboutUs/client-3.png"
  },
  {
    id: "10",
    title: "Music Player App",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "mobile",
    image: "/assets/imagesAboutUs/client-3.png"
  }
];

