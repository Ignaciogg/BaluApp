import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../views/Home";
import Carrito from "../views/Carrito";
import Perfil from "../views/Perfil";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icono:{
    marginTop: 5,
  },
});

const Navbar = () => {

  return ( 
        <Tab.Navigator options={{}}>
            <Tab.Screen name="Home" component={Home} options={{
            headerTitle: "",
            headerTransparent: true,
            tabBarActiveTintColor: "#4D0053",
            tabBarInactiveTintColor: "#97319E",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} style={styles.icono} />
            ),
          }} />
            <Tab.Screen name="Carrito" component={Carrito} options={{
            headerTitle: "",
            headerTransparent: true,
            tabBarActiveTintColor: "#4D0053",
            tabBarInactiveTintColor: "#97319E",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={35} style={styles.icono} />
            ),
          }} />
            <Tab.Screen name="Perfil" component={Perfil} options={{
            headerTitle: "",
            headerTransparent: true,
            tabBarActiveTintColor: "#4D0053",
            tabBarInactiveTintColor: "#97319E",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={35} style={styles.icono} />
            ),
          }} />
        </Tab.Navigator>
          

  );
};

export default Navbar;