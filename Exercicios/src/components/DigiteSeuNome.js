import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Estilo from './Estilo'

export default props => {

    const [nome, setNome] = useState('nome')

    return (        
        <View>
            <Text style={Estilo.fontG}>
                Nome alterado: {nome}
            </Text>
            <TextInput
                placeholder='Digite seu nome'
                valeu={nome}
                onChangeText={nome => setNome(nome)}
            />
            
        </View>
        )
    }
