import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import TipoArma from '../ListaSuspensa/TipoArma.js';
import './Formulario.css';

const Formulario = (props) => {
    

    const tiposArma = [
        'Lâmina Larga',
        'Espada',
        'Manopla',
        'Retificador',
        'Pistolas'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPersonagemCadastrado({
            nome,
            arma,
            imagem,
            elemento
        })
        setNome('')
        setImagem('')
        setElemento('')
        setArma('')
    }

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [elemento, setElemento] = useState('');
    const [arma, setArma] = useState('')

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos de cadastro dos personagens do Wuthering Waves</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome do Personagem" 
                    placeholder="Digite o nome do Personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TipoArma 
                    obrigatorio={true} 
                    label="Tipo de Arma" 
                    itens={tiposArma}
                    valor={arma}
                    aoAlterado={valor => setArma(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o URL da imagem do Personagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Elemento" 
                    itens={props.elementos}
                    valor={elemento}
                    aoAlterado={valor => setElemento(valor)}
                />
                <Botao>
                    Cadastrar Personagem
                </Botao>
            </form>
        </section>
    )
}

export default Formulario