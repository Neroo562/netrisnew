import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

const TambalBanDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRatingCompleted = (rating) => {
    setRating(rating);
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    navigation.navigate("Nerby");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.nama}</Text>
      <Text style={styles.detail}>{item.tipe}</Text>
      <Text style={styles.detail}>{item.alamat}</Text>

      <TextInput
        label="Feedback"
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
        mode="outlined"
        multiline
        style={styles.input}
      />

      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad", "OK", "Good", "Great"]}
        defaultRating={rating}
        size={30}
        onFinishRating={handleRatingCompleted}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Terimakasih sudah memberi feedback dan rating untuk tambal ban ini
          </Text>
          <Button mode="contained" onPress={handleClose} style={styles.closeButton}>
            Close
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    width: "100%",
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 10,
  },
});

export default TambalBanDetail;