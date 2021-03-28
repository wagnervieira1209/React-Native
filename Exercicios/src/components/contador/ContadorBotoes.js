import React from 'react'
import {Button, StyleSheet, View} from 'react-native'

export default props => {
    return (
        <>
            <View style={style.AlignBotoes}>
                <Button style={style.SpaceButton} title=' - ' onPress={props.dec} />
                <Button style={style.SpaceButton} title=' + ' onPress={props.inc} />
            </View>
        </>
        )
    }

    const style = StyleSheet.create({
        AlignBotoes: {
            flexDirection: 'row'
        },
        SpaceButton: {
            padding: 10,
            fontSize: 50 
        }
    })