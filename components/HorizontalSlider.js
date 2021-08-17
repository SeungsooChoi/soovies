import React from "react";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";
import Title from "./Title";

const HorizontalSlider = ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 10, marginBottom: 20 }}
      contentContainerStyle={{ paddingLeft: 14 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
