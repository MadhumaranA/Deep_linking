import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const ScreenA = ({ navigation }) => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding:10,
          borderRadius: 5
        }}
        onPress={() => navigation.navigate("ScreenB", { message: 'Come from Screen A' })}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
          }}
        >
          Go to ScreenB
        </Text>
      </TouchableOpacity>
    </View>
  );

};

export default ScreenA;