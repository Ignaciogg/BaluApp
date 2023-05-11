import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/views/Home";
import Login from "./src/views/Login";
import Perfil from "./src/views/Perfil";

const styles = StyleSheet.create({
  
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <NavigationContainer>
        
        <Tab.Navigator options={{}}>
            <Tab.Screen name="Home" component={Home} options={{
            headerTitle: "",
            headerTransparent: true,
          }} />
            <Tab.Screen name="Carrito" component={Login} options={{
            headerTitle: "",
            headerTransparent: true,
          }} />
            <Tab.Screen name="Perfil" component={Perfil} options={{
            headerTitle: "",
            headerTransparent: true,
          }} />
        </Tab.Navigator>
          
      </NavigationContainer>

  );
}