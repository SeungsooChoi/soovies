import React from "react";
import PropTyeps from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="large" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: PropTyeps.bool.isRequired,
  children: PropTyeps.node.isRequired,
};

export default ScrollContainer;
