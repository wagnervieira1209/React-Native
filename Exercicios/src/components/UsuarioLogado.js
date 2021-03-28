import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'
import If from './If'

export default props => {

    const usuario = props.usuario || {}

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.fontG}>Usuário Logado:</Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
        )
    }
