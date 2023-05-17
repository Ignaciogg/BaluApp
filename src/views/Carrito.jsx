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
import { useNavigation } from "@react-navigation/native";

const Carrito = () => {
  const navigation = useNavigation();

  const handleButtonClickCarrito2 = () => {
    navigation.navigate("Carrito2");
  };

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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

        <View style={styles.rectangulo}>
          <Image
            style={styles.image}
            source={require("../../assets/bowl1.png")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Summer Bowl</Text>
            <Text style={styles.textprecio}>8,99€</Text>
          </View>

          <View style={styles.containerBotones}>
            <TouchableOpacity
              style={styles.buttoncounter}
              onPress={handleDecrement}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              style={styles.buttoncounter}
              onPress={handleIncrement}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rectangulo2}>
          <Image
            style={styles.image}
            source={require("../../assets/bowl2.png")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Spring Bowl</Text>
            <Text style={styles.textprecio}>8,99€</Text>
          </View>

          <View style={styles.containerBotones}>
            <TouchableOpacity
              style={styles.buttoncounter}
              onPress={handleDecrement}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              style={styles.buttoncounter}
              onPress={handleIncrement}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rectangulo2}>
          <Image
            style={styles.image}
            source={require("../../assets/bowl3.png")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Bowl Personalizado</Text>
            <Text style={styles.textprecio}>11,99€</Text>
          </View>

          <View style={styles.containerBotones}>
            <TouchableOpacity
              style={styles.buttoncounter}
              onPress={handleDecrement}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              style={styles.buttoncounter}
              onPress={handleIncrement}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.textoCarrito}> Total 29,97€</Text>

        <View>
          <Button
            title="Procesar pago"
            color="#97319E"
            style={styles.pagoContainer}
            onPress={handleButtonClickCarrito2}
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
    fontSize: 23,
    fontFamily: "DMSans-Bold",
    marginBottom: 20,
  },
  rectangulo: {
    backgroundColor: "#fff",
    height: 112,
    width: 335,
    borderRadius: 30,
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  rectangulo2: {
    backgroundColor: "#fff",
    height: 112,
    width: 335,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 8,
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
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
  containerBotones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginRight: 20,
  },
  count: {
    fontSize: 18,
    fontFamily: "DMSans-Regular",
    marginHorizontal: 10,
    color: "black",
  },
  buttoncounter: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#CB6CE6",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "DMSans-Regular",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontFamily: "DMSans-Medium",
  },
  textprecio: {
    color: "#97319E",
    fontSize: 16,
    fontFamily: "DMSans-Bold",
  },
  image: {
    width: 69,
    height: 73,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default Carrito;
