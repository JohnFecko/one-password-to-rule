import React from "react";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider, Layout } from "react-native-ui-kitten";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Layout style={{ flex: 1 }} />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
