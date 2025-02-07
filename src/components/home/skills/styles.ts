import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: linear-gradient(
    45deg,
    rgba(88, 100, 241, 0.15),
    rgba(91, 123, 229, 0.15),
    rgba(93, 144, 218, 0.15)
  );
  background-size: 200% 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled(motion.h2)`
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #5864F1, #5B7BE5);
    border-radius: 2px;
  }
`

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`

export const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    transform: translateY(-10px) scale(1.05);
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`

export const SkillIcon = styled.div`
  color: #5864F1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(60px, 10vw, 80px);
  height: clamp(60px, 10vw, 80px);
  background: rgba(88, 100, 241, 0.1);
  border-radius: 50%;
  padding: clamp(0.8rem, 2vw, 1.2rem);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(88, 100, 241, 0.2), transparent);
    z-index: 0;
    transition: all 0.5s ease;
  }
  
  svg {
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    filter: drop-shadow(0 0 8px rgba(88, 100, 241, 0.4));
    z-index: 1;
  }

  &:hover {
    background: linear-gradient(90deg, #5864F1, #5B7BE5);
    box-shadow: 0 0 20px rgba(88, 100, 241, 0.6);
    
    &:before {
      transform: scale(1.2);
      opacity: 0;
    }

    svg {
      color: #ffffff;
      transform: scale(1.2) rotate(360deg);
      filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8));
    }
  }

  @media (max-width: 480px) {
    width: clamp(40px, 8vw, 60px);
    height: clamp(40px, 8vw, 60px);
    padding: clamp(0.5rem, 1.5vw, 0.8rem);
  }
`

export const SkillName = styled.span`
  color: #ffffff;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${SkillItem}:hover & {
    transform: scale(1.1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.6rem, 1.5vw, 0.8rem);
  }
`

