import { Text, View, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Carrito = () => {
  const navigation = useNavigation();

  const handleButtonClickCarrito2 = () => {
    navigation.navigate("Carrito2", { total: calcularTotal(), items: items});
  };

  const [items, setItems] = useState([
    { name: "Summer Bowl", price: "7,99€", count: 1, image: require("../../assets/bowl1.png") },
    { name: "Spring Bowl", price: "8,99€", count: 1, image: require("../../assets/bowl2.png") },
    { name: "Bowl Personalizado", price: "11,99€", count: 1, image: require("../../assets/bowl3.png") },
  ]);

  const handleIncrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].count += 1;
    setItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].count > 0) {
      updatedItems[index].count -= 1;
      setItems(updatedItems);
    }
  };

  const calcularTotal = () => {
    let total = 0;
    items.forEach((item) => {
      const precio = parseFloat(item.price.replace(",", ".").replace("€", ""));
      total += item.count * precio;
    });
    return total.toFixed(2);
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

        {items.map((item, index) => (
          <View key={index} style={styles.rectangulo}>
            <Image
              style={styles.image}
              source={item.image}
            />

            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.textprecio}>{item.price}</Text>
            </View>

            <View style={styles.containerBotones}>
              <TouchableOpacity
                style={styles.buttoncounter}
                onPress={() => handleDecrement(index)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.count}>{item.count}</Text>
              <TouchableOpacity
                style={styles.buttoncounter}
                onPress={() => handleIncrement(index)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.precioContainer}>
          <Text style={styles.textoCarrito}>Total</Text>
          <Text style={styles.textoCarrito}>${calcularTotal()}€</Text>
        </View>

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
    marginBottom: 20,
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
  precioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 25,
    marginLeft: 10,
  },
});

export default Carrito;
