import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";

const Container = styled.View`
  padding: 0px 14px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  width: 60%;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const Horizontal = ({ id, title, releaseDate, poster, overview }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{title}</Title>
        {releaseDate ? (
          <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
        ) : null}
        <Overview>{trimText(overview, 100)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
