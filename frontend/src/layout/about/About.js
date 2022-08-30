import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column1,
  Img,
  ImgWrap,
} from "../infoSection/InfoElements";

const About = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Nuestra Historia</TopLine>
                <Heading>
                  Nacimos como una idea de negocio, nos convertimos en una idea
                  de negocio para negocios acompañando al emprendedor en su
                  proyección e imagen empresarial. Plasmamos en lo tangible su
                  identidad profesional, disfrutamos acompañarlos y verlos
                  crecer porque hasta donde ustedes lleguen nosotros llegaremos
                  🚀
                </Heading>
                <Subtitle></Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={process.env.PUBLIC_URL + "/assets/svg-5.svg"} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;
