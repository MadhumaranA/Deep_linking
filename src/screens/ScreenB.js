import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function ScreenB({ route, navigation }) {

  const {
    params: { message },
  } = route;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {message &&
        <Text
          style={{
            margin: 10,
            color: "green",
            fontSize: 20,
          }}
        >
          Message: {message}
        </Text>
      }
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding:10,
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("ScreenC")}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
          }}
        >
          Go to ScreenC
        </Text>
      </TouchableOpacity>
    </View>
  );

};