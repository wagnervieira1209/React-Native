import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import Estilo from '../Estilo'

export default props => {

    return (
        <SafeAreaView style={style.Display}>
            <Text style={[Estilo.fontG, style.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>        
        )
    }

    const style = StyleSheet.create(
        {
            Display: {
                backgroundColor: '#FF0000',
                padding: 20,
                width: 280
            },
            DisplayText: {
                backgroundColor: '#FFF',
                fontSize: 30,
                fontWeight: 'bold'
            }
        }
    )