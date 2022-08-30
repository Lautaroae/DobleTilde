import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column1, Img, ImgWrap } from "./Info2Elements"

const Info2 = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Nuestros Productos</TopLine>
                                <Heading>Tenemos los mejores productos con la mejor calidad, a demas de un amplio surtido. </Heading>
                                <Subtitle></Subtitle>
                                <BtnWrap>
                                    <Button to="/products"
                                        // smooth={true}
                                        duration={500}
                                        // spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        Mira!
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={process.env.PUBLIC_URL + "/assets/svg-3.svg"} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info2