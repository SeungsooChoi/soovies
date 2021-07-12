import React from "react";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text>Home</Text>
      <Button title="상세보기" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};
