import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column2, TextWrapper, TopLine, Heading, Subtitle, Column1, Img, ImgWrap } from "./InfoElements"

const Info = () => {

    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Nuestra Historia</TopLine>
                                <Heading>
                                    Nos convertimos en una idea de negocio para negocios acompañando al emprendedor en su proyección e imagen empresarial.
                                </Heading>
                                <Subtitle></Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={process.env.PUBLIC_URL + "/assets/svg-2.svg"} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info