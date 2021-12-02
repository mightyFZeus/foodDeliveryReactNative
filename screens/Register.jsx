import React, {useState} from 'react'
import { StyleSheet, Text, Pressable, Image, View, TextInput, Alert, ActivityIndicator } from 'react-native'
import COLORS from '../utils/colors'
import KeyboardAvoidingWrapper from '../componets/KeyboardAvoidingWrapper'
import PrimaryButton from '../componets/PrimaryButton'
import PrimaryInput from '../componets/PrimaryInput'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import { Formik } from "formik"
import * as Yup from "yup"
import { NavigationContainer } from '@react-navigation/native'


const images = [
    require("../assets/google.png"),
    require("../assets/facebook.png"),
];

const Register = ({navigation}) => {
   
    const [error, setError] = useState("")
    const [loading, setloading] = useState(true)

  
    return (
        <KeyboardAvoidingWrapper>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View style={{ marginTop: 60 }}>
                    <Text style={styles.login}>Sign In</Text>
                    <Text style={styles.access}>Access account</Text>
                </View>
                <View style={styles.logoContainer}>
                    {images.map((item, index) => (
                        <View key={index} style={styles.logoView}>
                            <Image source={item} />
                        </View>
                    ))}
                </View>

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()

                            .min(5)
                            .required("This field is required"),
                        email: Yup.string().required("This field is required"),
                        password: Yup.string()
                            .required("this field is required")
                            .matches(
                                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                            ),
                        confirmPassword: Yup.string()
                            .required("Please confirm your password")
                            .oneOf(
                                [Yup.ref("password"), null],
                                "Passwords don't match."
                            ),
                    })}
                    onSubmit={(values, actions) => {
                        if (values.password !== values.confirmPassword) {
                            return setError("password does not match");
                        }
                        firebase
                            .auth()
                            .createUserWithEmailAndPassword(
                                values.email,
                                values.password
                            )
                            .then((userCredential) => {
                                console.log("yes, it work");
                                Alert.alert(
                                    "YAAAAAAAAAAy!!!",
                                    "Registration successful",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () =>
                                                navigation.navigate(
                                                    "home",
                                                    values
                                                ),
                                        },
                                    ]
                                );
                            })
                            .catch((error) => {
                                console.log(error);
                                console.log("error");
                                // ..
                            });
                    }}
                >
                    {(props) => (
                        <View style={{ justifyContent: "center" }}>
                            <PrimaryInput
                                text="Name"
                                placeholder="Enter name"
                                onChangeText={props.handleChange("name")}
                                value={props.values.name}
                                onBlur={props.handleBlur("name")}
                            />
                            <Text style={styles.error}>
                                {props.touched.name && props.errors.name}
                            </Text>
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
                            <PrimaryInput
                                text="Confirm Password"
                                placeholder="Confirm password"
                                onChangeText={props.handleChange(
                                    "confirmPassword"
                                )}
                                value={props.values.confirmPassword}
                                onBlur={props.handleBlur("confirmPassword")}
                                secureTextEntry={true}
                            />
                            <Text style={styles.error}>
                                {props.touched.confirmPassword &&
                                    props.errors.confirmPassword}
                            </Text>
                            <View style={{ marginBottom: 60 }}>
                                <PrimaryButton
                                    text="Sign Up"
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </KeyboardAvoidingWrapper>
    );
}

export default Register

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: COLORS.extraLight,
        height: 60,
        justifyContent: "center",
        borderRadius: 10,
        paddingLeft: 20,
    },
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
    error: {
        color: "crimson",
        marginLeft: 25,
        marginTop:4
       
      
      
        
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
});
