"use client"
import * as S from "./styles";
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';


  export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <S.Container>
        <S.NavBar className="fixed">
          <S.HamburgerMenu onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </S.HamburgerMenu>
          <div>
          <S.Logo>Jeferson</S.Logo>
          </div>
          <S.MajorLinksContainer>
            <S.LinksContainer className={isMenuOpen ? 'show-links' : ''}>
            <S.Nav>
        <S.NavItem href="#hero">HOME</S.NavItem>
        <S.NavItem href="#about">ABOUT ME</S.NavItem>
        <S.NavItem href="#skills">SKILLS</S.NavItem>
        <S.NavItem href="#portfolio">PROJETOS</S.NavItem>
        <S.NavItem href="#services">SERVIÇOS</S.NavItem>
        <S.ContactButton>CONTATO</S.ContactButton>
      </S.Nav>
              {isMenuOpen && (
                <S.CloseButton onClick={toggleMenu}>
                  <CgClose />
                </S.CloseButton>
              )}
            </S.LinksContainer>
          </S.MajorLinksContainer>
        </S.NavBar>
      </S.Container>
    );
  }