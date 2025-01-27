"use client"
import type React from "react"
import * as S from "./styles"
import { Linkedin, Mail, Phone, MessageCircle, Clock, MapPin, Globe } from "lucide-react"

const Contact: React.FC = () => {
  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <S.CardTitle>Vamos criar algo extraordinário</S.CardTitle>
          <S.CardDescription>Estou disponível para novos projetos e oportunidades de colaboração</S.CardDescription>
        </S.CardHeader>
        <S.CardContent>
          <S.Content>
            <S.Section>
              <S.InfoGrid>
                <S.InfoItem>
                  <Clock size={24} />
                  <div>
                    <S.InfoTitle>Disponibilidade</S.InfoTitle>
                    <S.InfoText>Período Integral</S.InfoText>
                  </div>
                </S.InfoItem>
                <S.InfoItem>
                  <MapPin size={24} />
                  <div>
                    <S.InfoTitle>Localização</S.InfoTitle>
                    <S.InfoText>Fortaleza, CE</S.InfoText>
                  </div>
                </S.InfoItem>
                <S.InfoItem>
                  <Globe size={24} />
                  <div>
                    <S.InfoTitle>Modalidade</S.InfoTitle>
                    <S.InfoText>Remoto / Híbrido / Presencial</S.InfoText>
                  </div>
                </S.InfoItem>
              </S.InfoGrid>
            </S.Section>

            <S.Section>
              <S.ContactOptions>
                <S.ContactButton
                  href="https://wa.me/5585989220171"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                  <span>WhatsApp</span>
                </S.ContactButton>
                <S.ContactButton href="mailto:devjefersonabreu10@gmail.com" aria-label="E-mail">
                  <Mail size={20} />
                  <span>E-mail</span>
                </S.ContactButton>
                <S.ContactButton
                  href="https://www.linkedin.com/in/jeferson-da-silva-abreu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </S.ContactButton>
                <S.ContactButton
                  href="https://t.me/85992850899"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <MessageCircle size={20} />
                  <span>Telegram</span>
                </S.ContactButton>
                <S.ContactButton
                  href="https://discord.com/users/jefersonabreu_80869"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <MessageCircle size={20} />
                  <span>Discord</span>
                </S.ContactButton>
              </S.ContactOptions>
            </S.Section>
          </S.Content>
        </S.CardContent>
      </S.Card>
    </S.Container>
  )
}

export default Contact;

