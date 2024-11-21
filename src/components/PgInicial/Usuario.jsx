import Header from '../Header'
import "./PgInicial.css"; 

import { Button } from "react-bootstrap";

const PgInicialUsuario = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='containerCardapio'>
                    <img className='imgAluna' src="./../../public/alunaRefeitorio.jpeg" alt="Aluna no refeitório" />
                    <div>
                        <h1 className='tituloCardapioInicial'>O novo cardápio da semana já está disponível!</h1>
                        <p className='textosCardapioInicial'>Estamos sempre pensando em você e na sua experiência aqui no refeitório! Por isso, preparamos um cardápio fresquinho e superespecial para esta semana, repleto de novidades e sabores incríveis que vão agradar a todos os paladares.</p>
                        <p  className='textosCardapioInicial'>Acesse agora para conferir todas as opções que preparamos especialmente para você. Uma seleção variada de pratos deliciosos e nutritivos te espera, com opções que atendem a todos os gostos.</p>
                        <Button variant="success" className='btnVerCardapio' onClick={() => alert("Clicou no botão para ver o cardápio!")}>
                            Ver cardápio
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PgInicialUsuario;