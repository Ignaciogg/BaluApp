import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  strong: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 16,
  },
  strong2: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 24,
    fontSize: 16,
  },
  imagecenter: {
    marginTop: 110,
    alignSelf: "center",
    maxWidth: 184,
    height: 126,
  },
  input1: {
    marginTop: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderRadius: 10,
    fontSize: 15,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderRadius: 10,
    fontSize: 15,
  },
  forgot: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 72,
    marginTop: 5,
  },
  registro: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "underline",
    marginLeft: 135,
  },
  btn: {
    marginTop: 5,
    width: 178,
    height: 38,
    fontWeight: "bold",
    borderRadius: 10,
  },
});
  
const Registro = () => {

  const [nombre, setUsuario] = useState('');
  const [password, setUsuario2] = useState('');

  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

      <View style={{ margin: 20 }}>
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
          placeholder="CORREO ELECTRÓNICO"
          placeholderTextColor="black"
          style={styles.input2}
          value={password}
          onChangeText={(texto2) => setUsuario2(texto2)}
        />
        <TextInput
          placeholder="NÚMERO DE TELÉFONO"
          placeholderTextColor="black"
          style={styles.input2}
          value={password}
          onChangeText={(texto2) => setUsuario2(texto2)}
        />
        <TextInput
          placeholder="CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input2}
          value={password}
          onChangeText={(texto2) => setUsuario2(texto2)}
        />
        <TextInput
          placeholder="REPETIR CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input2}
          value={password}
          onChangeText={(texto2) => setUsuario2(texto2)}
        />

        <Button
          title="REGISTRARME"
          color="#97319E"
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <Text 
        style={styles.registro}>LOGIN
      </Text>

    </ImageBackground>
    
  );
};

export default Registro;
