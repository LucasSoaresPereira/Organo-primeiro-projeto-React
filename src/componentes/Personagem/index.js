import './Personagem.css';

const Personagem = ({ nome, imagem, arma, estilo, corFonte }) => {
    return(
        <div className='personagem'>
            <div className='cabecalho' style={estilo}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={corFonte}>{nome}</h4>
                <h5>{arma}</h5>
            </div>
        </div>
    )
}

export default Personagem