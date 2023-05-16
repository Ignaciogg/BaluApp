import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleButtonClickSummerBowl = () => {
    navigation.navigate("SummerBowl");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Image
            style={styles.imagecenter}
            source={require("../../assets/logoBalu.png")}
          />
          <Text style={styles.textPrincipal}>MOST POPULAR</Text>

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
          <Text style={styles.textPrincipal}>TODA LA CARTA</Text>
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
                  onPress={handleButtonClickSummerBowl}
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
                  onPress={() => {}}
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
                  onPress={() => {}}
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
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
    width: 116,
    height: 80,
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
  textPrincipal: {
    color: "#fff",
    marginTop: 24,
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
  },
  text: {
    color: "#fff",
    marginBottom: 2,
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
  },
  textprecio: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
  },
  btn: {
    borderRadius: 10,
  },
});
