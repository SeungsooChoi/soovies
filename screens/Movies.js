import React from "react";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>Movies</Text>
      <Button title="상세보기" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};
