import styled, { keyframes, css } from "styled-components"

const gradientMove = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

interface AnimatedProps {
  $isVisible: boolean
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

  @media (max-width: 768px) {
    padding: 4rem 1rem;
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

export const Content = styled.div<AnimatedProps>`
  display: flex;
  align-items: flex-start; // Align items to the top
  justify-content: center;
  gap: 4rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  ${animatedStyles}
`

export const ImageContainer = styled.div<AnimatedProps>`
  position: relative;
  width: 350px;
  height: 450px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 280px;
    height: 360px;
  }

  ${animatedStyles}
  transition-delay: 0.2s;
`

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
`

export const TextContent = styled.div`
  flex: 1;
  max-width: calc(100% - 350px - 4rem); // Adjust based on image width and gap

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`

export const TitleWrapper = styled.div<AnimatedProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }

  ${animatedStyles}
  transition-delay: 0.4s;
`

export const Title = styled.h2`
  color: #ffffff;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 700;
`

export const TitleHighlight = styled.span`
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 700;
`

export const Description = styled.p<AnimatedProps>`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }

  ${animatedStyles}
  transition-delay: 0.6s;
`

export const InfoGrid = styled.div<AnimatedProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ${animatedStyles}
  transition-delay: 0.8s;
`

export const InfoItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #5aabff;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(90, 171, 255, 0.1);
  border-radius: 50%;
  color: #5aabff;
  transition: all 0.3s ease;

  ${InfoItem}:hover &, ${InfoItem}:focus & {
    background: rgba(90, 171, 255, 0.2);
    color: #7b5aff;
  }
`

export const InfoLabel = styled.span`
  color: #ffffff;
  font-weight: 500;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  text-transform: capitalize;
  min-width: 60px;
`

export const InfoContent = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    white-space: normal;
    word-break: break-word;
  }
`

export const ButtonGroup = styled.div<AnimatedProps>`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  ${animatedStyles}
  transition-delay: 1s;
`

export const HireButton = styled.button`
  background: linear-gradient(90deg, #5aabff, #7b5aff);
  color: white;
  padding: 0.55rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(90, 171, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(90, 171, 255, 0.5);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
  }
`

export const ResumeButton = styled.button`
  background: transparent;
  color: white;
  padding: 0.55rem 1.5rem;
  border: 1px solid #5aabff;
  border-radius: 50px;
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(90, 171, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
  }
`

export const HiddenContent = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

