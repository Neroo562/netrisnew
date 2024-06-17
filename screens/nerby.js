import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

const Nerby = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [chooseItem, setChooseItem] = useState(0);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      } catch (error) {
        setError("Error getting user location: " + error);
      }
    };
    fetchCurrentLocation();
  }, []); // Tambahkan array kosong sebagai dependency untuk menjalankan sekali saja

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const listTambalBan = [
    {
      id: 0,
      nama: "Tambal ban cak imin",
      tipe: "Bengkel motor",
      alamat: "Jl bareng cuma temen",
    },
    {
      id: 1,
      nama: "Tambal ban jetis kulon",
      tipe: "Bengkel motor",
      alamat: "Jl bareng cuma temen",
    },
    {
      id: 2,
      nama: "Tambal ban mas bro",
      tipe: "Bengkel motor",
      alamat: "Jl bareng cuma temen",
    },
    {
      id: 3,
      nama: "Tambal ban sis",
      tipe: "Bengkel mobil",
      alamat: "Jl bareng cuma temen",
    },
    {
      id: 4,
      nama: "Tambal ban pak dono",
      tipe: "Bengkel mobil",
      alamat: "Jl bareng cuma temen",
    },
    {
      id: 5,
      nama: "Tambal ban banjaya",
      tipe: "Bengkel motor",
      alamat: "Jl bareng cuma temen",
    },
    {
      id: 6,
      nama: "Tambal ban barokah",
      tipe: "Bengkel motor",
      alamat: "Jl bareng cuma temen",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TambalBanDetail", { item });
        }}
        style={{
          height: windowHeight * 0.22,
          width: windowWidth * 0.8,
          borderRadius: 10,
          backgroundColor: index === chooseItem ? "#DCCDE5" : "#FFFFFF",
          borderWidth: 2,
          borderColor: "#A7A7A7",
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={require("../assets/tambalBan.jpg")}
          />
        </View>
        <View style={{ flex: 1.3, paddingLeft: 10, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 16,
              color: "#5A1781",
            }}
          >
            {item.nama}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
            }}
          >
            {item.tipe}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
            }}
          >
            {item.alamat}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <MapView
          showsUserLocation={true}
          showsCompass={true}
          initialRegion={{
            latitude: -7.3385169,
            longitude: 112.719163,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
      >
        <FlatList
          data={listTambalBan}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Nerby;
