import { Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import usuarios from '../usuarios.json';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 90,
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
  forgot: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 72,
    marginTop: 5,
    fontFamily: 'DMSans-Regular',
  },
  addButton: {
    width: 178,
    height: 42,
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
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telf, setTelf] = useState('');
  const [password, setPassword] = useState('');
  const [repetir, setRepetir] = useState('');

  const navigation = useNavigation();

  const handleRegistro = () => {
    const correoExistente = usuarios.usuarios.find((usuario) => usuario.correo === correo);
    if (correoExistente) {
      console.log('El correo electrónico ya está en uso');
      return;
    }

    if (password !== repetir) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    const nuevoUsuario = {
      id: usuarios.usuarios.length + 1,
      nombre: nombre,
      correo: correo,
      password: password,
      telefono: telf
    };

    usuarios.usuarios.push(nuevoUsuario);
    navigation.navigate("Navbar", { usuarioEncontrado: nuevoUsuario });
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
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          placeholder="CORREO ELECTRÓNICO"
          placeholderTextColor="black"
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
        />
        <TextInput
          placeholder="NÚMERO DE TELÉFONO"
          placeholderTextColor="black"
          style={styles.input}
          value={telf}
          onChangeText={setTelf}
        />
        <TextInput
          placeholder="CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="REPETIR CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input}
          value={repetir}
          onChangeText={setRepetir}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleRegistro}>
          <Text style={styles.textaddButton}>REGISTRARME</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Registro;
