import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

{/* Função default do pacote */}
export default () =>  {
    return <Text style={Estilo.fontG}>#Component Oficial</Text>
}

export function Comp1() {
    return <Text style={Estilo.fontG}>#Component 01</Text>
}

export function Comp2 () {
    return <Text style={Estilo.fontG}>#Component 02</Text>
}