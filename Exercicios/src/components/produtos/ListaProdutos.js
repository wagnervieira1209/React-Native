import React from 'react'
import {Text} from 'react-native'
import Estilo from '../Estilo'

import produtos from './Produtos'

export default props => {

    function obterLista(){
        return produtos.map(p => {
            return <Text key={p.id}>{p.id}) O {p.nome} custa R$ {p.preco}</Text>
        })
    }

    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de Produtos
            </Text>
            
            {obterLista()}
            
        </>
        )
    }