import MainContainer from "layouts/MainContainer";
import { HeroTitle, HeroSection, ImgWrap } from "./Hero.styled";
import "animate.css/animate.min.css";

const Hero = () => {
  return (
    <HeroSection>
      <ImgWrap>
        <MainContainer>
          <div>
            <HeroTitle className="animate__animated animate__fadeInLeft animate__slower">
            It is very important for the customer to pay attention to the adipiscing process.
              And they provide for the pain itself, they do not know how many troubles, less which ones
              the pleasure of refusing pleasure is nothing. Something with desire for pleasure
              but he will criticize our pleasures of the body!
            </HeroTitle>
          </div>
        </MainContainer>
      </ImgWrap>
    </HeroSection>
  );
};

export default Hero;
