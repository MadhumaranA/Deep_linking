import React from "react";
import { View, TouchableOpacity, Text, Linking, StyleSheet } from "react-native";

export default function LinkingScreen({ }) {

  const Url_A = "myapp://app/a";
  const Url_B = "myapp://app/b/come-from-url";
  const Url_C = "myapp://app/c";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => Linking.openURL(Url_A)}
      >
        <Text
          style={styles.text1}
        >
          Deeplink to ScreenA
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => Linking.openURL(Url_B)}
      >
        <Text
          style={styles.text1}>
          Deeplink to ScreenB
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => Linking.openURL(Url_C)}
      >
        <Text
          style={styles.text1}>
          Deeplink to ScreenC
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => Linking.openURL("https://doodleblue.com/")}
      >
        <Text
          style={styles.text1}>
          Open doodleblue site
        </Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
 
  text1: {
    fontSize: 25,
    color: "#fff",
  },
  btnView: {
    backgroundColor: "green",
    margin: 5,
    padding: 10,
    borderRadius: 7
  }
})