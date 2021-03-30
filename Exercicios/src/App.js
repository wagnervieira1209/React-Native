import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import FlexBoxV4 from './components/layout/FlexBoxV4'



/*
import FlexBoxV3 from './components/layout/FlexBoxV3'
import FlexBoxV2 from './components/layout/FlexBoxV2';
import FlexBoxV1 from './components/layout/FlexBoxV1'
import Quadrado from './components/layout/Quadrado'
import DigiteSeuNome from './components/DigiteSeuNome'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import ListaProdutos from './components/produtos/ListaProdutos'
import UsuarioLogado from './components/UsuarioLogado'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import ParImpar from './components/ParImpar'
import Diferenciar from './components/Diferenciar'
import ContadorV2 from './components/contador/ContadorV2'
import Pai from './components/indireta/Pai'
import Pai from './components/direta/Pai'
import Botao from './components/Botao
import Titulo from './components/Titulo'
import Aleatorio from './components/Aleatorio';
import MinMax from './components/MinMax'
import Comp, { Comp1, Comp2 } from './components/Multi'
import Contador from './components/Contador'
import Primeiro from './components/Primeiro'
'*/ 

export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV4 />        
        {/*
        <FlexBoxV3/>
        <FlexBoxV2 />
        <FlexBoxV1 />
        <DigiteSeuNome/>
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome:'Wagner', email:'wagnervieira1209@gmail.com'}}/>
        <UsuarioLogado usuario={{nome:'Thiago'}}/>
        <UsuarioLogado usuario={{email:'douglas@gmail.com'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <Familia>
            <Membro nome='Wagner' sobrenome='Vieira'/>
            <Membro nome='Joao' sobrenome='Vieira'/>
        </Familia>
        <Familia>
            <Membro nome='Pedro' sobrenome='Silva'/>
            <Membro nome='Maria' sobrenome='Silva'/>
            <Membro nome='Gui' sobrenome='Silva'/>
            <Membro nome='Meri' sobrenome='Silva'/>
        </Familia>
        <ParImpar/>
        <Diferenciar/>
        <ContadorV2 />
        <Pai/>
        <Pai/>      
        <Contador inicial={100} passo={10} />
        <Contador />
        <Botao/>
        <Titulo titulo="Cadastro de Produto" subtitulo="Tela de cadastro de produto"></Titulo> 
        <MinMax min={3} max={20} />
        <Aleatorio Min={1} Max={999} />
        <Comp />
        <Comp1/>
        <Comp2/>
        <Primeiro />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});