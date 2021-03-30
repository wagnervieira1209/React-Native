import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        // FLEX CONTAINER
        <SafeAreaView style={style.FlexV1}>
            {/* FLEX VIEW */}
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
            <Quadrado cor='#AA2'/>
            <Quadrado cor='#0FF'/>
            <Quadrado cor='#FFA'/>
        </SafeAreaView>
        )
    }

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-evenly", //espaçamento igualitário
        backgroundColor: "#000"
    }
})