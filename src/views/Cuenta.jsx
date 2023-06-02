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
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontSize: 15,
    color: "#fff",
    alignSelf: 'stretch',
    fontFamily: 'DMSans-Regular'
  },
  textInput: {
    backgroundColor: "#EEB1FF",
    borderRadius: 8,
    paddingLeft: 20,
    height: 40,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 30,
    color: '#000',
    alignSelf: 'stretch',
    fontWeight: "bold",
  },
  botonGuardar: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#fff'
  }
});

const Cuenta = () => {
  const route = useRoute();
  const { usuarioEncontrado } = route.params;
  const navigation = useNavigation();

  const handleButtonClickGuardar = () => {
    navigation.navigate("Perfil");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={{  flexDirection: "column", height: "100%", alignItems: "center" }}>
        <Text style={[styles.titulo]}>MI CUENTA</Text>

        <View style={{alignItems: "center", alignContent: 'stretch', marginTop: 90, paddingTop: 60, padding: 40, backgroundColor: 'rgba(255,255,255,0.2)', width: '100%', height: '100%'}}>
        <Image
            style={[{aspectRatio:1, resizeMode:'contain', position: 'absolute', top: -60, width: 120, height: 120, overflow: 'hidden'}]}
            source={require("../../assets/AlvaroFarreny.png")}
          />

          <Text style={[styles.label]}>Nombre</Text>
          <TextInput
            value={usuarioEncontrado.nombre}
            style={styles.textInput}/>
          <Text style={[styles.label]}>Correo</Text>
          <TextInput
            value={usuarioEncontrado.correo}
            style={styles.textInput}/>
          <Text style={[styles.label]}>Número de teléfono</Text>
          <TextInput
            value={usuarioEncontrado.telefono}
            style={styles.textInput}/>
          <Text style={[styles.label]}>Contraseña</Text>
          <TextInput
            value={usuarioEncontrado.password}
            style={styles.textInput}
            secureTextEntry={true}/>


<View
            style={{
              flex: 1,
              height: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              style={[{ alignItems: "center" }, , { flex: 1 }]}
              onPress={handleButtonClickGuardar}
            >
              <Text
                style={[
                  styles.botonGuardar,
                  {
                    marginBottom: 5,
                    marginTop: 5,
                    padding: 10,
                    paddingLeft: 60,
                    paddingRight: 60,
                    borderRadius: 50,
                    position: "absolute",
                    top: 40,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                ]}
              >
                Guardar cambios
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cuenta;
