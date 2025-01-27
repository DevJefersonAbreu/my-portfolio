import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.2); }
  50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4); }
  100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.2); }
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1E3A8A;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

export const Card = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #172554;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid rgba(96, 165, 250, 0.2);
`

export const CardHeader = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #172554 0%, #1E3A8A 100%);

  @media (min-width: 640px) {
    padding: 2.5rem 2rem;
  }
`

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #60A5FA 0%, #6366F1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #60A5FA;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`

export const CardContent = styled.div`
  padding: 1.5rem;
  background: #172554;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 640px) {
    gap: 2rem;
  }
`

export const Section = styled.section`
  margin-bottom: 1rem;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(96, 165, 250, 0.15);
    transform: translateY(-2px);
    border-color: rgba(96, 165, 250, 0.3);
  }

  svg {
    color: #60A5FA;
    flex-shrink: 0;
  }

  @media (min-width: 640px) {
    padding: 1rem;
    gap: 1rem;
  }
`

export const InfoTitle = styled.h4`
  font-size: 0.75rem;
  color: #60A5FA;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`

export const InfoText = styled.p`
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0;
  font-weight: 500;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const ContactOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;

  @media (min-width: 640px) {
    gap: 1rem;
  }
`

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 1rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(96, 165, 250, 0.15);
    transform: translateY(-2px);
    border-color: rgba(96, 165, 250, 0.3);
    animation: ${glowAnimation} 2s infinite;
  }

  svg {
    color: #60A5FA;
  }

  span {
    margin-left: 0.25rem;
  }

  @media (min-width: 640px) {
    font-size: 0.95rem;
    padding: 0.875rem 1.25rem;
    gap: 0.75rem;
  }
`

