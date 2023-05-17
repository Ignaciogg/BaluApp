import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { StackNavigator, useNavigation } from "@react-navigation/native";

const Carrito2 = () => {

  const navigation = useNavigation();

  const handleButtonClickCarrito3 = () => {
    navigation.navigate("Carrito3");
  };

  const [items, setItems] = useState([
    { name: "Tarjeta de crédito", count: 1, image: require("../../assets/logos_tarjeta.png") },
    { name: "Paypal", count: 0, image: require("../../assets/logos_paypal.png") },
    { name: "Google Pay", count: 0, image: require("../../assets/logos_google-icon.png") },
  ]);

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
        <Text style={styles.textoCarrito}>Pago mediante</Text>

        {items.map((item, index) => (
          <View key={index} style={styles.rectangulo}>
            <Image
              style={styles.image}
              source={item.image}/>

            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
            </View>

            <View style={styles.containerBotones}>
              
            </View>
          </View>
        ))}

        <View>
          <Button
            title="Continuar"
            color="#97319E"
            style={styles.pagoContainer}
            onPress={handleButtonClickCarrito3}
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
    marginLeft: 8,
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
});

export default Carrito2;
