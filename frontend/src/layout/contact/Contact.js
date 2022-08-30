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

const Contact = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Contactanos </TopLine>
                <Heading>
                  Nos podes encontrar en Instagram como Doble Tilde ok. Te podes
                  comunicar al numero de Whats App 0351 - 152492038. O nos podes
                  enviar un mail a dobletilde@gmail.
                </Heading>
                <Subtitle></Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={process.env.PUBLIC_URL + "/assets/svg-6.svg"} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Contact;
