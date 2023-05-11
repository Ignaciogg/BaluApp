import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Home from "./src/views/Home";
import Navbar from "./src/components/Navbar";
import Login from "./src/views/Login";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Esto hace que el contenedor ocupe todo el espacio disponible
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Esto hace que la imagen ocupe todo el espacio disponible y se ajuste a la pantalla
  },
});

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Login />
      </View>
      <Navbar></Navbar>
    </ImageBackground>
  );
}
