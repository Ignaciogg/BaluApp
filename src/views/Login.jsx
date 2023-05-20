import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

import usuarios from '../usuarios.json/';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  imagecenter: {
    marginTop: 180,
    alignSelf: "center",
    maxWidth: 184,
    height: 126,
  },
  input1: {
    marginTop: 30,
    height: 38,
    width: 276,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderRadius: 10,
    fontSize: 12,
    fontFamily: 'BalsamiqSans-Regular',
  },
  input2: {
    height: 38,
    width: 276,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderRadius: 10,
    fontSize: 12,
    fontFamily: 'BalsamiqSans-Regular',
  },
  forgot: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    textDecorationLine: "underline",
    marginTop: 5,
    marginBottom: 15,
  },
  registro: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
    textDecorationLine: "underline",
    marginLeft: 135,
  },
  addButton: {
    width: 178,
    height: 42,
    borderRadius: 20,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 14,
    fontFamily: 'DMSans-Bold',
  },
});
  
const Login = () => {

  const [correo, setUsuario] = useState('');
  const [password, setUsuario2] = useState('');

  const navigation = useNavigation();

  const handleButtonClickHome = () => {
    const usuarioEncontrado = usuarios.usuarios.find(
      (usuario) => usuario.correo === correo && usuario.password === password
    );
  
    if (usuarioEncontrado) {
      navigation.navigate("Navbar", { usuarioEncontrado: usuarioEncontrado });
    } else {
      console.log("Nombre de usuario o contraseña incorrectos");
    }
  };

  const handleButtonClickRegistro = () => {
    navigation.navigate("Registro");
  };

  const handleButtonClickRecordar = () => {
    navigation.navigate("RecordarPassword");
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
          style={styles.input1}
          value={correo}
          onChangeText={(texto1) => setUsuario(texto1)}
        />
        <TextInput
          placeholder="CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input2}
          value={password}
          onChangeText={(texto2) => setUsuario2(texto2)}
          secureTextEntry={true}
        />
        <Text style={styles.forgot} onPress={handleButtonClickRecordar}>¿Ha olvidado su contraseña?
        </Text>

        <TouchableOpacity style={styles.addButton} onPress={handleButtonClickHome}>
          <Text style={styles.textaddButton}>ACCEDER</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleButtonClickRegistro}>
          <Text style={styles.registro}>REGISTRARME</Text>
      </TouchableOpacity>

    </ImageBackground>
    
  );
};

export default Login;
