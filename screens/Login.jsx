import React,{useState} from "react";
import {
    StyleSheet,
    Pressable,
    Image,
    Text,
    View,
    TextInput,
} from "react-native";
import COLORS from "../utils/colors";
import KeyboardAvoidingWrapper from "../componets/KeyboardAvoidingWrapper";
import PrimaryButton from "../componets/PrimaryButton";
import PrimaryInput from "../componets/PrimaryInput";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Formik } from "formik";
import * as Yup from "yup";

const images = [
    require("../assets/google.png"),
    require("../assets/facebook.png"),
];

const Login = ({ navigation }) => {
    const [error, setError] = useState("");

    return (
        <KeyboardAvoidingWrapper>
            <View>
                <View style={{ marginTop: 60 }}>
                    <Text style={styles.login}>Login</Text>
                    <Text style={styles.access}>Access account</Text>
                </View>
                <View style={styles.logoContainer}>
                    {images.map((item, index) => (
                        <View key={index} style={styles.logoView}>
                            <Image source={item} />
                        </View>
                    ))}
                </View>
                <Text
                    style={{
                        color: COLORS.light,
                        marginTop: 30,
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "600",
                    }}
                >
                    or login with email
                </Text>
                {/* <PrimaryInput text="Email" placeholder="Enter email" />
                    <PrimaryInput text="Password" placeholder="Enter password" /> */}
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().required("This field is required"),
                        password: Yup.string()
                            .required("this field is required")
                            .matches(
                                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                            ),
                    })}
                    onSubmit={(values, actions) => {
                        firebase
                            .auth()
                            .signInWithEmailAndPassword(
                                values.email,
                                values.password
                            )
                            .then(() => {
                                navigation.navigate("home");

                                console.log("yes, it work");
                                console.log(email, password);
                            })
                            .catch((error) => {
                                console.log(error);
                                console.log("error");
                            });
                    }}
                >
                    {(props) => (
                        <View style={{ justifyContent: "center" }}>
                            <PrimaryInput
                                text="Email"
                                placeholder="Enter email"
                                onChangeText={props.handleChange("email")}
                                value={props.values.email}
                                onBlur={props.handleBlur("email")}
                            />
                            <Text style={styles.error}>
                                {props.touched.email && props.errors.email}
                            </Text>
                            <PrimaryInput
                                text="Password"
                                placeholder="Enter password"
                                onChangeText={props.handleChange("password")}
                                value={props.values.password}
                                onBlur={props.handleBlur("password")}
                                secureTextEntry={true}
                            />
                            <Text style={styles.error}>
                                {props.touched.password &&
                                    props.errors.password}
                            </Text>

                            <View>
                                <PrimaryButton
                                    text="Sign In"
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>

                <View
                    style={{
                        marginTop: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 40,
                    }}
                >
                    <Text style={{ color: COLORS.light, fontWeight: "bold" }}>
                        Don't have an account?
                    </Text>
                    <Text
                        style={{ color: COLORS.purple, fontWeight: "bold" }}
                        onPress={() => navigation.navigate("register")}
                    >
                        Register
                    </Text>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

export default Login;

const styles = StyleSheet.create({
    login: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
    },
    access: {
        textAlign: "center",
        color: COLORS.light,
        fontSize: 15,
        marginTop: 10,
    },
    logoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
    },
    logoView: {
        backgroundColor: COLORS.extraLight,
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    error: {
        color: "crimson",
        marginLeft: 25,
        marginTop: 4,
    },
});
