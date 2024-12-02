import { useState } from "react";
import "./Identificacao.css";

const IdentificacaoAluno = () => {
    return (
        <div className="identificacao">
            <div className="containerLogoIF">
                <img className="logoIF" src="./../../public/Logo-IFRS-cores-fundo-branco-Horizontal-removebg-preview.png" alt="" />
            </div>
            <div className="informacoesAluno">
                <div>
                    <p>João da Silva</p>
                </div>
                <div>
                    <img className="imgIdentificacao" src="./../../public/icone_identificador_aluno.png" alt="" />
                </div>
                <div>
                    <p>123456789</p>
                    <p>Técnico em Informática</p>
                </div>
                <div>
                    <img className="imgIdentificacao" src="./../../public/qrcodeExemplo.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default IdentificacaoAluno;
