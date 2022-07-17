import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #11132f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 800px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const HeroBackdrop = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 1500px;
  position: absolute;
  display: flex;
  overflow: hidden;
`;

export const ImageBackdrop = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  //max-width: 1200px;
  //position: absolute;
  padding: 8px 24px;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
`;

export const HeroBar = styled.div`
  background-color: #a5bdcf;
  width: 300px;
  height: 800px;
  margin-left: 950px;
  overflow: visible;

  @media screen and (max-width: 1250px) {
    transition: 0.3s ease-in-out;
    margin-left: 0;
    position: absolute;
    left: 0;
  }
`;

export const HeroImage = styled.img`
  margin-left: -60px;
  margin-top: 70px;
  height: 800px;
  }
`;

export const HeroP = styled.p`
  color: white;
  font-size: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const HeroH = styled.h1`
  color: white;
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: 120px;
  margin-top: -30px;
  @media screen and (max-width: 1250px) {
    font-size: 100px;
    transition: 0.3s ease-in-out;
  }
`;

export const HeroAbout = styled.div`
  //  background-color: blue;
  position: absolute;
  top: 160px;
  margin-left: 130px;

  @media screen and (max-width: 1250px) {
    transition: 0.3s ease-in-out;
    margin-left: 0;
    position: absolute;
    left: 350px;
  }
  //TODO: responsive phone edition
`;
