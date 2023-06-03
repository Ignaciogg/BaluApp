import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
    paddingTop: 70,
  },
  titulo: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "DMSans-Regular",
  },
  imagecenter: {
    marginTop: 0,
    alignSelf: "center",
    maxWidth: 300,
    height: 80,
    aspectRatio: 1.45
  },
  textoMes: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "DMSans-Regular",
  },
  textoPedido: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "DMSans-Regular",
    flexWrap: 'nowrap',
    marginVertical: 10,
    fontWeight: 'bold'
  },
  textoEstado: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "DMSans-Regular",
    flexWrap: 'nowrap'
  },
  mes: {
    marginBottom: 30
  }
});
const Historial = () => {
    const route = useRoute();
    const { usuarioEncontrado } = route.params;
    const navigation = useNavigation();
  
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={styles.backgroundImage}
      ><Image
      style={styles.imagecenter}
      source={require("../../assets/logoBalu.png")}
    />
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Text style={[styles.titulo]}>HISTORIAL DE PEDIDOS</Text>
        </View>

        <ScrollView  style={{overflow: 'scroll', paddingHorizontal: 30, marginTop: 10}}>
            <View style={styles.mes}>
              <Text style={styles.textoMes}>MARZO 2023</Text>
              <View style={{borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>31-03-2023</Text>

                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>31-03-2023</Text>

                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>31-03-2023</Text>

                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>31-03-2023</Text>

                </View>
                </View>
                </View>
                
              </View>
            </View>
            <View style={styles.mes}>
              <Text style={styles.textoMes}>FEBRERO 2023</Text>
              <View style={{borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>15-02-2023</Text>

                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>15-02-2023</Text>

                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>15-02-2023</Text>

                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, borderColor: '#fff', borderWidth: 1, borderRadius: 5}}>
                  <Image
                    style={{ aspectRatio: 1, width: 70}}
                    source={require("../../assets/SummerBowlExpanded.png")}
                  />
                  
                <View style={{flexDirection: 'column', paddingLeft: 15, flex:1}}>
                  <Text numberOfLines={1} style={styles.textoPedido}>Summer bowl, Muscle bowl, y otros</Text>
                  
                <View style={{flexDirection: 'row', flex:1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5, color: '#34A853'}]}>Entregado</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1}]}>5 items</Text>
                    <Text style={[styles.textoEstado, {flex:1, flexGrow: 1.5}]}>15-02-2023</Text>

                </View>
                </View>
                </View>
                
              </View>
            </View>
            
        </ScrollView >
      </ImageBackground>
    );
  };
  
  export default Historial;
  