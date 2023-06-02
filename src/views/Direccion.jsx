import React from "react";
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
import { useRoute, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
    paddingTop: 70,
  },
  titulo: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "DMSans-Regular",
  },
  label: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "stretch",
    fontFamily: "DMSans-Regular",
  },
  textInput: {
    backgroundColor: "#EEB1FF",
    borderRadius: 8,
    paddingLeft: 20,
    height: 40,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 30,
    color: "#000",
    alignSelf: "stretch",
    fontWeight: "900",
  },
});
const Direccion = () => {
  const route = useRoute();
  const { usuarioEncontrado } = route.params;
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          flexDirection: "column",
          height: 100,
          justifyContent: "center",
        }}
      >
        <Text style={[styles.titulo]}>DIRECCIÓN</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          alignContent: "stretch",
          marginTop: 20,
          paddingHorizontal: 40,
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={[styles.label]}>Dirección principal</Text>
        <TextInput
          value={usuarioEncontrado.direccion}
          style={styles.textInput}
        />
        <Image style={{ height: '65%', justifyContent: 'center', alignItems: 'center', paddingBottom: 50, aspectRatio: 0.71}} source={require('../../assets/mapa.png')}></Image>
      </View>
    </ImageBackground>
  );
};

export default Direccion;
