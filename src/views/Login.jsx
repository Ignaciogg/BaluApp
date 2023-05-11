import React from "react";
import { Text, View, StyleSheet, Image, Button, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
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
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
  },
});

const Login = () => {
  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

      <View style={{ margin: 20 }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
      </View>

    </ImageBackground>
    
  );
};

export default Login;
