import { useState } from "react";
import "./Identificacao.css";

const IdentificacaoAluno = () => {
    return (
        <div className="identificacao">
            <div className="containerLogoIF">
                <img className="logoIF" src="./../../public/Logo-IFRS-cores-fundo-branco-Horizontal.jpg" alt="" />
            </div>
            <div className="informacoesAluno">
                <div>
                    <p>Nome: João da Silva</p>
                </div>
                <div>
                    <p>Matrícula: 123456789</p>
                </div>
            </div>
        </div>
    );
}

export default IdentificacaoAluno;
