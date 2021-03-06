import React, { useEffect } from "react";
import Poster from "../components/Poster";
import styled from "styled-components/native";
import ScrollContainer from "../components/ScrollContainer";
import { apiImage } from "../api";
import { Dimensions } from "react-native";
import Votes from "../components/Votes";

const BG = styled.Image`
  width: 100%;
  height: ${Dimensions.get("window").height / 3}px;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View``;

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

const Info = styled.View``;

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <ScrollContainer loading={false}>
      <Header>
        <BG source={{ uri: apiImage(backgroundImage, "-") }} />
        <Container>
          <Poster url={poster} />
          <Info>
            <Title>{title}</Title>
            <Votes votes={votes} />
          </Info>
        </Container>
      </Header>
    </ScrollContainer>
  );
};
