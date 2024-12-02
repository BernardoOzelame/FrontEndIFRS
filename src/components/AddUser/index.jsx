import Header from "../Header";
import "./addUser.css";

const AddUser = () => {
    return (
        <>
            <Header />
            <div className="addUser-container">
                <div className="dropFileLocation">
                    <h4>Foto do usuário</h4>
                    <label className="fotoUser" htmlFor="fotoUser">Solte aqui!</label>
                    <input type="file" name="fotoUser" id="fotoUser" />
                </div>

                <div className="informations">
                    <h1 style={{ textAlign: 'center', color: '#41A24D' }}>Novo Usuário</h1>
                    <label htmlFor="addUser-nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        id="addUser-nome"
                        name="addUser-nome"
                        className="addUser-nome"
                    />

                    <label htmlFor="addUser-cpf">CPF</label>
                    <input
                        type="text"
                        placeholder="xxx.xxx.xxx-xx"
                        id="addUser-cpf"
                        name="addUser-cpf"
                        className="addUser-cpf"
                    />
                </div>
            </div>
        </>
    )
}

export default AddUser