import styled, { keyframes, css } from "styled-components";

const gradientMove = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;



interface AnimatedProps {
  $isVisible: boolean;
}

const animatedStyles = css<AnimatedProps>`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const Container = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Content = styled.div<AnimatedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  ${animatedStyles}
`;

export const ImageContainer = styled.div<AnimatedProps>`
  position: relative;
  width: 500px;
  height: 620px;
  ${animatedStyles}
  transition-delay: 0.2s;
`;

export const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #5aabff, #7b5aff, #5aabff);
  background-size: 200% 200%;
  animation: ${gradientMove} 5s ease infinite;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    width: calc(100% + 24px);
    height: calc(100% + 24px);
    border: 2px solid #5aabff;
    border-radius: 12px;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    background-color: #0a0f1c;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: scale(1.02);
    
    img {
      transform: scale(1.05);
    }
  }
`;


export const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const TitleWrapper = styled.div<AnimatedProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  ${animatedStyles}
  transition-delay: 0.4s;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
`;

export const TitleHighlight = styled.span`
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
`;

export const Description = styled.p<AnimatedProps>`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  ${animatedStyles}
  transition-delay: 0.6s;
`;

export const InfoGrid = styled.div<AnimatedProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  ${animatedStyles}
  transition-delay: 0.8s;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.5rem;
  align-items: center;
`;

export const InfoLabel = styled.span`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const InfoValue = styled.span`
  color: #5aabff;
  font-size: 1.1rem;
`;

export const InfoContent = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  white-space: nowrap;

  a {
    color: #5aabff;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #7b5aff;
    }
  }
`;

export const ButtonGroup = styled.div<AnimatedProps>`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  ${animatedStyles}
  transition-delay: 1s;
`;

export const HireButton = styled.button`
  background: linear-gradient(90deg, #5aabff, #7b5aff);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(90, 171, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(90, 171, 255, 0.5);
  }
`;

export const ResumeButton = styled.button`
  background: transparent;
  color: white;
  padding: 0.75rem 2rem;
  border: 1px solid #5aabff;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(90, 171, 255, 0.1);
    transform: translateY(-2px);
  }
`;

