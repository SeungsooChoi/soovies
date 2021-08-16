import React, { useState } from "react";
import PropTyeps from "prop-types";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";

const ScrollContainer = ({
  loading,
  children,
  contentContainerStyle,
  refreshFn,
}) => {
  const [refresing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refresing} />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator color="white" size="large" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTyeps.bool.isRequired,
  children: PropTyeps.node.isRequired,
  contentContainerStyle: PropTyeps.object,
  refreshFn: PropTyeps.func,
};

export default ScrollContainer;
