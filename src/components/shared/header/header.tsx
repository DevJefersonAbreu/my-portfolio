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
              INÍCIO
            </S.NavItem>
            <S.NavItem href="#about" onClick={toggleMenu}>
              SOBRE MIM
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
            <a href="https://wa.me/5585989220171" target="_blank" rel="noopener noreferrer"> {/* Link para o WhatsApp */}
              <S.ContactButton onClick={toggleMenu}>CONTATO</S.ContactButton>
            </a>
          </S.Nav>
        </S.MobileMenu>
        <S.DesktopMenu>
          <S.Nav>
            <S.NavItem href="#hero">INÍCIO</S.NavItem>
            <S.NavItem href="#about">SOBRE MIM</S.NavItem>
            <S.NavItem href="#skills">SKILLS</S.NavItem>
            <S.NavItem href="#portfolio">PROJETOS</S.NavItem>
            <S.NavItem href="#services">SERVIÇOS</S.NavItem>
            <a href="https://wa.me/5585989220171" target="_blank" rel="noopener noreferrer"> {/* Link para o WhatsApp */}
              <S.ContactButton>CONTATO</S.ContactButton>
            </a>
          </S.Nav>
        </S.DesktopMenu>
      </S.NavBar>
    </S.Container>
  )
}
