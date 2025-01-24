"use client"
import * as S from "./styles"
import { useState } from "react"
import { CgClose } from "react-icons/cg"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.Container>
      <S.NavBar className="fixed">
        <S.Logo>Jeferson</S.Logo>
        <S.HamburgerMenu onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </S.HamburgerMenu>
        <S.MobileMenu className={isMenuOpen ? "show" : ""}>
          <S.CloseButton onClick={toggleMenu}>
            <CgClose />
          </S.CloseButton>
          <S.Nav>
            <S.NavItem href="#hero" onClick={toggleMenu}>
              HOME
            </S.NavItem>
            <S.NavItem href="#about" onClick={toggleMenu}>
              ABOUT ME
            </S.NavItem>
            <S.NavItem href="#skills" onClick={toggleMenu}>
              SKILLS
            </S.NavItem>
            <S.NavItem href="#portfolio" onClick={toggleMenu}>
              PROJETOS
            </S.NavItem>
            <S.NavItem href="#services" onClick={toggleMenu}>
              SERVIÇOS
            </S.NavItem>
            <S.ContactButton onClick={toggleMenu}>CONTATO</S.ContactButton>
          </S.Nav>
        </S.MobileMenu>
        <S.DesktopMenu>
          <S.Nav>
            <S.NavItem href="#hero">HOME</S.NavItem>
            <S.NavItem href="#about">ABOUT ME</S.NavItem>
            <S.NavItem href="#skills">SKILLS</S.NavItem>
            <S.NavItem href="#portfolio">PROJETOS</S.NavItem>
            <S.NavItem href="#services">SERVIÇOS</S.NavItem>
            <S.ContactButton>CONTATO</S.ContactButton>
          </S.Nav>
        </S.DesktopMenu>
      </S.NavBar>
    </S.Container>
  )
}

