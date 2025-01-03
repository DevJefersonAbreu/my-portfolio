"use client";
import React from "react";
import * as S from "./styles";
import { Monitor, Smartphone, Code, Video } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Video size={48} />,
    title: "VIDEO EDITING",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
  },
  {
    icon: <Smartphone size={48} />,
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
  },
  {
    icon: <Monitor size={48} />,
    title: "DESKTOP APP DEVELOPMENT",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
  },
  {
    icon: <Code size={48} />,
    title: "PROGRAMMING LANGUAGES",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <S.Container id="services" ref={ref}>
      <S.Title
        style={{
          opacity: inView ? 1 : 0,
          transform: `translateY(${inView ? 0 : '20px'})`,
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        SERVICES
      </S.Title>
      <S.Grid>
        {services.map((service, index) => (
          <S.Card
            key={index}
            style={{
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : '20px'})`,
              transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`,
            }}
          >
            <S.IconWrapper>{service.icon}</S.IconWrapper>
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.Description>{service.description}</S.Description>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default Services;

