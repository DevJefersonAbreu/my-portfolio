import styled from "styled-components"

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background: #382EC4;
`

export const Logo = styled.div`
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.7rem;
  font-weight: bold;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`

export const NavItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: #5aabff;
  }
`

export const ContactButton = styled.button`
  background: linear-gradient(to right, #5aabff, #7b5aff);
  color: white;
  padding: 0.25rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: .8rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: flex;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #FFF;
    margin: 3px 0;
    transition: 0.4s;
  }

  .open:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .open:nth-child(2) {
    opacity: 0;
  }

  .open:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: #382EC4;
    padding: 2rem;
    transition: 0.3s ease-in-out;

    &.show {
      right: 0;
    }
  }
`

export const DesktopMenu = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #FFF;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 2rem;
`

export const MajorLinksContainer = styled.div`
  width: 60%;

  @media (min-width: 1001px) and (max-width: 1450px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 90px 0 90px; 
  transition: transform 0.3s ease-in-out;
  
  &.show-links {
    transform: translateY(0);
    display: flex;
  }
  @media (min-width: 1001px) and (max-width: 1450px) {
    padding: 0;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const Link = styled.a`
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  
  &:hover::after {
    width: 100%;
    height: 0px;
    padding: 0px;
    border-bottom: 4px solid white;
  }
  &::after {
    content: '';
    width: 0px;
    height: 0px;
    display: block;
    border-bottom: 4px solid transparent;
    transition: .9s;
  }
`

