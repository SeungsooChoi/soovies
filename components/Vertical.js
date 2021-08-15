import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { trimText } from "../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 16px;
`;

const Title = styled.Text`
  color: white;
  margin: 6px 0px;
`;

const Vertical = ({ id, poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Title>{trimText(title, 12)}</Title>
      {votes.length > 0 && <Votes votes={votes} />}
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
