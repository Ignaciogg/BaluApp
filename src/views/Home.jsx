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
    fontSize: 20,
    fontFamily: "DMSans-Regular",
    marginHorizontal: 20,
    color: "#000",
  },
  buttoncounter: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  sabermas: {
    color: "#97319E",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
    textDecorationLine: "underline",
    fontStyle: "italic",
    marginTop: 4,
    marginBottom: 5,
  },
  textoTituloOverlay: {
    color: "#97319E",
    fontSize: 20,
    fontFamily: "DMSans-Bold",
    marginTop: 10,
    marginBottom: 5,
  },
  textoPriceOverlay: {
    color: "#000",
    fontSize: 18,
    fontFamily: "DMSans-Regular",
    marginTop: 0,
    marginBottom: 5,
  },
  textoDescripcionOverlay: {
    color: "#000",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
    marginTop: 0,
    marginBottom: 0,
    textAlign: "center",
  },
  buttonanadir: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#CB6CE6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  buttonTextAnadir: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans-Bold",
  },
});

const Home = () => {
  const navigation = useNavigation();

  const handleButtonClickSummerBowl = () => {
    navigation.navigate("SummerBowl");
  };

  const [visibleSummerBowl, setVisibleSummerBowl] = useState(false);
  const [visibleSpringBowl, setVisibleSpringBowl] = useState(false);
  const [visibleNectarBowl, setVisibleNectarBowl] = useState(false);

  const toggleOverlaySummerBowl = () => {
    setVisibleSummerBowl(!visibleSummerBowl);
  };

  const toggleOverlaySpringBowl = () => {
    setVisibleSpringBowl(!visibleSpringBowl);
  };

  const toggleOverlayNectarBowl = () => {
    setVisibleNectarBowl(!visibleNectarBowl);
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
              isVisible={visibleSummerBowl}
              onBackdropPress={toggleOverlaySummerBowl}
            >
              <Image
                style={styles.imagenoverlay}
                source={require("../../assets/SummerBowlOverlay.png")}
              />

              <Text style={styles.textoTituloOverlay}>Summer Bowl</Text>
              <Text style={styles.textoPriceOverlay}>7.99 €</Text>
              <Text style={styles.textoDescripcionOverlay}>
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
              <TouchableOpacity
                style={styles.buttonanadir}
                onPress={handleButtonClickCarrito}
              >
                <Text style={styles.buttonTextAnadir}>Añadir al Carrito</Text>
              </TouchableOpacity>
              <Text
                style={styles.sabermas}
                onPress={handleButtonClickSummerBowl}
              >
                Saber más
              </Text>
            </Overlay>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={toggleOverlaySpringBowl} // Reemplaza "Screen2" con el nombre de la pantalla a la que deseas navegar
            >
              <Image source={require("../../assets/bowl2.png")} />
            </TouchableOpacity>

            <Overlay
              overlayStyle={styles.overlayy}
              isVisible={visibleSpringBowl}
              onBackdropPress={toggleOverlaySpringBowl}
            >
              <Image
                style={styles.imagenoverlay}
                source={require("../../assets/SpringBowlOverlay.png")}
              />

              <Text style={styles.textoTituloOverlay}>Spring Bowl</Text>
              <Text style={styles.textoPriceOverlay}>8.99 €</Text>
              <Text style={styles.textoDescripcionOverlay}>
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
              <TouchableOpacity
                style={styles.buttonanadir}
                onPress={handleButtonClickCarrito}
              >
                <Text style={styles.buttonTextAnadir}>Añadir al Carrito</Text>
              </TouchableOpacity>
              <Text
                style={styles.sabermas}
                onPress={handleButtonClickSpringBowl}
              >
                Saber más
              </Text>
            </Overlay>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={toggleOverlayNectarBowl} // Reemplaza "Screen3" con el nombre de la pantalla a la que deseas navegar
            >
              <Image source={require("../../assets/bowl3.png")} />
            </TouchableOpacity>

            <Overlay
              overlayStyle={styles.overlayy}
              isVisible={visibleNectarBowl}
              onBackdropPress={toggleOverlayNectarBowl}
            >
              <Image
                style={styles.imagenoverlay}
                source={require("../../assets/NectarBowlOverlay.png")}
              />

              <Text style={styles.textoTituloOverlay}>Nectar Bowl</Text>
              <Text style={styles.textoPriceOverlay}>8.99 €</Text>
              <Text style={styles.textoDescripcionOverlay}>
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
              <TouchableOpacity
                style={styles.buttonanadir}
                onPress={handleButtonClickCarrito}
              >
                <Text style={styles.buttonTextAnadir}>Añadir al Carrito</Text>
              </TouchableOpacity>
              <Text
                style={styles.sabermas}
                onPress={handleButtonClickNectarBowl}
              >
                Saber más
              </Text>
            </Overlay>
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
