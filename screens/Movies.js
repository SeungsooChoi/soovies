import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { movieApi } from "../api";

export default () => {
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    console.log(popular);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movies</Text>
    </View>
  );
};
