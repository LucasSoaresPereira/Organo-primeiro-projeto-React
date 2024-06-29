import Personagem from '../Personagem/';
import './Time.css';

const Time = (props) => {
    const fundoCard = { backgroundColor: props.corPrimaria }
    const corCard = { backgroundColor: props.corSecundaria }
    return(
       (props.personagens.length > 0) ? 
        <section className='time' style={fundoCard}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            
            <div className='personagens'>
            {props.personagens.map( 
                personagem => 
                    <Personagem
                        key={personagem.nome} 
                        nome={personagem.nome} 
                        arma={personagem.arma}
                        imagem={personagem.imagem}
                        estilo={corCard}
                    /> )}
            </div>
        </section>
        : ''
    )
}

export default Time