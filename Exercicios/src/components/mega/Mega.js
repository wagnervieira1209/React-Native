import React, { Component } from 'react'
import {Button, Text, TextInput, View } from 'react-native'
import Estilo from '../Estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros || 0,
        numeros: []
    }

    // Sempretem que ser arrowFunction, não pode ser function() por causa do "this"
    alterarQtdeNumeros = (qtd) => {
        this.setState({qtdNumeros: +qtd}) // o "+" na frente transforma em número
        
    }

    gerarNumeroNaoContido = nums => {
        const novoNum = parseInt(Math.random() * 60 + 1) // número random até 60
        return nums.includes(novoNum) ? this.gerarNumeroNaoContido(nums) : novoNum
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a - b) // ordena de forma crescente
        this.setState({ numeros })
    }


    /*gerarNumeros = () => {
        const { qtdNumeros } = this.state
        const numeros = []

        for (let i = 0; i < qtdNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a,b) => a - b)
        this.setState( { numeros } )
    }*/

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(n => {
            return <MegaNumero key={n} num={n} />
        })
    }
    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder={'Qtd de Números'}
                    onChangeText={this.alterarQtdeNumeros}
                    value={`${this.state.qtdNumeros}`}
                />
                <Button 
                    title='Gerar Jogo'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 30,
                    flexDirection: 'row', // ordenar em linha
                    flexWrap: 'wrap', // não passar tamanho da tela
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }

}