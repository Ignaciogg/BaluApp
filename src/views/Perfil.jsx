import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const styles = StyleSheet.create({
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
});

const Perfil = () => {
  return (
    <View style={{ margin: 20 }}>

        <Text>PERFIL</Text>

        <Text>Álvaro Farreny Boixader</Text>
      
        <Text>Mi cuenta</Text>
        <Text>Dirección</Text>
        <Text>Historial de pedidos</Text>

        <Button>Cerrar sesión</Button>
      
    </View>
  );
};

export default Perfil;
