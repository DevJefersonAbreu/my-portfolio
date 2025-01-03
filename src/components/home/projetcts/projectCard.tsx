"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "./styles";
import { Project } from "./data";

interface ProjectCardProps extends Project {
  number: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  number,
  isVisible
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const [isCardVisible, setIsCardVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentCard = cardRef.current;

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <S.ProjectCard ref={cardRef} className={isVisible && isCardVisible ? 'visible' : ''}>
      <S.ProjectInfo>
        <S.ProjectNumber>PROJECT {number}</S.ProjectNumber>
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <S.ProjectDescription>{description}</S.ProjectDescription>
        <S.ReadMore>
          Read more
          <S.Arrow>→</S.Arrow>
        </S.ReadMore>
      </S.ProjectInfo>
      <S.ImageWrapper>
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </S.ImageWrapper>
    </S.ProjectCard>
  );
};

export default ProjectCard;

