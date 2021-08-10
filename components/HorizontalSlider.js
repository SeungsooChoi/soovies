import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";

export default ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 10, marginBottom: 20 }}
      contentContainerStyle={{ paddingLeft: 14 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </>
);
