import React from 'react'
import { Text } from 'react-native'

export default ({Min, Max}) => {
    const delta = Max - Min + 1
    const aleatorio = parseInt(Math.random() * delta) + Min
    return (<Text>Valor aleatório: {aleatorio}</Text>);
}