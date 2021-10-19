import React from "react";
import styled from "styled-components";
import { a } from "react-spring";
import InfiniteSlider from "./ImageSlider";
import items from "./items";

const Main = styled.div`
  height: 450px;
  width: 80%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const ImageContainer = ({ imageGallery }) => {
  return (
    <Main>
      <InfiniteSlider items={items} imageGallery={imageGallery}>
        {({ css }, i) => (
          <Content>
            <Image style={{ backgroundImage: css }} />
          </Content>
        )}
      </InfiniteSlider>
    </Main>
  );
};

export default ImageContainer;
