import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { StackNavigator, useNavigation } from "@react-navigation/native";

const Carrito3 = () => {

  const navigation = useNavigation();

  const handleButtonClickCarrito4 = () => {
    navigation.navigate("Carrito4");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={{ margin: 20, alignItems: "center" }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
        <Text style={styles.textoCarrito}>Enviar a</Text>

        <View style={styles.rectangulo}>
          <Image
            style={styles.image}
            source={require("../../assets/icono-direccion.png")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Dirección principal</Text>
          </View>

          <TouchableOpacity style={[styles.outsideButton]}>
            <TouchableOpacity style={[styles.selectedButton]}/>
          </TouchableOpacity>
        </View>

        <Text 
          style={styles.forgot}>Agregar una nueva dirección
        </Text>

        <View>
          <Button
            title="Continuar"
            color="#97319E"
            style={styles.pagoContainer}
            onPress={handleButtonClickCarrito4}
          />
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
    alignSelf: "flex-start",
    color: "#fff",
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 23,
    fontFamily: "DMSans-Bold",
  },
  rectangulo: {
    backgroundColor: "#fff",
    height: 73,
    width: 335,
    borderRadius: 30,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    flex: 4,
    marginLeft: 15,
  },
  text: {
    fontFamily: "DMSans-Medium",
    fontSize: 14,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    marginLeft: 15,
  },
  outsideButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginRight: 30,
    width: 36,
    height: 36,
    backgroundColor: '#EEB1FF',
  },
  selectedButton: {
    borderRadius: 30,
    width: 26,
    height: 26,
    backgroundColor: '#EEB1FF',
    backgroundColor: '#97319E',
  },
  forgot: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    textDecorationLine: "underline",
    fontStyle: "italic",
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Carrito3;
