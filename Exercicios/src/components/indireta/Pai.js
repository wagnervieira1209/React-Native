import React, { useState } from 'react'
import { Text} from 'react-native'
import Estilo from '../Estilo'
import Filho from './Filho'

export default props => {

    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text style={Estilo.fontG}>
                {num}
            </Text>
            <Filho 
                min={0}
                max={100}
                funcao={exibirValor} // função para ser executada no filho
            />        
        </>
        )
    }
