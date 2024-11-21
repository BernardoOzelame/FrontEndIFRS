import Header from '../Header'
import "./PgInicial.css"; 

import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const PgInicialAdm = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className='containerAdm'>
                <div className='containerCardapioAdm'>
                    <img className='imgAlunaAdm' src="./../../public/alunaRefeitorio.jpeg" alt="Aluna no refeitório" />
                    <div>
                        <h1 className='tituloCardapioInicialAdm'>O novo cardápio da semana já está disponível!</h1>
                        <p className='textosCardapioInicialAdm'>Estamos sempre pensando em você e na sua experiência aqui no refeitório! Por isso, preparamos um cardápio fresquinho e superespecial para esta semana, repleto de novidades e sabores incríveis que vão agradar a todos os paladares.</p>
                        <p  className='textosCardapioInicialAdm'>Acesse agora para conferir todas as opções que preparamos especialmente para você. Uma seleção variada de pratos deliciosos e nutritivos te espera, com opções que atendem a todos os gostos.</p>
                        <Button variant="success" className='btnVerCardapioAdm' onClick={() => alert("Clicou no botão para ver o cardápio!")}>
                            Ver cardápio
                        </Button>
                    </div>
                </div>

                <div className='containersAddAlunoECardapio'>
                    <div className='containerAddAluno'>
                        <img className='imgAlunaAdm' src="./../../public/figuraAluna.png" />
                        <div>
                            <Button variant="success" className='btnAddAluno' onClick={() => alert("Clicou no botão para adicionar um aluno!")}>
                                Adicionar Aluno
                            </Button>
                        </div>
                    </div>

                    <div className='containerAddCardapio'>
                        {/* <img className='imgAlunaAdm' src="./../../public/alunaRefeitorio.jpeg" alt="Aluna no refeitório" /> */}
                        <div>
                            <Button variant="success" className='btnAddCardapio' onClick={() => navigate('/adicionarCardapio')}>
                                Adicionar cardápio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PgInicialAdm;