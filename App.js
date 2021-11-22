//Change this in app.json
//"sdkVersion": "41.0.0",

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen />
      </View>
    );
  }
}
