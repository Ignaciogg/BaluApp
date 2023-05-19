import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { StackNavigator, useNavigation, useRoute } from "@react-navigation/native";
import { Overlay } from 'react-native-elements';

const Carrito3 = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { total, items } = route.params;

  const handleButtonClickCarrito4 = () => {
    navigation.navigate("Carrito4", { total: total, items: items });
  };

  const [visible, setVisible] = useState(false);
  const [direccion, setDireccion] = useState('');

  const toggleOverlay = () => {
    setVisible(!visible);
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
          style={styles.forgot}
          onPress={toggleOverlay}>Agregar una nueva dirección
        </Text>

        <Overlay style={styles.overlay} isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text style={styles.textoDireccion}>Agregar una nueva dirección</Text>
          <TextInput
            placeholder="Nueva dirección..."
            placeholderTextColor="black"
            style={styles.input}
            value={direccion}
            onChangeText={(texto) => setDireccion(texto)}
          />
          <Button
            title="Guardar cambios"
            color="#97319E"
            onPress={toggleOverlay}
          />
        </Overlay>

        <TouchableOpacity style={styles.addButton} onPress={handleButtonClickCarrito4}>
          <Text style={styles.textaddButton}>Continuar</Text>
        </TouchableOpacity>
        
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
  overlay: {
    backgroundColor: "#fff",
    height: 160,
    width: 335,
    marginTop: 15,
    alignItems: "center",
  },
  textoDireccion: {
    alignSelf: "flex-start",
    color: "#000",
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "DMSans-Medium",
  },
  input: {
    height: 38,
    width: 276,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderColor: "#97319E",
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 12,
    fontFamily: 'BalsamiqSans-Regular',
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
  addButton: {
    width: 335,
    height: 51,
    borderRadius: 20,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 375,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
  },
});

export default Carrito3;
