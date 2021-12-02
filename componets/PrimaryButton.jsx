import React from 'react'
import { StyleSheet, Pressable, Text, View } from 'react-native'
import COLORS from '../utils/colors';

const PrimaryButton = ({text, onPress,  }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.onBoardBtn}>
                <Text style={styles.text}> {text}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton

const styles = StyleSheet.create({
    onBoardBtn: {
        backgroundColor: COLORS.purple,
        marginHorizontal: 20,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 30,
    },
    text: {
        color: COLORS.white,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
});
