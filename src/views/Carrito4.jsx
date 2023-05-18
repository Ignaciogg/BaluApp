import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { StackNavigator, useNavigation } from "@react-navigation/native";

const Carrito4 = () => {

  const navigation = useNavigation();

  const handleButtonClickCarrito5 = () => {
    navigation.navigate("Carrito5");
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
        <Text style={styles.textoCarrito}>Resumen de tu pedido</Text>

        <Text 
          style={styles.detalles}>Detalles del pedido
        </Text>

        <View style={styles.rectangulo}>
          <View style={styles.fila}>
            <Text style={styles.textColumn}>1x</Text>

            <View style={styles.textContainer}>
              <Text style={styles.text}>Summer Bowl</Text>
            </View>

            <Text style={styles.textColumn}>Editar</Text>
          </View>
          <View style={styles.fila}>
            <Text style={styles.textColumn}>1x</Text>

            <View style={styles.textContainer}>
              <Text style={styles.text}>Summer Bowl</Text>
            </View>

            <Text style={styles.textColumn}>Editar</Text>
          </View>
          <View style={styles.fila}>
            <Text style={styles.textColumn}>1x</Text>

            <View style={styles.textContainer}>
              <Text style={styles.text}>Summer Bowl</Text>
            </View>

            <Text style={styles.textColumn}>Editar</Text>
          </View>
        </View>

        <View>
          <Button
            title="Continuar"
            color="#97319E"
            style={styles.pagoContainer}
            onPress={handleButtonClickCarrito5}
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
    height: 272,
    width: 321,
    borderRadius: 13,
    marginTop: 15,
    opacity: 0.95,
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
  textColumn: {
    flex: 1,
    fontFamily: "DMSans-Medium",
    fontSize: 14,
  },
  detalles: {
    alignSelf: "flex-start",
    color: "#fff",
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
    marginTop: 10,
    marginLeft: 20,
  },
});

export default Carrito4;
