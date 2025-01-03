import styled from "styled-components";

export const Container = styled.header`
  
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 80px 0 80px;
  background: #382EC4;
  
  &.fixed {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: #382EC4;
    z-index: 1000;
  }

  @media (min-width: 601px) and (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0 80px 0 40px;
  }
`

export const Logo = styled.div`
  background: linear-gradient(135deg, #5aabff 0%, #7b5aff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #5aabff;
  }
`;

export const ContactButton = styled.button`
  background: linear-gradient(to right, #5aabff, #7b5aff);
  color: white;
  padding: 0.35rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;


export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  .bar {
    width: 30px;
    height: 3px;
    background-color: #FFF;
    margin: 3px 0;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`

export const MajorLinksContainer = styled.div`
  width: 60%;

  @media (min-width: 1001px) and (max-width: 1450px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 0%;
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
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    top: 0px;
    padding-top: 20px;
    right: 0;
    width: 100%;
    height: 500px;
    background: #382EC4;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
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

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #FFF;
  font-size: 20px;
  margin-top: 5px;
  cursor: pointer;
  padding-bottom: 10px;
`