"use client"
import type React from "react"
import * as S from "./styles"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  const titleWords = ["FRONT-END", "DEVELOPER"]
  const subtitleWords = ["PORTFOLIO", "", "JEFERSON ABREU"]

  const wordAnimation = {
    hover: {
      scale: 1.1,
      rotate: [-1, 1, -1, 1, 0],
      transition: {
        duration: 0.3,
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 0.2,
        },
      },
    },
  }

  return (
    <S.Container id="hero">
      <S.Gradient />
      <S.Content>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <S.TextContent>
            <S.TitleWrapper>
              <S.Subtitle>
                {subtitleWords.slice(0, 2).map((word, index) => (
                  <S.InteractiveWord key={index} whileHover="hover" variants={wordAnimation}>
                    {word}{" "}
                  </S.InteractiveWord>
                ))}
              </S.Subtitle>

              <S.Title>
                {titleWords.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  >
                    <S.InteractiveWord whileHover="hover" variants={wordAnimation}>
                      {word}
                    </S.InteractiveWord>
                    <br />
                  </motion.div>
                ))}
              </S.Title>

              <S.Subtitle>
                {subtitleWords.slice(-1).map((word, index) => (
                  <S.InteractiveWord key={index} whileHover="hover" variants={wordAnimation}>
                    {word}
                  </S.InteractiveWord>
                ))}
              </S.Subtitle>
            </S.TitleWrapper>

            <S.CTAButton
              onClick={() => {
                const portfolioSection = document.querySelector("#portfolio")
                portfolioSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={20} />
            </S.CTAButton>
          </S.TextContent>
        </motion.div>

        <S.BottomContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
          >
            <S.IconButton as="a" href="https://github.com/DevJefersonAbreu" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </S.IconButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
          >
            <S.IconButton
              as="a"
              href="https://linkedin.com/in/jeferson-da-silva-abreu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </S.IconButton>
          </motion.div>
        </S.BottomContent>
      </S.Content>
    </S.Container>
  )
}

export default Hero;

