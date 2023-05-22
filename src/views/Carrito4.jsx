import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker, Polyline } from 'react-native-maps';

const Carrito4 = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { total, items } = route.params;

  const envio = 3.00;
  const nuevoTotal = parseFloat(total) + envio;

  const handleButtonClickCarrito5 = () => {
    navigation.navigate("Carrito5");
  };

  const markers = [
    {
      title: 'Tu ubicación',
      description: 'Calle Tajo, 28008 Villaviciosa de Odón',
      coordinate: {
        latitude: 40.3709550139036,
        longitude: -3.9187452760461396,
      },
    },
    {
      title: 'Balú',
      description: 'Av. Infante Don Luis, 3, 28660 Boadilla del Monte',
      coordinate: {
        latitude: 40.409274231926084,
        longitude: -3.8945728730929705,
      },
    },
  ];

  const polylineCoordinates = [
    markers[0].coordinate,
    markers[1].coordinate,
  ];

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={{ margin: 20, alignItems: "center" }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
        <Text style={styles.textoCarrito}>Resumen de tu pedido</Text>

        <MapView
          style={styles.imageMap}
          initialRegion={{
            latitude: 40.393281711326885,
            longitude: -3.913540732302478,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06,
          }}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
           ))}

          <Polyline
            coordinates={polylineCoordinates}
            strokeWidth={4}
            strokeColor="red"
          />
        </MapView>

        <View style={styles.rectangulo}>
          {items.map((item, index) => (
            <View style={styles.fila} key={index}>
              <Text style={styles.textColumn}>{item.count}x</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <Text style={styles.textColumn}>{item.price}</Text>
            </View>
          ))}
          <View style={styles.linea}></View>
          <View style={styles.fila}>
            <Text style={styles.subtotal}>Subtotal</Text>
            <Text style={styles.textColumn}>{total}€</Text>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.fila}>
            <Text style={styles.subtotal}>Envío</Text>
            <Text style={styles.textColumn}> {envio.toFixed(2)}€</Text>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.fila}>
            <Text style={styles.subtotal}>Total</Text>
            <Text style={styles.textColumn}>{nuevoTotal.toFixed(2)}€</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleButtonClickCarrito5}>
          <Text style={styles.textaddButton}>Finalizar pedido</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
    width: 116,
    height: 80,
  },
  imageMap: {
    height: 200,
    width: 331,
    marginVertical: 10,
  },
  textoCarrito: {
    alignSelf: "flex-start",
    color: "#fff",
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 23,
    fontFamily: "DMSans-Bold",
  },
  rectangulo: {
    backgroundColor: "#fff",
    height: 272,
    width: 321,
    borderRadius: 13,
    marginTop: 15,
    opacity: 0.95,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  textContainer: {
    flex: 4,
    marginLeft: 15,
  },
  text: {
    fontFamily: "DMSans-Medium",
    fontSize: 14,
    color: "black",
  },
  textColumn: {
    flex: 1,
    fontFamily: "DMSans-Medium",
    fontSize: 14,
  },
  text2: {
    fontFamily: "DMSans-Medium",
    fontSize: 10,
    color: "#8E0099",
  },
  textColumn2: {
    flex: 1,
    fontFamily: "DMSans-Medium",
    fontSize: 10,
    color: "#8E0099",
  },
  fila: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  subtotal: {
    flex: 4.6,
  },
  linea: {
    borderBottomColor: "#8E0099",
    borderBottomWidth: 1,
    width: 321,
  },
  detalles: {
    alignSelf: "flex-start",
    color: "#fff",
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
    marginTop: 10,
    marginLeft: 20,
  },
  addButton: {
    width: 335,
    height: 51,
    borderRadius: 20,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
  },
});

export default Carrito4;
