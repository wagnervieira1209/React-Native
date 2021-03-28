import React from 'react'
import {Platform, Text} from 'react-native'
import Estilo from './Estilo'

export default _ => {    
        if (Platform.OS == 'android') {
            return <Text style={Estilo.fontG}>ANDROID</Text>
        } else if (Platform.OS == 'android') {
            return <Text style={Estilo.fontG}>iOS</Text>
        } else {
            return <Text style={Estilo.fontG}>EITA!</Text>
        }    
    }
