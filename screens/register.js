import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Separator, Button, AuthTextInput, PwdInput } from "../components";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    color: "#fa2525",
    fontSize: 35,
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    color: "#fa2525",
    fontSize: 15,
  },
  form: {
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontFamily: "Inter_400Regular",
    color: "#fa2525",
    fontSize: 16,
  },
  footerLink: {
    fontFamily: "Inter_600SemiBold",
    color: "#fa2525",
    fontSize: 16,
    marginLeft: 4,
  },
});

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create account here</Text>
      </View>
      <View style={styles.form}>
        <AuthTextInput label={"Full Name"} ph={"Enter your name"} style={styles.input} />
        <AuthTextInput label={"Email"} ph={"Enter your email"} style={styles.input} />
        <PwdInput label={"Password"} style={styles.input} />
        <PwdInput label={"Retype Password"} style={styles.input} />
      </View>
      <View style={styles.footer}>
        <Button left={false} text={"Register"} />
        <Separator h={15} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.footerText}>Already have account?</Text>
          <Text style={styles.footerLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;