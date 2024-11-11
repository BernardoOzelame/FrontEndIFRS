import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="divLogoHeader">
                <img src="./../../public/ifrs_branco_completo.png" alt="Logo IFRS" className="logoHeader" />
            </div>
            <div className="autenticacao">
                <p>Você não está autenticado.</p>
            </div>
        </header>
    );
}

export default Header;