import React from 'react'

import { InfoContainer, InfoWrapper, InfoRow, Column2, TextWrapper, TopLine, Heading, Subtitle, Column1, Img, ImgWrap } from "./Info3Elements"

const Info = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Contactanos</TopLine>
                                <Heading>Nos podes mandaun mail a dobletilde@gmail o envianos un mensaje a cualquiera de nuestras redes sociales</Heading>
                                <Subtitle></Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={process.env.PUBLIC_URL + "/assets/svg-4.svg"} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info