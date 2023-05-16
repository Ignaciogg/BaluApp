import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/views/Login";
import Navbar from "./src/components/Navbar";
import Registro from "./src/views/Registro";
import SummerBowl from "./src/views/SummerBowl";

export default function App() {
  const Stack = createStackNavigator();

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
