import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px){
    flex-direction: column;
  }
`

const ContainerPresentation = styled.div`
  width: 62.84%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding-left: 144px;

  background-color:#00ff7f;
  color: #f0f8ff;

  @media (max-width: 800px){
    width: 100%;
    min-height: 175px;

    position: absolute;
    top:0;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`

const Logo = styled.p`
  font-family: 'Passion One';
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;

  color: #f0f8ff;

  @media (max-width: 800px){
    font-size: 76px;
    line-height: 84px;

    justify-content: start;
  }
`

const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  color: #f0f8ff;

  @media (max-width: 800px){
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }
`

const ContainerSignIn = styled.form(({ disableButton }) => `
  min-height: inherit;
  width: 37.16%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 13px;

  background-color: #f0f8ff;

  input {
    height: 85px;
    width: 80%;

    background-color: #e3fbe3;
    color: #006400;

    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;

    padding-left: 17px;

    border: none;
    border-radius: 6px;

    &::placeholder {
      color: #9F9F9F;
    }
    &::disabled {
      background-color: #F2F2F2;
      color: #AFAFAF;
    }
  }

  button {
    height: 65px;
    width: 80%;
    background-color: ${disableButton ? "#b0c4de" : "#00ff00"};
    opacity: ${disableButton ? 0.7 : 1};
    color: #f0f8ff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;

    text-align: center;

    border-radius: 6px;
    border: none;

    cursor: ${disableButton ? 'not-allowed' : 'pointer'};
    pointer-events: ${disableButton ? 'none' : 'auto'};
  }

  @media (max-width: 800px){
    width: 100%;
    min-height: 492px;

    gap: 11px;
    margin-top: 185px;

    justify-content: start;
    padding-top: 40px;

    input {
      width: 90%;
      height: 55px;
      font-size: 22px;
    }

    button {
      width: 90%;
      height: 55px;
      font-size: 22px;
    }
  }
`);

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  text-decoration-line: underline;

  color: #006400;

  @media (max-width: 800px){
    font-size: 17px;
  }
`;

export {
  Wrapper,
  ContainerPresentation,
  Logo,
  Title,
  ContainerSignIn,
  StyledLink
}