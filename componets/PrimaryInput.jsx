import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../utils/colors";

const PrimaryInput = ({ text, placeholder, onChangeText, value, onBlur, secureTextEntry }) => {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <Text style={{ marginTop: 20, marginBottom: 15 }}>{text}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};

export default PrimaryInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: COLORS.extraLight,
        height: 60,
        justifyContent: "center",
        borderRadius: 10,
        paddingLeft: 20,
    },
   
});
