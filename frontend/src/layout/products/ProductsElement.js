import styled from "styled-components";

export const ProductContainer = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 350px;
    margin-top: 5rem;
  }

  .card .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;
  }

  .card .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 5px 10px #218cf4;
  }

  .card .front img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card .front h3 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
  }

  .card .back {
    transform: perspective(600px) rotateY(180deg);
    background: rgb(3, 35, 54);
    padding: 15px;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-shadow: 0 5px 10px #218cf4;
  }

  .card .back .link {
    border-top: solid 1px #f3f3f3;
    height: 50px;
    line-height: 50px;
  }

  .card .back .link a {
    color: #f3f3f3;
    text-decoration: none;
  }

  .card .back h3 {
    font-size: 30px;
    margin-top: 20px;
    letter-spacing: 2px;
  }

  .card .back p {
    letter-spacing: 1px;
    margin: auto;
  }

  .card:hover .front {
    transform: perspective(600px) rotateY(180deg);
  }

  .card:hover .back {
    transform: perspective(600px) rotateY(360deg);
  }
`;
export const Prueba = styled.div`
  background: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 0;
`;
