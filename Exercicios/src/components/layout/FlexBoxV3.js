import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        // FLEX CONTAINER
        <View style={style.FlexV3}>
            {/* FLEX VIEW */}
            <Quadrado cor='#0F0' lado={20}/>
            <Quadrado cor='#00F' lado={30}/>
            <Quadrado cor='#AA2' lado={40}/>
            <Quadrado cor='#0FF' lado={50}/>
            <Quadrado cor='#FFA' lado={60}/>
        </View>
        )
    }

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row", // Muda eixo principal para linha
        width: "100%",
        alignItems: "baseline", // alinhamento eixo secundário
        justifyContent: "space-evenly", //espaçamento eixo principal
        backgroundColor: "#000"
    }
})