import React from "react";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movies</Text>
      <Button title="상세보기" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};
