import MainContainer from "layouts/MainContainer";
import CamperSea from "assets/pictures/capmer-sea.jpg";
import CamperForest from "assets/pictures/camper-forest.jpg";
import CamperMountains from "assets/pictures/camper-mountains.jpg";
import CamperCouple from "assets/pictures/camper-couple.jpg";
import {
  PictureSection,
  SectionWrap,
  PicturePositionWrap,
  TextBlock,
} from "./PicturesSection.styled";

const PicturesSection = () => {
  return (
    <PictureSection>
      <MainContainer>
        <SectionWrap>
          <div>
            <img
              src={CamperMountains}
              alt="campervan in the mountains"
              width={300}
              height={500}
            />

            <PicturePositionWrap>
              <img
                src={CamperCouple}
                alt="couple sitting next to campervan"
                width={300}
                height={500}
              />
              <img
                src={CamperForest}
                alt="campervan in the forest"
                width={300}
                height={500}
              />
            </PicturePositionWrap>

            <img
              src={CamperSea}
              alt="campervan on the sea"
              width={300}
              height={500}
            />
          </div>

          <TextBlock>
            <div>
              <h2>The company is very smart</h2>

              <p>
              The company itself is a very successful company.
                It hinders those who are laborious, and in carrying them out with less effort
                He hates to open to him what you owe and the benefits of these pains
                I will explain in a wise way, they will follow. Very well done
                the pain should be followed by the adipisicing of the developer. Nothing hinders either
                when he bears most of the great things, it is assailed by the wise man
                to be repulsed by pleasures, never to be repelled;
                please be away, we can open! The customer is very happy
                will be followed by adipisicing the developer. Let him run away, but most of all his duties
                but no pleasure but exercise? I hate the mind
                we charge the harshest with labor! We lead the rougher
                any distinction should be assumed
              </p>

              <p id="additional-info">
                The company itself is a very successful company.
                It hinders those who are laborious, and in carrying them out with less effort
                He hates to open to him what you owe and the benefits of these pains
                I will explain in a wise way, they will follow. Very well done
                the pain should be followed by the adipisicing of the developer. Nothing hinders either
                when he bears most of the great things, it is assailed by the wise man
                to be repulsed by pleasures, never to be repelled;
                please be away, we can open! The customer is very happy
                will be followed by adipisicing the developer. Let him run away, but most of all his duties
                but no pleasure but exercise? I hate the mind
                we charge the harshest with labor! We lead the rougher
                any distinction should be assumed
              </p>
            </div>
          </TextBlock>
        </SectionWrap>
      </MainContainer>
    </PictureSection>
  );
};

export default PicturesSection;
