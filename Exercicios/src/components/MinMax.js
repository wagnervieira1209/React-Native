import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

//nome do parâmetro por convenção "props" 
export default (props) => {
    console.warn(props);
    return (<Text style={Estilo.fontG}>
        O valor {props.max} é maior que o valor {props.min}
    </Text>)
}
