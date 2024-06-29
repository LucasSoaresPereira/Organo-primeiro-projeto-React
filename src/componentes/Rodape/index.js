import './Rodape.css';

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='icone do facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='icone do X'/>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='icone do instagram'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Logo Alura' />
            </section>
            <section>
                Desenvolvido Por Lucas Soares na Aula de React da Alura
            </section>
        </footer>
    )
}

export default Rodape