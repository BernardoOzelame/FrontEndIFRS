import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div>
                <img src="./../../public/ifrs_branco.png" alt="" />
            </div>
            <div>
                <p>Você não está autenticado.</p>
            </div>
        </header>
    );
}

export default Header;