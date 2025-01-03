import styled from "styled-components";

export const Container = styled.section`
  padding: 8rem 4rem;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(90, 171, 255, 0.03) 100%);
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 5rem;
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #5aabff, #7b5aff);
    border-radius: 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const IconWrapper = styled.div`
  color: #ffffff;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  display: inline-block;
  
  svg {
    stroke-width: 1.5px;
    width: 48px;
    height: 48px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(135deg, #5aabff, #7b5aff);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(90, 171, 255, 0.15);

    &::before {
      opacity: 1;
    }

    ${IconWrapper} {
      transform: scale(1.1);
      background: linear-gradient(135deg, #5aabff, #7b5aff);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const ServiceTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #5aabff, #7b5aff);
    border-radius: 2px;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.8;
  margin-top: 0.5rem;
`;

