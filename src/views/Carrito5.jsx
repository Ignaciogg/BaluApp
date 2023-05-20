import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { StackNavigator, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 145,
    width: 185,
    height: 165,
  },
  textoCarrito: {
    textAlign: "center",
    color: "#fff",
    marginTop: 25,
    marginBottom: 10,
    fontSize: 22,
    fontFamily: "DMSans-Bold",
  },
  textoCarrito2: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 5,
    fontSize: 15,
    fontFamily: "DMSans-Regular",
    marginBottom: 210,
  },
  addButton: {
    width: 335,
    height: 51,
    borderRadius: 20,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
  },
});
  
const Carrito5 = () => {


  const navigation = useNavigation();

  const handleButtonClickNavbar = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ alignItems: "center", flex: 1, resizeMode: "cover", height: 844, width: 394, backgroundColor: "#4D0053"}}>
        <Image
            style={styles.imagecenter}
            source={require("../../assets/ordenRecibida.png")}
        />
        <Text style={styles.textoCarrito}>Su encargo ha sido{'\n'}recibido correctamente</Text>
        <Text style={styles.textoCarrito2}>Estamos trabajando en su pedido.{'\n'}Espere 5 minutos hasta que llegue.{'\n'}¡Gracias!</Text>

        <TouchableOpacity style={styles.addButton} onPress={handleButtonClickNavbar}>
          <Text style={styles.textaddButton}>Volver a la pestaña principal</Text>
        </TouchableOpacity>
            
    </View>
  );
};

export default Carrito5;