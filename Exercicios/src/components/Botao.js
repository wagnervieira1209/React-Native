import React from 'react'
import { Button } from 'react-native'

export default props => {
    function Executar() {
        console.warn('Executou! #01');
    }

    const Executar2 = () => {
        console.warn('Executou! #02');
    }

    return (
        <>
            <Button title="Executar #01!" onPress={Executar} />
            <Button title="Executar #02!" onPress={Executar2} />
            <Button title="Executar #03!" onPress={function () { console.warn("Executar #03")}} />
            <Button title="Executar #04!" onPress={() => console.warn("Executar #04")} />
        </>
    )
}