"use client";
import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import ProjectCard from "./projectCard";
import { projects, CategoryType } from "./data";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, visibleProjects);

  const hasMoreProjects = !showAll && visibleProjects < filteredProjects.length;

  const handleShowMore = () => {
    if (showAll) {
      setShowAll(false);
      setVisibleProjects(3);
    } else {
      setVisibleProjects((prev) => prev + 3);
      if (visibleProjects + 3 >= filteredProjects.length) {
        setShowAll(true);
      }
    }
  };

  useEffect(() => {
    setVisibleProjects(3);
    setShowAll(false);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <S.Container id="portfolio">
      <S.AnimatedSection
        ref={sectionRef}
        className={isVisible ? "visible" : ""}
      >
        <S.Title>PROJETOS</S.Title>
        <S.Categories>
          <S.CategoryButton
            $active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          >
            All Projects
          </S.CategoryButton>
          <S.CategoryButton
            $active={activeCategory === "mobile"}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile App
          </S.CategoryButton>
          <S.CategoryButton
            $active={activeCategory === "website"}
            onClick={() => setActiveCategory("website")}
          >
            Website
          </S.CategoryButton>
          <S.CategoryButton
            $active={activeCategory === "desktop"}
            onClick={() => setActiveCategory("desktop")}
          >
            Desktop
          </S.CategoryButton>
          <S.CategoryButton
            $active={activeCategory === "other"}
            onClick={() => setActiveCategory("other")}
          >
            Other Projects
          </S.CategoryButton>
        </S.Categories>
        <S.ProjectsGrid>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              number={index + 1}
              {...project}
              isVisible={isVisible}
            />
          ))}
        </S.ProjectsGrid>
        {hasMoreProjects && (
          <S.ShowMoreButton onClick={handleShowMore}>
            {showAll ? "Show Less Projects" : "Show More Projects"}
          </S.ShowMoreButton>
        )}
      </S.AnimatedSection>
    </S.Container>
  );
};

export default Projects;

