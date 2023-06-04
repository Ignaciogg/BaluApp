import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  textoPrimario: {
    color: "#fff",
    fontSize: 20,
    marginTop: 25,
    fontFamily: "DMSans-Regular",
  },
  textoCentrado: {
    textAlign: "center",
  },
  textoSecundario: {
    color: "#fff",
    marginTop: 24,
    fontSize: 15,
    textAlign: "left",
    fontFamily: "DMSans-Regular",
  },
  textoMenu: {
    marginStart: 20,
    marginEnd: 60,
    fontSize: 20,
    color: "#fff",
    fontFamily: "DMSans-Regular",
    fontWeight: "bold",
  },

  cerrarSesion: {},
  imagenoverlay: {
    aspectRatio: 1,
    overflow: "hidden",
  },
  icon: {
    backgroundColor: "#CB6CE6",
    borderRadius: 100,
    padding: 5,
  },
});

const Perfil = () => {
  const route = useRoute();
  const { usuarioEncontrado } = route.params;
  const navigation = useNavigation();

  const handleButtonClickCerrarSesion = () => {
    navigation.navigate("Login");
  };

  const handleButtonClickCuenta = () => {
    navigation.navigate("Cuenta", { usuarioEncontrado });
  };

  const handleButtonClickDireccion = () => {
    navigation.navigate("Direccion", { usuarioEncontrado });
  };

  const handleButtonClickHistorial = () => {
    navigation.navigate("Historial", { usuarioEncontrado });
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          height: "100%",
          marginTop: 70,
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={[
            styles.textoCentrado,
            styles.textoPrimario,
            { marginBottom: 20 },
          ]}
        >
          HISTORIAL DEL PERFIL
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        >
          <Image
            style={[styles.imagenoverlay, { flex: 1, marginTop: 10, marginStart: 20 }]}
            source={require("../../assets/AlvaroFarreny.png")}
          />
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingLeft: 15,
            }}
          >
            <Text style={[styles.textoPrimario, { flex: 1 }]}>
              {usuarioEncontrado.nombre}{" "}
            </Text>
            <Text style={[styles.textoSecundario, { flex: 1, marginTop: 0 }]}>
              {usuarioEncontrado.telefono}{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 6,
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={handleButtonClickCuenta}
              style={{
                flex: 1,
                height: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 40,
              }}
            >
              <MaterialCommunityIcons
                name="account"
                color="#000"
                size={25}
                style={[styles.icon]}
              />
              <Text style={[styles.textoCentrado, styles.textoMenu]}>
                Mi cuenta
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                color="#fff"
                size={50}
                style={{ position: "absolute", right: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleButtonClickDireccion}
              style={{
                flex: 1,
                height: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 40,
              }}
            >
              <MaterialCommunityIcons
                name="map-marker"
                color="#000"
                size={25}
                style={[styles.icon]}
              />
              <Text style={[styles.textoCentrado, styles.textoMenu]}>
                Dirección
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                color="#fff"
                size={50}
                style={{ position: "absolute", right: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleButtonClickHistorial}
              style={{
                flex: 1,
                height: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 40,
              }}
            >
              <MaterialCommunityIcons
                name="clipboard-text-clock"
                color="#000"
                size={25}
                style={[styles.icon]}
              />
              <Text
                style={[
                  styles.textoCentrado,
                  styles.textoMenu,
                  { marginEnd: "20%" },
                ]}
              >
                Historial de pedidos
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                color="#fff"
                size={50}
                style={{ position: "absolute", right: 15 }}
              />
            </TouchableOpacity>
          </View>

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
              onPress={handleButtonClickCerrarSesion}
            >
              <Text
                style={[
                  styles.textoCentrado,
                  styles.textoPrimario,
                  {
                    marginBottom: 5,
                    marginTop: 5,
                    padding: 10,
                    paddingLeft: 40,
                    paddingRight: 40,
                    borderRadius: 50,
                    position: "absolute",
                    top: 70,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                ]}
              >
                Cerrar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Perfil;
