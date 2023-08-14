import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function ScreenC({ navigation }) {

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding:10,
          borderRadius: 7
        }}
        onPress={() => navigation.navigate('LinkingScreen')}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
          }}
        >
          Go to Linking
        </Text>
      </TouchableOpacity>
    </View>
  );

}