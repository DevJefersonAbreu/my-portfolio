"use client";
import React from "react";
import * as S from "./styles";
import { Linkedin, Instagram, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LeftSection>
          <S.Header>
            <S.Title>s discuss</S.Title>
            <S.Subtitle>on something <S.Highlight>cool</S.Highlight> together</S.Subtitle>
          </S.Header>

          <S.InterestSection>
            <S.Label>m interested in..</S.Label>
            <S.ButtonGroup>
              <S.InterestButton>Ecommerce Website</S.InterestButton>
              <S.InterestButton>Saas Website</S.InterestButton>
              <S.InterestButton>Landing page</S.InterestButton>
              <S.InterestButton>Portfolio</S.InterestButton>
              <S.InterestButton>Blog Website</S.InterestButton>
            </S.ButtonGroup>
          </S.InterestSection>

          <S.SocialLinks>
            <S.SocialButton as="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </S.SocialButton>
            <S.SocialButton as="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </S.SocialButton>
            <S.SocialButton as="a" href="mailto:your.email@example.com" aria-label="Email">
              <Mail size={20} />
            </S.SocialButton>
          </S.SocialLinks>
        </S.LeftSection>

        <S.RightSection>
          <S.Form>
            <S.InputGroup>
              <S.Input type="text" placeholder="Your name" required />
              <S.InputBorder />
            </S.InputGroup>
            <S.InputGroup>
              <S.Input type="email" placeholder="Your email" required />
              <S.InputBorder />
            </S.InputGroup>
            <S.InputGroup>
              <S.TextArea placeholder="Your message" required />
              <S.InputBorder />
            </S.InputGroup>
            <S.SubmitButton type="submit">
              <span>Send Message</span>
              <Send size={20} />
            </S.SubmitButton>
          </S.Form>
        </S.RightSection>
      </S.Content>
    </S.Container>
  );
};

export default Contact;

