import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../views/Home";
import Carrito from "../views/Carrito";
import Perfil from "../views/Perfil";

const Tab = createBottomTabNavigator();

const Navbar = () => {

  return (

      <NavigationContainer>
        
        <Tab.Navigator options={{}}>
            <Tab.Screen name="Home" component={Home} options={{
            headerTitle: "",
            headerTransparent: true,
          }} />
            <Tab.Screen name="Carrito" component={Carrito} options={{
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
};

export default Navbar;