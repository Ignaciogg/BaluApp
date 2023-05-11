/*import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Perfil from "../views/Perfil";
import Home from "../views/Home";

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

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Carrito" component={Home} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navbar;
*/