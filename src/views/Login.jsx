import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const styles = StyleSheet.create({
  strong: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 16,
  },
  strong2: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 24,
    fontSize: 16,
  },
});

const Login = () => {
  return (
    <View style={{ margin: 20 }}>
      <Image
        style={styles.imagecenter}
        source={require("../../assets/logoBalu.png")}
      />
      
    </View>
  );
};

export default Login;
