import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

export default ({num = 0}) => {
    return (
        <Text style={Estilo.fontG}>
            O resultado é: 
            {num % 2 === 0
            ? <Text style={Estilo.fontG}>PAR</Text>
            : <Text style={Estilo.fontG}>ÍMPAR</Text>
            }
        </Text>
        )
    }
