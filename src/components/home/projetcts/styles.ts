import styled from "styled-components"

interface CategoryButtonProps {
  $active: boolean
}

export const AnimatedSection = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

export const Title = styled.h2`
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  padding: 0 1rem;
`

export const CategoryButton = styled.button<CategoryButtonProps>`
  background: transparent;
  border: none;
  color: ${(props) => (props.$active ? "#5aabff" : "#a0a0a0")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  position: relative;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background: linear-gradient(to right, #5aabff, #7b5aff);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #5aabff;
    background: rgba(90, 171, 255, 0.1);
  }
`

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-bottom: 4rem;
`

export const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }

    @media (max-width: 968px) {
      direction: ltr;
    }
  }
`

export const ProjectInfo = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`

export const ProjectNumber = styled.span`
  color: #5aabff;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
`

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ProjectDescription = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &.deploy {
    background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(90, 171, 255, 0.2);
    }
  }
  
  &.github {
    background: rgba(90, 171, 255, 0.1);
    color: #5aabff;
    
    &:hover {
      background: rgba(90, 171, 255, 0.2);
    }
  }
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`

export const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: rgba(90, 171, 255, 0.1);
  border-radius: 4px;
  font-size: 0.875rem;
  color: #5aabff;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

export const ReadMore = styled.button`
  background: transparent;
  border: none;
  color: #5aabff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    gap: 1rem;
    background: rgba(90, 171, 255, 0.1);
  }
`

export const Arrow = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
`

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/9;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 12px;
    width: 100%;
    height: 100%;
    background-color: #5aabff;
    border-radius: 12px;
    z-index: -1;
    opacity: 0.5;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: #0a0f1c;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const ShowMoreButton = styled.button`
  background: linear-gradient(to right, #5aabff, #7b5aff);
  border: none;
  color: white;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(90, 171, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(90, 171, 255, 0.2);
  }
`

