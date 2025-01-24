import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const gradientMove = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

export const Container = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a2238;
  padding-top: 7rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(88, 100, 241, 0.15),
    rgba(91, 123, 229, 0.15),
    rgba(93, 144, 218, 0.15)
  );
  background-size: 200% 200%;
  animation: ${gradientMove} 15s ease infinite;
  z-index: 1;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextContent = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    gap: 1.5rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

export const Subtitle = styled(motion.h2)`
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    letter-spacing: 2px;
  }
`

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
  text-shadow: 0 0 30px rgba(88, 100, 241, 0.3);

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 7vw, 2.5rem);
  }
`

export const InteractiveWord = styled(motion.span)`
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #5864F1;
  }
`

export const CTAButton = styled.button`
  background: linear-gradient(90deg, #5864F1, #5B7BE5);
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  color: white;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(88, 100, 241, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(88, 100, 241, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 1rem;
  }
`

export const IconButton = styled.button`
  width: clamp(50px, 10vw, 80px);
  height: clamp(50px, 10vw, 80px);
  border-radius: 50%;
  background: rgba(88, 100, 241, 0.1);
  border: 2px solid rgba(88, 100, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #5864F1;
  position: relative;
  overflow: hidden;
  text-decoration: none; 
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #5864F1, #000000);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    color: #FFFFFF;

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

