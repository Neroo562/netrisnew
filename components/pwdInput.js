import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const PwdInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ width: "95%" }}>
      <Text style={{ color: "#F78D8D", fontFamily: "Inter_400Regular" }}>
        {props.label}
      </Text>
      <TextInput
        secureTextEntry={!showPassword}
        placeholder="Enter your password"
        right={
          <TextInput.Icon
            color={"#F78D8D"}
            onPress={togglePasswordVisibility}
            icon={showPassword ? "eye-off" : "eye"}
          />
        }
        mode="outlined"
        value={props.value}
        onChangeText={props.onChangeText}
        outlineColor="#F78D8D"
        style={{ borderRadius: 20 }}
        theme={{
          roundness: 10,
          colors: {
            primary: "#F78D8D",
            text: "black",
            placeholder: "gray",
            background: "#ffffff",
          },
        }}
      />
    </View>
  );
};

export default PwdInput;
