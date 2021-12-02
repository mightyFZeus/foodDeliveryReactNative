import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation, route }) => {
    const {name} = route.params
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
