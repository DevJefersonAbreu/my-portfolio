"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import Image from "next/image"
import { User, MapPin, Phone, Mail, Linkedin, Github } from "lucide-react"

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true)
          setHasBeenVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasBeenVisible])

  const handleItemClick = (action: () => void) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      action()
    }
  }

  return (
    <S.Container id="about" ref={ref}>
      <S.Gradient />
      <S.Content $isVisible={isVisible}>
        <S.ImageContainer $isVisible={isVisible}>
          <S.ImageFrame>
            <Image src="/assets/imagesAboutUs/jeferson.jpeg" alt="Profile" width={400} height={800} className="rounded-lg" priority />
          </S.ImageFrame>
        </S.ImageContainer>

        <S.TextContent>
          <S.TitleWrapper $isVisible={isVisible}>
            <S.Title>Sobre</S.Title>
            <S.TitleHighlight>Mim</S.TitleHighlight>
          </S.TitleWrapper>

          <S.Description $isVisible={isVisible}>
            Sou desenvolvedor front-end com experiência em e-commerce, automação de marketing e desenvolvimento web.
            Especializado em criar soluções ágeis e escaláveis, com foco na otimização de código, segurança e qualidade.
            Realizo code reviews para garantir melhores práticas e eficiência. Tenho uma abordagem colaborativa e
            orientada a resultados, utilizando metodologias ágeis como Scrum e Kanban, sempre buscando inovações para
            aprimorar a experiência do cliente e impulsionar o desempenho do negócio.
          </S.Description>

          <S.InfoGrid $isVisible={isVisible}>
            <S.InfoItem>
              <S.IconWrapper>
                <User size={20} />
              </S.IconWrapper>
              <S.InfoLabel>Jeferson Abreu</S.InfoLabel>
            </S.InfoItem>
            <S.InfoItem>
              <S.IconWrapper>
                <MapPin size={20} />
              </S.IconWrapper>
              <S.InfoLabel>Fortaleza - CE</S.InfoLabel>
            </S.InfoItem>
            <S.InfoItem
              onClick={handleItemClick(() => window.open("https://wa.me/5585989220171", "_blank"))}
              aria-label="Abrir WhatsApp"
            >
              <S.IconWrapper>
                <Phone size={20} />
              </S.IconWrapper>
              <S.InfoLabel>WhatsApp</S.InfoLabel>
              <S.HiddenContent>(85) 989220171</S.HiddenContent>
            </S.InfoItem>
            <S.InfoItem
              onClick={handleItemClick(() => (window.location.href = "mailto:devjefersonabreu10@gmail.com"))}
              aria-label="Enviar e-mail"
            >
              <S.IconWrapper>
                <Mail size={20} />
              </S.IconWrapper>
              <S.InfoLabel>Email</S.InfoLabel>
              <S.HiddenContent>devjefersonabreu10@gmail.com</S.HiddenContent>
            </S.InfoItem>
            <S.InfoItem
              onClick={handleItemClick(() =>
                window.open("https://www.linkedin.com/in/jeferson-da-silva-abreu/", "_blank"),
              )}
              aria-label="Abrir perfil do LinkedIn"
            >
              <S.IconWrapper>
                <Linkedin size={20} />
              </S.IconWrapper>
              <S.InfoLabel>LinkedIn</S.InfoLabel>
              <S.HiddenContent>jeferson-da-silva-abreu</S.HiddenContent>
            </S.InfoItem>
            <S.InfoItem
              onClick={handleItemClick(() => window.open("https://github.com/DevJefersonAbreu", "_blank"))}
              aria-label="Abrir perfil do GitHub"
            >
              <S.IconWrapper>
                <Github size={20} />
              </S.IconWrapper>
              <S.InfoLabel>GitHub</S.InfoLabel>
              <S.HiddenContent>DevJefersonAbreu</S.HiddenContent>
            </S.InfoItem>
          </S.InfoGrid>

          <S.ButtonGroup $isVisible={isVisible}>
            <S.HireButton onClick={() => window.open("https://wa.me/5585989220171", "_blank")}>CONTATO</S.HireButton>
            <S.ResumeButton
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/curriculo.pdf"
                link.download = "Jeferson_Abreu_CV.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              BAIXAR CV
            </S.ResumeButton>
          </S.ButtonGroup>
        </S.TextContent>
      </S.Content>
    </S.Container>
  )
}

export default About;

