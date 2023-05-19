import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Overlay } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    width: "33.33%",
    margin: 3,
  },
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
    width: 116,
    height: 80,
  },
  itemTodaCarta: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  textPrincipal: {
    color: "#fff",
    marginTop: 24,
    fontSize: 18,
    fontFamily: "DMSans-Bold",
  },
  text: {
    color: "#fff",
    marginBottom: 2,
    fontSize: 16,
    fontFamily: "DMSans-Regular",
  },
  textprecio: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "DMSans-Regular",
  },
  btn: {
    borderRadius: 10,
  },
  overlayy: {
    position: "absolute",
    width: 390,
    height: 490,
    left: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  imagenoverlay: {
    top: 0,
    marginTop: -10,
  },
  containerContar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  count: {
    fontSize: 24,
    fontFamily: "DMSans-Regular",
    marginHorizontal: 20,
    color: "#000",
  },
  buttoncounter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#CB6CE6",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = () => {
  const navigation = useNavigation();

  const handleButtonClickSummerBowl = () => {
    navigation.navigate("SummerBowl");
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlaySummerBowl = () => {
    setVisible(!visible);
  };

  const handleButtonClickMuscleBowl = () => {
    navigation.navigate("MuscleBowl");
  };
  const handleButtonClickSpringBowl = () => {
    navigation.navigate("SpringBowl");
  };
  const handleButtonClickNectarBowl = () => {
    navigation.navigate("NectarBowl");
  };
  const handleButtonClickCarrito = () => {
    navigation.navigate("Carrito");
  };

  const [count, setCount] = useState(0);

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
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Image
            style={styles.imagecenter}
            source={require("../../assets/logoBalu.png")}
          />
          <Text style={styles.textPrincipal}>MOST POPULAR</Text>
          <View style={styles.imagesContainer}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={toggleOverlaySummerBowl}
            >
              <Image source={require("../../assets/bowl1.png")} />
            </TouchableOpacity>

            <Overlay
              overlayStyle={styles.overlayy}
              isVisible={visible}
              onBackdropPress={toggleOverlaySummerBowl}
            >
              <Image
                style={styles.imagenoverlay}
                source={require("../../assets/SummerBowlOverlay.png")}
              />

              <Text style={styles.textoDireccion}>SummerBowl</Text>
              <Text style={styles.textoDireccion}>7.99 €</Text>
              <Text style={styles.textoDireccion}>
                Lörem ipsum ösat krode predossade jåna. Sose antropokemi uda
                inklusive biogen ong.
              </Text>
              <View style={styles.containerContar}>
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
              <Button
                title="Añadir al Carrito"
                color="#97319E"
                onPress={handleButtonClickCarrito}
              />
              <Button
                title="Saber más"
                color="#97319E"
                onPress={handleButtonClickSummerBowl}
              />
            </Overlay>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={handleButtonClickSpringBowl} // Reemplaza "Screen2" con el nombre de la pantalla a la que deseas navegar
            >
              <Image source={require("../../assets/bowl2.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={handleButtonClickNectarBowl} // Reemplaza "Screen3" con el nombre de la pantalla a la que deseas navegar
            >
              <Image source={require("../../assets/bowl3.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textPrincipal}>TODA LA CARTA</Text>
          <View>
            <View style={styles.itemTodaCarta}>
              <Image
                style={styles.image}
                source={require("../../assets/bowl1.png")}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Summer Bowl</Text>
                <Text style={styles.textprecio}>7,99€</Text>
                <Button
                  title="Añadir"
                  color="#CB6CE6"
                  containerStyle={styles.btn}
                  onPress={handleButtonClickSummerBowl}
                />
              </View>
            </View>
            <View style={styles.itemTodaCarta}>
              <Image
                style={styles.image}
                source={require("../../assets/MuscleBowl.png")}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Muscle Bowl</Text>
                <Text style={styles.textprecio}>8,99€</Text>
                <Button
                  title="Añadir"
                  color="#CB6CE6"
                  containerStyle={styles.btn}
                  onPress={handleButtonClickMuscleBowl}
                />
              </View>
            </View>
            <View style={styles.itemTodaCarta}>
              <Image
                style={styles.image}
                source={require("../../assets/BowlPersonalizado.png")}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Bowl Personalizado</Text>
                <Text style={styles.textprecio}>6,99€*</Text>
                <Button
                  title="Añadir"
                  color="#CB6CE6"
                  containerStyle={styles.btn}
                  onPress={() => {}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
