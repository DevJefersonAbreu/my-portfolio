"use client";
import React from "react";
import * as S from "./styles";
import { Github, Linkedin } from 'lucide-react'; // Importando o ícone do LinkedIn
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <S.Container id="hero">
      <S.Gradient />
      <S.Content>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <S.TextContent>
            <S.TitleWrapper>
              <S.Subtitle>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  THE ULTIMATE
                </motion.span>
              </S.Subtitle>
              
              <S.Title>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  FRONT-END
                  <br />
                  DEVELOPER
                </motion.div>
              </S.Title>
              
              <S.Subtitle>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  PORTFOLIO
                </motion.span>
              </S.Subtitle>
            </S.TitleWrapper>

            <S.CTAButton>
              <span>Explore Projects</span>
              <S.ArrowIcon />
            </S.CTAButton>
          </S.TextContent>
        </motion.div>

        <S.BottomContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
          >
            <S.IconButton>
              <Github size={32} />
            </S.IconButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {/* Espaço para outros ícones ou elementos */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
          >
            <S.IconButton>
              <Linkedin size={32} /> {/* Ícone do LinkedIn substituindo o Next.js */}
            </S.IconButton>
          </motion.div>
        </S.BottomContent>
      </S.Content>
    </S.Container>
  );
};

export default Hero;
