import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

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
  btn: {
    marginTop: 5,
    width: 178,
    height: 38,
    fontWeight: "bold",
    fontFamily: 'DMSans-Regular',
    borderRadius: 10,
  },
});
  
const Login = () => {

  const [nombre, setUsuario] = useState('');
  const [password, setUsuario2] = useState('');

  const navigation = useNavigation();

  const handleButtonClickHome = () => {
    navigation.navigate("Registro");
  };

  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

      <View style={{ margin: 20, alignItems: "center" }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
        <TextInput
          placeholder="NOMBRE DE USUARIO"
          placeholderTextColor="black"
          style={styles.input1}
          value={nombre}
          onChangeText={(texto1) => setUsuario(texto1)}
        />
        <TextInput
          placeholder="CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input2}
          value={password}
          onChangeText={(texto2) => setUsuario2(texto2)}
        />
        <Text 
          style={styles.forgot}>¿Ha olvidado su contraseña?
        </Text>

        <Button
          title="Acceder"
          color="#97319E"
          style={styles.btn}
          onPress={() => navigation.navigate('Navbar')}
        />
      </View>

      <TouchableOpacity onPress={handleButtonClickHome}>
          <Text style={styles.registro}>REGISTRARME</Text>
      </TouchableOpacity>

    </ImageBackground>
    
  );
};

export default Login;
