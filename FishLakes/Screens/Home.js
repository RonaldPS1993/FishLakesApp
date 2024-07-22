import React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>MapView</Text>
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
