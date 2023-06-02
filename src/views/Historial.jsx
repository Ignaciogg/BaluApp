import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity
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
  imagecenter: {
    marginTop: 0,
    alignSelf: "center",
    maxWidth: 300,
    height: 80,
    aspectRatio: 1.45
  },
});
const Historial = () => {
    const route = useRoute();
    const { usuarioEncontrado } = route.params;
    const navigation = useNavigation();
  
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={styles.backgroundImage}
      ><Image
      style={styles.imagecenter}
      source={require("../../assets/logoBalu.png")}
    />
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Text style={[styles.titulo]}>HISTORIAL DE PEDIDOS</Text>
        </View>
      </ImageBackground>
    );
  };
  
  export default Historial;
  