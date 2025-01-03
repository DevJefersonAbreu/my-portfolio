import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(88, 100, 241, 0.15),
    rgba(91, 123, 229, 0.15),
    rgba(93, 144, 218, 0.15)
  );
  background-size: 200% 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
`;

export const Highlight = styled.span`
  background: linear-gradient(45deg, #4169E1, #00BFFF);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
`;

export const InterestSection = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.p`
  font-size: 1rem;
  color: #B8C1EC;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const InterestButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: rgba(65, 105, 225, 0.1);
  border: 1px solid rgba(65, 105, 225, 0.3);
  border-radius: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(65, 105, 225, 0.2);
    border-color: #4169E1;
    transform: translateY(-2px);
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(65, 105, 225, 0.3);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;

  &::placeholder {
    color: #B8C1EC;
  }

  &:focus {
    outline: none;
    border-color: #4169E1;
    background-color: rgba(65, 105, 225, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(65, 105, 225, 0.3);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #ffffff;
  resize: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #B8C1EC;
  }

  &:focus {
    outline: none;
    border-color: #4169E1;
    background-color: rgba(65, 105, 225, 0.1);
  }
`;

export const InputBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4169E1;
  transition: width 0.3s ease;

  ${Input}:focus + &, ${TextArea}:focus + & {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #4169E1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #3154b4;
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(65, 105, 225, 0.1);
  border: 1px solid rgba(65, 105, 225, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    background-color: rgba(65, 105, 225, 0.2);
    border-color: #4169E1;
    transform: translateY(-3px);
  }
`;

