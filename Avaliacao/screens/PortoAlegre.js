import React, { useState } from "react";
import * as Speech from "expo-speech";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",

    imageUri:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/brazil/porto-alegre/porto-alegre-big-banner-1920x600.jpg",

    titulo: "Porto Alegre",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    populacao: "1.409.351",
    imageUri:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/77000/77780-Porto-Alegre-And-Vicinity.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
  },
  {
    id: "4ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    pib: "R$ 70 bilhões",
    imageUri:
      "https://investidorsardinha.r7.com/wp-content/uploads/2020/08/como-o-dinheiro-e-feito-e-como-identificar-nota-falsa-1024x576.jpg",
  },
];

const PortoAlegreApp = () => {
  const [selectedId, setSelectedId] = useState(null);

  const total = (item) => {
    if (item.id == "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba") {
      Speech.speak("Porto Alegre");
    } else if (item.id == "3ac68afc-c605-48d3-a4f8-fbd91aa97f63") {
      Speech.speak("População de um milhão quatrocentos e nove mil");
    } else {
      Speech.speak("Pib de setenta bilhões ");
    }
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={meuestilo.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },

            meuestilo.title,
          ]}
          onPress={() => {
            total(item);
          }}
        >
          <View>
            <Image
              source={{ uri: item.imageUri }}
              style={meuestilo.itemImage}
            />
            <Text style={meuestilo.id}> Id: {item.id} </Text>
            <Text style={meuestilo.title}> Nome: {item.titulo} </Text>
            <Text style={meuestilo.title}> População: {item.populacao} </Text>
            <Text style={meuestilo.title}> Pib: {item.pib} </Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={meuestilo.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -30.0529948,
          longitude: -51.3146065,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -30.0529948,
            longitude: -51.3146065,
          }}
          title={"Titulo do Marcador"}
          description={"Aqui vai mais informação"}
        ></Marker>
      </MapView>
      <FlatList
        data={DATA}
        renderItem={renderItemNovo}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  itemImage: {
    width: 64,
    height: 64,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "#eee",
    borderRadius: 40,
    elevation: 2,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "50%",
  },
});

export default PortoAlegreApp;
