import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StackNavigator, useNavigation } from "@react-navigation/native";

const Carrito2 = () => {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={{ margin: 20 }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
        <Text style={styles.textoCarrito}>Tu carrito</Text>

        <View>
          <Text style={styles.pago}>Procesar pago</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
    width: 116,
    height: 80,
  },
  textoCarrito: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 20,
    fontSize: 23,
    fontFamily: "DMSans-Regular",
  },
  pagoContainer: {
    color: "#97319E",
    width: 335,
    height: 51,
  },
  pago: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 18,
    fontFamily: "DMSans-Regular",
  },
});

export default Carrito2;
