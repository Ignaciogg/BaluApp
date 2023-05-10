import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

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

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>Carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
