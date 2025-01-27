"use client";
import React from "react";
import * as S from "./styles";
import Hero from "@/components/home/hero/hero";
import About from "@/components/home/aboutUs/aboutUs";
import Skills from "@/components/home/skills/skills";
import Projects from "@/components/home/projetcts/projects";
import Contact from "@/components/home/contacts/contacts";
import Services from "@/components/home/services/service";

const Home: React.FC = () => {
  return (
    <S.Container>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Services/>
     <Contact/>
    
    </S.Container>
  );
};

export default Home;

