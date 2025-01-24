"use client"
import type React from "react"
import { useEffect } from "react"
import * as S from "./styles"
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si"
import { VscAzure } from "react-icons/vsc"
import { useInView } from "react-intersection-observer"
import { useAnimation, type Variants } from "framer-motion"

const Skills: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const skills = [
    { name: "NextJS", Icon: SiNextdotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "ReactJS", Icon: SiReact },
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "TailwindCSS", Icon: SiTailwindcss },
    { name: "Styled Components", Icon: SiStyledcomponents },
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
    { name: "Azure DevOps", Icon: VscAzure },
    { name: "Vercel", Icon: SiVercel },
  ]

  return (
    <S.Container id="skills" ref={ref}>
      <S.Title initial="hidden" animate={controls} variants={itemVariants}>
        Skills
      </S.Title>
      <S.SkillsGrid initial="hidden" animate={controls} variants={containerVariants}>
        {skills.map(({ name, Icon }) => (
          <S.SkillItem key={name} variants={itemVariants}>
            <S.SkillIcon>
              <Icon />
            </S.SkillIcon>
            <S.SkillName>{name}</S.SkillName>
          </S.SkillItem>
        ))}
      </S.SkillsGrid>
    </S.Container>
  )
}

export default Skills;

