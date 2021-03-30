import React from 'react'
import { View } from 'react-native'

export default props => {
    return (
        <View style={{
            backgroundColor: props.cor || '#000',
            width: props.lado || 50,
            height: props.lado || 50
        }}>
        </View>
        )
    }
