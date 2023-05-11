import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navbarButton: {
    borderRadius: 5,
    backgroundColor: "#97319E",
    padding: 5,
    paddingHorizontal: 10,
  },
  navbarButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Navbar = ({ navigation }) => {
  const goToPerfil = () => {
    navigation.navigate('Perfil');
  };
  return (
    <View style={styles.navbarContainer}>
      <Button style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>Home</Text>
      </Button>
      <Button style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>Carrito</Text>
      </Button>
      <Button style={styles.navbarButton}>
        <Text style={styles.navbarButtonText} onPress={goToPerfil}>Perfil</Text>
      </Button>
    </View>
  );
};

export default Navbar;
