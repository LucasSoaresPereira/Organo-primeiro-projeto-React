import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const elementos = [
    {
      nome:'Fusion',
      corPrimaria: '#F08080',
      corSecundaria: '#B22222'
    },
    {
      nome:'Glacio',
      corPrimaria: '#AFEEEE',
      corSecundaria: '#4682B4'
    },
    {
      nome:'Aero',
      corPrimaria: '#90EE90',
      corSecundaria: '#228B22'
    },
    {
      nome:'Electro',
      corPrimaria: '#DDA0DD',
      corSecundaria: '#8A2BE2'
    },
    {
      nome:'Havoc',
      corPrimaria: '#FFB6C1',
      corSecundaria: '#E06B69'
    },
    {
      nome:'Spectro',
      corPrimaria: '#F0E68C',
      corSecundaria: '#FFBA05'
    }
  ]

  const [personagens, setPersonagens] = useState([]);
  const aoNovoPersonagemCadastrado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario elementos={elementos.map(elementos => elementos.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemCadastrado(personagem)}/>
        {elementos.map(elemento =>
              <Time 
                    key={elemento.nome} 
                    nome={elemento.nome}
                    corPrimaria={elemento.corPrimaria}
                    corSecundaria={elemento.corSecundaria}
                    personagens={personagens.filter(personagem => personagem.elemento == elemento.nome)}
              />)}
      <Rodape />
    </div>
    
  )
}

export default App;
