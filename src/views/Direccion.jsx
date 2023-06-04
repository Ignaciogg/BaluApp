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
import MapView, { Marker } from 'react-native-maps';

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
  imageMap: {
    height: 470,
    width: 348,
  },
  border: {
    borderRadius: 8,
  }
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

        <View style={styles.border}>
          <MapView
            style={styles.imageMap}
            initialRegion={{
              latitude: 40.409274231926084,
              longitude: -3.8945728730929705,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker
                coordinate={{
                  latitude: 40.409274231926084,
                  longitude: -3.8945728730929705,
                }}
                title={"Dirección"}
                description={'Av. Infante Don Luis, 3, 28660 Boadilla del Monte'}
            />
          </MapView>
        </View>
        
      </View>
    </ImageBackground>
  );
};

export default Direccion;
