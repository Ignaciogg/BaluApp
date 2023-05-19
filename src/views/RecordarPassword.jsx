import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 190,
    marginBottom: 15,
    alignSelf: "center",
    maxWidth: 184,
    height: 126,
  },
  input: {
    marginTop: 12,
    height: 44,
    width: 276,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderRadius: 10,
    fontSize: 12,
    fontFamily: 'BalsamiqSans-Regular',
  },
  addButton: {
    width: 192,
    height: 49,
    borderRadius: 20,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
  },
});
  
const Registro = () => {

  const [correo, setUsuario] = useState('');

  const navigation = useNavigation();

  const handleButtonClickHome = () => {
    navigation.navigate("Navbar");
  };

  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

      <View style={{ margin: 20, alignItems: "center" }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
        <TextInput
          placeholder="CORREO ELECTRÓNICO"
          placeholderTextColor="black"
          style={styles.input}
          value={correo}
          onChangeText={(texto) => setUsuario(texto)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleButtonClickHome}>
          <Text style={styles.textaddButton}>Recordar Contraseña</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
    
  );
};

export default Registro;
