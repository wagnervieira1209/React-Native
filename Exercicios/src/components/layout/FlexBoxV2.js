import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        // FLEX CONTAINER
        <SafeAreaView style={style.FlexV2}>a
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
    FlexV2: {
        flexGrow: 1,
        width: "100%",
        alignItems: "flex-end", // alinhamento eixo secundário
        justifyContent: "space-evenly", //espaçamento eixo principal
        backgroundColor: "#000"
    }
})