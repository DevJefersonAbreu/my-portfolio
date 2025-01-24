"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import * as S from "./styles"
import type { Project } from "./data"
import { Github, Globe } from "lucide-react"

interface ProjectCardProps extends Project {
  isVisible: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  isVisible,
  deployUrl,
  githubUrl,
  technologies,
}) => {
  const cardRef = useRef<HTMLElement>(null)
  const [isCardVisible, setIsCardVisible] = React.useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    const currentCard = cardRef.current

    if (currentCard) {
      observer.observe(currentCard)
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard)
      }
    }
  }, [])

  return (
    <S.ProjectCard ref={cardRef} className={isVisible && isCardVisible ? "visible" : ""}>
      <S.ProjectInfo>
        <S.ProjectNumber>{title}</S.ProjectNumber>
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <S.TechStack>
          {technologies.map((tech) => (
            <S.TechItem key={tech.name}>
              <tech.Icon />
              {tech.name}
            </S.TechItem>
          ))}
        </S.TechStack>
        <S.ProjectDescription>{description}</S.ProjectDescription>
        <S.ProjectLinks>
          <S.ProjectLink href={deployUrl} target="_blank" rel="noopener noreferrer" className="deploy">
            <Globe size={16} />
            Deploy
          </S.ProjectLink>
          <S.ProjectLink href={githubUrl} target="_blank" rel="noopener noreferrer" className="github">
            <Github size={16} />
            GitHub
          </S.ProjectLink>
        </S.ProjectLinks>
      </S.ProjectInfo>
      <S.ImageWrapper>
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} preview`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </S.ImageWrapper>
    </S.ProjectCard>
  )
}

export default ProjectCard;

