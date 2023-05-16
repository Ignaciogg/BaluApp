import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font'; 

import Login from "./src/views/Login";
import Navbar from "./src/components/Navbar";
import Registro from "./src/views/Registro";
import SummerBowl from "./src/views/SummerBowl";

export default function App() {
  const Stack = createStackNavigator();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if(!fontsLoaded){
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
      'DMSans-Medium': require('./assets/fonts/DMSans-Medium.ttf'),
      'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),

      'BalsamiqSans-Bold': require('./assets/fonts/BalsamiqSans-Bold.ttf'),
      'BalsamiqSans-Regular': require('./assets/fonts/BalsamiqSans-Regular.ttf'),
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Navbar"
          options={{ headerShown: false }}
          component={Navbar}
        />
        <Stack.Screen
          name="Registro"
          options={{ headerShown: false }}
          component={Registro}
        />
        <Stack.Screen
          name="SummerBowl"
          options={{ headerShown: false }}
          component={SummerBowl}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
