"use client";
import React, { useEffect } from "react";
import * as S from "./styles";
import { SiNextdotjs, SiTypescript, SiJavascript, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Skills: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    [
      { name: "NextJS", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
    ],
    [
      { name: "ReactJS", Icon: SiReact },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
    ]
  ];


  return (
    <S.Container id="skills" ref={ref}>
      <S.Title
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      >
        Skills
      </S.Title>
      <S.SkillsGrid>
        {skills.map((row, rowIndex) => (
          <S.SkillRow
            key={rowIndex}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {row.map(({ name, Icon }) => (
              <S.SkillItem key={name} variants={itemVariants}>
                <S.SkillIcon>
                  <Icon />
                </S.SkillIcon>
                <S.SkillName>{name}</S.SkillName>
              </S.SkillItem>
            ))}
          </S.SkillRow>
        ))}
      </S.SkillsGrid>
    </S.Container>
  );
};

export default Skills;

