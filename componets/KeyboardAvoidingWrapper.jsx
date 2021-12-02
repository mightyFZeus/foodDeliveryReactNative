import React from 'react'
import { KeyboardAvoidingView, Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import COLORS from '../utils/colors';
const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLORS.white,  }}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper

const styles = StyleSheet.create({})
