"use client";
import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Image from "next/image";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true); 
        }
      },
      { threshold: 0.1 } 
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasBeenVisible]); 

  return (
    <S.Container id="about" ref={ref}>
      <S.Gradient />
      <S.Content $isVisible={isVisible}>
        <S.ImageContainer $isVisible={isVisible}>
          <S.ImageFrame>
            <Image
              src="/assets/imagesAboutUs/jeferson.jpeg"
              alt="Profile"
              width={400}
              height={800}
              className="rounded-lg"
            />
          </S.ImageFrame>
        </S.ImageContainer>
        
        <S.TextContent>
          <S.TitleWrapper $isVisible={isVisible}>
            <S.Title>Sobre</S.Title>
            <S.TitleHighlight>Mim</S.TitleHighlight>
          </S.TitleWrapper>
          
          <S.Description $isVisible={isVisible}>
          Sou desenvolvedor front-end com experiência em e-commerce, 
          automação de marketing e desenvolvimento web. Especializado 
          em criar soluções ágeis e escaláveis, com foco na otimização de 
          código, segurança e qualidade. Realizo code reviews para garantir 
          melhores práticas e eficiência. Tenho uma abordagem colaborativa
           e orientada a resultados, utilizando metodologias ágeis como 
           Scrum e Kanban, sempre buscando inovações para aprimorar a 
           experiência do cliente e impulsionar o desempenho do negócio.
          </S.Description>

          <S.InfoGrid $isVisible={isVisible}>
  <S.InfoItem>
    <S.InfoLabel>Nome</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>Jeferson Abreu</S.InfoContent>
  </S.InfoItem>
  <S.InfoItem>
    <S.InfoLabel>localidade</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>Fortaleza - Ceará</S.InfoContent>
  </S.InfoItem>
  <S.InfoItem>
    <S.InfoLabel>Whatsapp</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>
      <a href="https://wa.me/5585989220171" target="_blank" rel="noopener noreferrer">
        (85) 989220171
      </a>
    </S.InfoContent>
  </S.InfoItem>

  <S.InfoItem>
    <S.InfoLabel>Email</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>
      <a href="mailto:devjefersonabreu10@gmail.com" target="_blank" rel="noopener noreferrer">
        devjefersonabreu10@gmail.com
      </a>
    </S.InfoContent>
  </S.InfoItem>

  <S.InfoItem>
    <S.InfoLabel>Telegram</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>
      <a href="https://t.me/85992850899" target="_blank" rel="noopener noreferrer">
        (85) 992850899
      </a>
    </S.InfoContent>
  </S.InfoItem>

  <S.InfoItem>
    <S.InfoLabel>LinkedIn</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>
      <a href="https://www.linkedin.com/in/jeferson-da-silva-abreu/" target="_blank" rel="noopener noreferrer">
        linkedin.com/in/jeferson-da-silva-abreu
      </a>
    </S.InfoContent>
  </S.InfoItem>

  <S.InfoItem>
    <S.InfoLabel>GitHub</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>
      <a href="https://github.com/DevJefersonAbreu" target="_blank" rel="noopener noreferrer">
        github.com/DevJefersonAbreu
      </a>
    </S.InfoContent>
  </S.InfoItem>

  <S.InfoItem>
    <S.InfoLabel>Discord</S.InfoLabel>
    <S.InfoValue>:</S.InfoValue>
    <S.InfoContent>
      <a href="https://discordapp.com/users/jefersonabreu_80869" target="_blank" rel="noopener noreferrer">
        jefersonabreu_80869
      </a>
    </S.InfoContent>
  </S.InfoItem>
</S.InfoGrid>


          <S.ButtonGroup $isVisible={isVisible}>
            <S.HireButton>CONTATO</S.HireButton>
            <S.ResumeButton>BAIXAR CV</S.ResumeButton>
          </S.ButtonGroup>
        </S.TextContent>
      </S.Content>
    </S.Container>
  );
};

export default About;
