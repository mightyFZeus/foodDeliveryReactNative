import React from 'react'
import { StyleSheet, Dimensions, Image, Text, View } from 'react-native'
import COLORS from '../utils/colors';
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.7;
const imageH = imageW * 1.54;

const OnBoardImages = ({images}) => {
    return (
        <View style={styles.container}>
            <Image source={images.image} style={styles.image} />
            <View style={styles.subheaderContainer}>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                    }}
                >
                    {images.header}
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 15,
                        color: COLORS.light,
                        lineHeight: 25,
                    }}
                >
                    {images.subHeader}
                </Text>
            </View>

       
        </View>
    );
}

export default OnBoardImages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 210,
    },
    active: {
        backgroundColor:COLORS.purple 
    },
    subheaderContainer: {
        marginTop: 20,
    },
  
});
