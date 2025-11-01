import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  padding: 5rem 0;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  animation: z 1s ease-in-out;
  @keyframes z {
    0% {
      margin-top: -1000px;
    }
    100% {
      margin-top: 0px;
    }
  }
  h1 {
    font-size: 2.6rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 500;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(180, 180, 180);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 18px;
    margin-top: 20px;
    color: rgb(180, 180, 180);
    opacity: 0.85;
  }

  /* Make bold segments in the hero description pure white for higher contrast */
  p strong {
    color: #ffffff;
    font-weight: 800;
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
    p {
      width: 70%;
    }
  }
  @media screen and (max-width: 580px) {
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 510px) {
    h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 13px;
    }
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  flex: 1;
  animation: x 1s ease-in-out;
  @keyframes x {
    0% {
      margin-right: -1000px;
    }
    100% {
      margin-right: 0px;
    }
  }

  @media screen and (max-width: 992px) {
    order: -1;
    margin-bottom: 2rem;
  }
`;

export const ProfileImage = styled.img`
  width: 345px;
  height: 345px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3a86ff;
  box-shadow: 0 10px 40px rgba(58, 134, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 50px rgba(58, 134, 255, 0.5);
  }

  @media screen and (max-width: 768px) {
    width: 290px;
    height: 290px;
  }

  @media screen and (max-width: 580px) {
    width: 230px;
    height: 230px;
  }

  @media screen and (max-width: 400px) {
    width: 195px;
    height: 195px;
  }
`;
