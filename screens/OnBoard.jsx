import React, {useState} from "react";
import { StyleSheet, FlatList, Dimensions, Text, View, Pressable } from "react-native";
import { onBoard } from "../utils/onBoard";
import COLORS from "../utils/colors";
import OnBoardImages from "../componets/OnBoardImages";
import PrimaryButton from "../componets/PrimaryButton";



const OnBoard = ({ navigation }) => {
    
    const navigate = () => {
        navigation.navigate("login")
    }
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <View
            style={{
                flex: 1,
                paddingBottom: 60,
                backgroundColor: COLORS.white,
            }}
        >
            <FlatList
                data={onBoard}
                horizontal
                pagingEnabled
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OnBoardImages images={item} />}
                showsHorizontalScrollIndicator={false}
               
            />
            <View style={styles.indicatorContainer}>
                <View
                    style={{
                        ...styles.indicators,
                        backgroundColor: COLORS.purple,
                    }}
                ></View>
                <View style={styles.indicators}></View>
                <View style={styles.indicators}></View>
            </View>
            <PrimaryButton text="Next" onPress ={navigate} />
        </View>
    );
};

export default OnBoard;

const styles = StyleSheet.create({
  

    indicators: {
        backgroundColor: COLORS.extraLight,
        height: 15,
        width: 15,
        borderRadius: 10,
        marginRight: 5,
    },
    indicatorContainer: {
        flexDirection: "row",
        top: -50,
        justifyContent: "center",
        alignItems: "center",
    },
});
