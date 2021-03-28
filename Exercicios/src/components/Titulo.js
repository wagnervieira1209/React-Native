import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import Estilo from './Estilo'

export default (props) => (
    <React.Fragment>
        <Text style={Estilo.fontG}>{props.titulo}</Text>
        <Text>{props.subtitulo}</Text>
    </React.Fragment>
)