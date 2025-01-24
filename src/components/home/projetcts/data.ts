import { SiNextdotjs, SiTypescript, SiStyledcomponents, SiHtml5, SiCss3, SiJavascript } from "react-icons/si"
import type { IconType } from "react-icons"

export type CategoryType = "all" | "mobile" | "website" | "desktop" | "other"

export interface Technology {
  name: string
  Icon: IconType
}

export interface Project {
  id: string
  title: string
  description: string
  category: CategoryType
  image: string
  deployUrl: string
  githubUrl: string
  technologies: Technology[]
}

const createDefaultProject = (id: string): Project => ({
  id,
  title: "Professional Portfolio",
  description:
    "Um portfólio profissional desenvolvido como serviço de freelancer, utilizando HTML, CSS e JavaScript. Demonstra habilidades em design responsivo e interatividade web, criado para atender às necessidades específicas do cliente.",
  category: "website",
  image: "/placeholder.svg?height=720&width=1280",
  deployUrl: "https://devjefersonabreu.github.io/portfolio-profissional-gabriel-barreto-1.0/",
  githubUrl: "https://github.com/DevJefersonAbreu/portfolio-profissional-gabriel-barreto-1.0",
  technologies: [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "JavaScript", Icon: SiJavascript },
  ],
})

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Next.js Fake Store",
    description:
      "E-commerce desenvolvido com Next.js, TypeScript e Styled Components, integrando com Fake Store API para demonstração de produtos e funcionalidades de compra.",
    category: "website",
    image:
      "https://sjc.microlink.io/vCIgOiONkweQrmpjhrsNevlRmr1mpAAhhHxbBXjQHpcqVR5zfdaacDvJFgeAdp0wZJ3QR0zTTXdUPYwtt3eH9w.jpeg",
    deployUrl: "https://ecommerce-nextjs-fake-store-api.vercel.app",
    githubUrl: "https://github.com/DevJefersonAbreu/ecommerce-nextjs-fake-store-api",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Styled Components", Icon: SiStyledcomponents },
    ],
  },
  {
    id: "2",
    title: "Medikpharm E-commerce",
    description:
      "Plataforma de e-commerce para farmácia desenvolvida com Next.js, TypeScript e Styled Components, oferecendo uma experiência de compra intuitiva para produtos farmacêuticos.",
    category: "website",
    image:
      "https://sjc.microlink.io/cGkhDSo3yY4GwHcLt4MLvQO3Sr6Z65JI5GqAdjwuFQc7yhW414fDIEtGho4MZzNk09NSO5Pa4wGJPXlBf0tQ0A.jpeg",
    deployUrl: "https://medikpharm-ecommerce.vercel.app/",
    githubUrl: "https://github.com/DevJefersonAbreu/medikpharm-ecommerce",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Styled Components", Icon: SiStyledcomponents },
    ],
  },
  {
    id: "3",
    title: "Psychologist Website",
    description:
      "Site profissional para psicólogo desenvolvido com Next.js, TypeScript e Styled Components, proporcionando uma presença online elegante e informativa.",
    category: "website",
    deployUrl: "https://psychologist-website-azure.vercel.app/",
    githubUrl: "https://github.com/DevJefersonAbreu/psychologist-website",
    image: "/placeholder.svg?height=720&width=1280",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Styled Components", Icon: SiStyledcomponents },
    ],
  },
  {
    id: "4",
    title: "HR Recruiter Website",
    description:
      "Plataforma profissional para recrutador desenvolvida com Next.js, TypeScript e Styled Components, facilitando a conexão entre candidatos e oportunidades.",
    category: "website",
    deployUrl: "https://hr-recruiter-website.vercel.app",
    githubUrl: "https://github.com/DevJefersonAbreu/hr-recruiter-website",
    image: "/placeholder.svg?height=720&width=1280",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Styled Components", Icon: SiStyledcomponents },
    ],
  },
  createDefaultProject("5"),
  {
    id: "6",
    title: "Professional Portfolio 2",
    description:
      "Outro portfólio profissional desenvolvido como serviço de freelancer, utilizando HTML, CSS e JavaScript. Este projeto demonstra a capacidade de criar designs personalizados e responsivos para atender às necessidades específicas de diferentes clientes.",
    category: "website",
    image: "/placeholder.svg?height=720&width=1280",
    deployUrl: "https://devjefersonabreu.github.io/portfolio-profissional-sarah-rodrigues/",
    githubUrl: "https://github.com/DevJefersonAbreu/portfolio-profissional-sarah-rodrigues",
    technologies: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },
  createDefaultProject("7"),
  createDefaultProject("8"),
  createDefaultProject("9"),
  createDefaultProject("10"),
]

