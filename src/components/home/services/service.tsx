"use client"
import type React from "react"
import { Globe, ShoppingCart, Smartphone, Palette } from "lucide-react"
import { useInView } from "react-intersection-observer"
import * as S from "./styles"

const services = [
  {
    icon: <Globe size={48} />,
    title: "WEBSITES",
    description:
      "Desenvolvo websites modernos, responsivos e otimizados para SEO. Meus sites são projetados para oferecer uma experiência de usuário excepcional em todos os dispositivos. Utilizo as mais recentes tecnologias web para garantir desempenho, segurança e escalabilidade.",
  },
  {
    icon: <ShoppingCart size={48} />,
    title: "E-COMMERCE",
    description:
      "Crio plataformas de e-commerce robustas e personalizadas que impulsionam vendas online. Integro sistemas de pagamento seguros, gerenciamento de estoque em tempo real e ferramentas de marketing. Meus e-commerces são otimizados para conversão e oferecem uma experiência de compra suave e intuitiva.",
  },
  {
    icon: <Smartphone size={48} />,
    title: "MOBILE",
    description:
      "Desenvolvo aplicativos móveis nativos e híbridos para iOS e Android. Meus apps são projetados para oferecer alto desempenho, design intuitivo e funcionalidades inovadoras. Utilizo as melhores práticas de desenvolvimento mobile para garantir apps rápidos, seguros e escaláveis que engajam os usuários.",
  },
  {
    icon: <Palette size={48} />,
    title: "DESIGN",
    description:
      "Ofereço serviços completos de design, desde a criação de identidade visual até interfaces de usuário complexas. Crio logotipos memoráveis, materiais de marketing impactantes e interfaces de usuário intuitivas. Foco em design centrado no usuário para criar experiências visuais que cativam e convertem.",
  },
]

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <S.Container id="services" ref={ref}>
      <S.Title
        style={{
          opacity: inView ? 1 : 0,
          transform: `translateY(${inView ? 0 : "20px"})`,
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        MEUS SERVIÇOS
      </S.Title>
      <S.Grid>
        {services.map((service, index) => (
          <S.Card
            key={index}
            style={{
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : "20px"})`,
              transition: `opacity 0.6s ease-out ${isMobile ? index * 0.1 : index * 0.2}s, transform 0.6s ease-out ${isMobile ? index * 0.1 : index * 0.2}s`,
            }}
          >
            <S.IconWrapper>{service.icon}</S.IconWrapper>
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.Description>{service.description}</S.Description>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  )
}

export default Services;

