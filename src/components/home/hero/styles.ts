import styled, { keyframes } from "styled-components";
import { ArrowRight } from 'lucide-react';

const gradientMove = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

export const Container = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  background-color: #1a2238;
`;

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
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 96%;
  margin-left: .8rem;
`;

export const TextContent = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Subtitle = styled.h2`
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(.9rem, 1.5vw, 2rem);
  font-weight: 500;
  letter-spacing: 8px;
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
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  text-shadow: 0 0 30px rgba(88, 100, 241, 0.3);
`;

export const CTAButton = styled.button`
  background: linear-gradient(90deg, #5864F1, #5B7BE5);
  border: none;
  padding: .7rem 1.5rem;
  border-radius: 50px;
  color: white;
  font-size: .9rem;
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
`;

export const ArrowIcon = styled(ArrowRight)`
  transition: transform 0.3s ease;
  ${CTAButton}:hover & {
    transform: translateX(5px);
  }
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 2rem;
`;

export const IconButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(88, 100, 241, 0.1);
  border: 3px solid rgba(88, 100, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #5864F1;
  position: relative;
  overflow: hidden;
  bottom: 8rem;
  
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
`;

export const ChatButton = styled.button`
  background: linear-gradient(90deg, #5864F1, #5B7BE5);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
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

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(-15deg) scale(1.1);
  }
`;

