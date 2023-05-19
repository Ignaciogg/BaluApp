import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { StackNavigator, useNavigation, useRoute } from "@react-navigation/native";

const Carrito4 = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { total, items } = route.params;

  const envio = 3.00;
  const nuevoTotal = parseFloat(total) + envio;

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
          style={styles.detalles}>Detalles del envío
        </Text>
        <Image
          style={styles.imageMap}
          source={require("../../assets/map1.png")}
        />

        <Text 
          style={styles.detalles}>Detalles del pedido
        </Text>

        <View style={styles.rectangulo}>
          {items.map((item, index) => (
            <View style={styles.fila} key={index}>
              <Text style={styles.textColumn}>{item.count}x</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <Text style={styles.textColumn}>{item.price}</Text>
            </View>
          ))}
          <View style={styles.linea}></View>
          <View style={styles.fila}>
            <Text style={styles.subtotal}>Subtotal</Text>
            <Text style={styles.textColumn}>{total}€</Text>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.fila}>
            <Text style={styles.subtotal}>Envío</Text>
            <Text style={styles.textColumn}> {envio.toFixed(2)}€</Text>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.fila}>
            <Text style={styles.subtotal}>Total</Text>
            <Text style={styles.textColumn}>{nuevoTotal.toFixed(2)}€</Text>
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
  imageMap: {
    height: 153,
    width: 331,
    marginVertical: 10,
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
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  textContainer: {
    flex: 4,
    marginLeft: 15,
  },
  text: {
    fontFamily: "DMSans-Medium",
    fontSize: 14,
    color: "black",
  },
  textColumn: {
    flex: 1,
    fontFamily: "DMSans-Medium",
    fontSize: 14,
  },
  text2: {
    fontFamily: "DMSans-Medium",
    fontSize: 10,
    color: "#8E0099",
  },
  textColumn2: {
    flex: 1,
    fontFamily: "DMSans-Medium",
    fontSize: 10,
    color: "#8E0099",
  },
  fila: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  subtotal: {
    flex: 4.6,
  },
  linea: {
    borderBottomColor: "#8E0099",
    borderBottomWidth: 1,
    width: 321,
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
