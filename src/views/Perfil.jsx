import React from "react";
import { Text, View, StyleSheet, Image, Button, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
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
  textoCentrado: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 24,
    fontSize: 20,
    textAlign: "center",
  },
});

const Perfil = () => {
  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

      <View style={{ margin: 20 }}>

      <Text>PERFIL</Text>

      <Text style={styles.textoCentrado}>Álvaro Farreny Boixader</Text>

      <Text style={styles.textoCentrado}>Mi cuenta</Text>
      <Text style={styles.textoCentrado}>Dirección</Text>
      <Text style={styles.textoCentrado}>Historial de pedidos</Text>


      </View>

    </ImageBackground>
  );
};

export default Perfil;
