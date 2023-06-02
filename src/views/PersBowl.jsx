import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

const PersBowl = () => {
  const data_base = ["Clásico", "Orgánico"];
  const data_frutas = ["Fresa", "Plátano", "Piña", "Mango", "Arándanos"];
  const data_toppings = ["Coco", "Granola", "Chía", "Cacao", "Canela"];
  const data_salsa = ["Miel", "Chocolate", "Caramelo", "Fresa", "Mango"];
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const navigation = useNavigation();

  const handleButtonClickHome = () => {
    navigation.navigate("Home");
  };

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const toggleItem = (ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient);

    if (isSelected) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedIngredients.includes(item);
    return (
      <TouchableOpacity onPress={() => toggleItem(item)}>
        <View
          style={[
            styles.itemContainer,
            isSelected && styles.selectedItemContainer,
          ]}
        >
          <View
            style={[styles.checkbox, isSelected && styles.checkboxSelected]}
          />
          <Text
            style={[
              styles.ingredientText,
              isSelected && styles.ingredientTextSelected,
            ]}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
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
          <Image
            style={styles.centerImage}
            source={require("../../assets/SummerBowlExpanded.png")}
          />
          <Text style={styles.textCenter}>Bowl Personalizado</Text>
          <Text style={styles.price}>6,99€*</Text>
          <View style={styles.containerIngredients}>
            <Text style={styles.textingredients}>Tamaño</Text>
            <View style={styles.containerSvg}>
              <TouchableOpacity style={styles.buttoningredients}>
                <Text style={styles.tamtext}>P</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttoningredients}>
                <Text style={styles.tamtext}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttoningredients}>
                <Text style={styles.tamtext}>G</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerIngredients}>
              <Text style={styles.textingredients}>BASE</Text>
              <FlatList
                contentContainerStyle={styles.lista}
                data={data_base}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
              />
            </View>
            <View style={styles.containerIngredients}>
              <Text style={styles.textingredients}>FRUTAS</Text>
              <FlatList
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
                data={data_frutas}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
              />
            </View>
            <View style={styles.containerIngredients}>
              <Text style={styles.textingredients}>TOPPINGS</Text>
              <FlatList
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
                data={data_toppings}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
              />
            </View>
            <View style={styles.containerIngredients}>
              <Text style={styles.textingredients}>SALSA</Text>
              <FlatList
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
                data={data_salsa}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
              />
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleButtonClickHome}
            >
              <Text style={styles.textaddButton}>Añadir al Carrito</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PersBowl;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
    width: 116,
    height: 80,
  },
  centerImage: {
    marginTop: 50,
    alignSelf: "center",
  },
  textCenter: {
    alignSelf: "center",
    color: "#fff",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "DMSans-Regular",
  },
  price: {
    alignSelf: "center",
    color: "#fff",
    marginTop: 10,
    fontSize: 20,
    fontFamily: "DMSans-Regular",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  count: {
    fontSize: 24,
    fontFamily: "DMSans-Regular",
    marginHorizontal: 20,
    color: "#fff",
  },
  buttoncounter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#CB6CE6",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "DMSans-Regular",
  },
  containerIngredients: {
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 10,
    marginRight: 30,
  },
  textingredients: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "DMSans-Regular",
    marginBottom: 5,
  },
  containerSvg: {
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttoningredients: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  addButton: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#CB6CE6",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "DMSans-Regular",
  },
  tamtext: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "DMSans-Regular",
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#CB6CE6",
    borderColor: "#CB6CE6",
  },
  ingredientText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
  },
  ingredientTextSelected: {
    color: "#CB6CE6",
  },
  lista: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatListContainer: {
    marginTop: 10,
    flexDirection: "column",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 40,
    marginBottom: 5,
  },
});
