import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Image, Text } from "react-native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

// 이미지 로드(splash 등등)
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      // url
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

// 폰트 로드

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1591285713698-598d587de63e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpbW1pbmclMjBwb29sfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <Text>Hello</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
