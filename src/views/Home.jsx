import React from "react";
import { Text, View, StyleSheet, Image, Button, ImageBackground, ScrollView } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
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
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    width: "33.33%",
    margin: 3,
  },
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
  },
  itemTodaCarta: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  text: {
    color: "#fff",
    marginBottom: 2,
    fontSize: 16,
  },
  textprecio: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
  },
  btn: {
    borderRadius: 10,
  },
});

const Home = () => {
  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Image
            style={styles.imagecenter}
            source={require("../../assets/balu.png")}
          />
          <Text style={styles.strong}>MOST POPULAR</Text>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/bowl1.png")}
            />
            <Image
              style={styles.image}
              source={require("../../assets/bowl2.png")}
            />
            <Image
              style={styles.image}
              source={require("../../assets/bowl3.png")}
            />
          </View>
          <Text style={styles.strong2}>TODA LA CARTA</Text>
          <View>
            <View style={styles.itemTodaCarta}>
              <Image
                style={styles.image}
                source={require("../../assets/bowl1.png")}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Summer Bowl</Text>
                <Text style={styles.textprecio}>8,99€</Text>
                <Button
                  title="Añadir"
                  color="#CB6CE6"
                  containerStyle={styles.btn}
                  onPress={() => { }}
                />
              </View>
            </View>
            <View style={styles.itemTodaCarta}>
              <Image
                style={styles.image}
                source={require("../../assets/bowl1.png")}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Summer Bowl</Text>
                <Text style={styles.textprecio}>8,99€</Text>
                <Button
                  title="Añadir"
                  color="#CB6CE6"
                  containerStyle={styles.btn}
                  onPress={() => { }}
                />
              </View>
            </View>
            <View style={styles.itemTodaCarta}>
              <Image
                style={styles.image}
                source={require("../../assets/bowl1.png")}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Summer Bowl</Text>
                <Text style={styles.textprecio}>8,99€</Text>
                <Button
                  title="Añadir"
                  color="#CB6CE6"
                  containerStyle={styles.btn}
                  onPress={() => { }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
