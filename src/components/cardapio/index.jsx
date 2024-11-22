import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ModalNovoItem from "./ModalNovoItem";
import Header from "../Header";
import "./cardapio.css";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";

const NovoCardapio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para o valor da busca

  const itens = [
    // Frutas
    { id: 1, nome: "Maçã", calorias: 52.0, grupo: "Frutas" },
    { id: 2, nome: "Banana", calorias: 96.0, grupo: "Frutas" },
    { id: 3, nome: "Laranja", calorias: 43.0, grupo: "Frutas" },
    { id: 4, nome: "Manga", calorias: 60.0, grupo: "Frutas" },
    { id: 5, nome: "Uva", calorias: 69.0, grupo: "Frutas" },
    { id: 6, nome: "Morango", calorias: 32.0, grupo: "Frutas" },
    { id: 7, nome: "Abacaxi", calorias: 50.0, grupo: "Frutas" },
    { id: 8, nome: "Pera", calorias: 57.0, grupo: "Frutas" },
    { id: 9, nome: "Melancia", calorias: 30.0, grupo: "Frutas" },
    { id: 10, nome: "Kiwi", calorias: 61.0, grupo: "Frutas" },
  
    // Proteínas
    { id: 11, nome: "Peito de Frango", calorias: 165.0, grupo: "Proteínas" },
    { id: 12, nome: "Carne Vermelha", calorias: 250.0, grupo: "Proteínas" },
    { id: 13, nome: "Salmão", calorias: 208.0, grupo: "Proteínas" },
    { id: 14, nome: "Ovo Cozido", calorias: 155.0, grupo: "Proteínas" },
    { id: 15, nome: "Tofu", calorias: 76.0, grupo: "Proteínas" },
    { id: 16, nome: "Atum enlatado", calorias: 116.0, grupo: "Proteínas" },
    { id: 17, nome: "Queijo Cottage", calorias: 98.0, grupo: "Proteínas" },
    { id: 18, nome: "Feijão Preto", calorias: 132.0, grupo: "Proteínas" },
    { id: 19, nome: "Lentilha", calorias: 116.0, grupo: "Proteínas" },
    { id: 20, nome: "Grão-de-bico", calorias: 164.0, grupo: "Proteínas" },
  
    // Grãos
    { id: 21, nome: "Arroz Integral", calorias: 123.0, grupo: "Grãos" },
    { id: 22, nome: "Arroz Branco", calorias: 130.0, grupo: "Grãos" },
    { id: 23, nome: "Aveia", calorias: 389.0, grupo: "Grãos" },
    { id: 24, nome: "Quinoa", calorias: 120.0, grupo: "Grãos" },
    { id: 25, nome: "Trigo", calorias: 340.0, grupo: "Grãos" },
    { id: 26, nome: "Cevada", calorias: 354.0, grupo: "Grãos" },
    { id: 27, nome: "Pão Integral", calorias: 69.0, grupo: "Grãos" },
    { id: 28, nome: "Pipoca sem óleo", calorias: 387.0, grupo: "Grãos" },
    { id: 29, nome: "Farro", calorias: 170.0, grupo: "Grãos" },
    { id: 30, nome: "Feijão", calorias: 347.0, grupo: "Grãos" },
  
    // Vegetais
    { id: 31, nome: "Brócolis", calorias: 34.0, grupo: "Vegetais" },
    { id: 32, nome: "Cenoura", calorias: 41.0, grupo: "Vegetais" },
    { id: 33, nome: "Abobrinha", calorias: 17.0, grupo: "Vegetais" },
    { id: 34, nome: "Espinafre", calorias: 23.0, grupo: "Vegetais" },
    { id: 35, nome: "Alface", calorias: 15.0, grupo: "Vegetais" },
    { id: 36, nome: "Batata Doce", calorias: 86.0, grupo: "Vegetais" },
    { id: 37, nome: "Couve-flor", calorias: 25.0, grupo: "Vegetais" },
    { id: 38, nome: "Pimentão", calorias: 31.0, grupo: "Vegetais" },
    { id: 39, nome: "Pepino", calorias: 16.0, grupo: "Vegetais" },
    { id: 40, nome: "Tomate", calorias: 18.0, grupo: "Vegetais" },
  
    // Laticínios
    { id: 41, nome: "Leite Desnatado", calorias: 42.0, grupo: "Laticínios" },
    { id: 42, nome: "Leite Integral", calorias: 64.0, grupo: "Laticínios" },
    { id: 43, nome: "Queijo Mussarela", calorias: 280.0, grupo: "Laticínios" },
    { id: 44, nome: "Queijo Parmesão", calorias: 431.0, grupo: "Laticínios" },
    { id: 45, nome: "Iogurte Natural", calorias: 59.0, grupo: "Laticínios" },
    { id: 46, nome: "Iogurte Grego", calorias: 59.0, grupo: "Laticínios" },
    { id: 47, nome: "Ricota", calorias: 174.0, grupo: "Laticínios" },
    { id: 48, nome: "Requeijão Light", calorias: 85.0, grupo: "Laticínios" },
    { id: 49, nome: "Leite de Amêndoas", calorias: 17.0, grupo: "Laticínios" },
    { id: 50, nome: "Manteiga", calorias: 717.0, grupo: "Laticínios" },
  ];
  

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelected) => {
      let updatedSelected;
      if (prevSelected.find((selected) => selected.id === item.id)) {
        // Remove o item se ele já estiver selecionado
        updatedSelected = prevSelected.filter(
          (selected) => selected.id !== item.id
        );
      } else {
        // Adiciona o item se ele não estiver na lista
        updatedSelected = [...prevSelected, item];
      }

      // Ordena os itens em ordem alfabética pelo nome
      return updatedSelected.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((item) => item.id !== itemId)
    );
  };

  // Função para filtrar itens com base na busca
  const filteredItems = itens.filter((item) =>
    item.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <section className="cardapio-container mt-4">
        <ModalNovoItem show={showModal} hide={() => setShowModal(false)} />
        <form action="">
          <aside>
            <div className="d-flex gap-2 justify-content-between">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Buscar item"
                  className="search-input"
                  value={searchQuery} // Vinculando ao estado de busca
                  onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado ao digitar
                />
                <MdOutlineSearch className="search-icon" />
              </div>
              <Button variant="success" onClick={() => setShowModal(true)}>
                Novo item
              </Button>
            </div>

            <div id="items-sidebar">
              {filteredItems.length > 0 ? (
                filteredItems
                .sort((a, b) => a.nome.localeCompare(b.nome))
                .map((item) => (
                  <div className="sidebar-item" key={item.id}>
                    <label htmlFor={`${item.id}-sidebar`} className="fw-medium">
                      {item.nome}
                    </label>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                      <p className="caloria-text">{item.calorias} kcal</p>
                      <Form.Check
                        type="checkbox"
                        name={item.nome}
                        id={`${item.id}-sidebar`}
                        onChange={() => handleCheckboxChange(item)}
                        checked={selectedItems.some(
                          (selected) => selected.id === item.id
                        )}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: "#BDBABB" }}>
                  Nenhum item encontrado.
                </p>
              )}
            </div>
          </aside>
          <div>
            <h1 className="fw-bold w-fit mx-auto tituloNovoCardapio">
              Novo Cardápio
            </h1>

            <div>
              <h3 className="h5 my-3">Itens</h3>
              <div className="items-container overflow-y-auto">
                {selectedItems.length === 0 ? (
                  <p style={{ fontSize: "20px", color: "#BDBABB" }}>Nenhum item selecionado.</p>
                ) : (
                  selectedItems.map((item) => (
                    <div className="item-input-field" key={item.id}>
                      <label htmlFor={item.id}>{item.nome} </label>
                      <span style={{ fontSize: "12px", color: "#BDBABB" }}>
                        {item.calorias} kcal
                      </span>
                      <FaTrash
                        style={{
                          color: "rgba(237, 66, 69, 0.8",
                          cursor: "pointer",
                        }}
                        title="Remover item"
                        onClick={() => handleRemoveItem(item.id)}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="my-6">
              <h3 className="h5 my-3">Tipo de refeição</h3>
              <Form.Select
                name="tipo_refeicao"
                id="tipo_refeicao"
                className="w-50"
              >
                <option value="-1">Selecione uma refeição</option>
                {["Almoço", "Jantar"].map((refeicao, index) => (
                  <option value={refeicao} key={index}>
                    {refeicao}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div>
              <h3 className="h5 my-3">Dias da semana</h3>
              <div className="dias-da-semana-items-container">
                {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map(
                  (dia, index) => (
                    <div className="dia-da-semana" key={index}>
                      <label htmlFor={dia}>{dia}</label>
                      <Form.Check type="checkbox" name={dia} id={dia} />
                    </div>
                  )
                )}
              </div>
            </div>
            <Button variant="success" className="my-4 mx-auto flex">
              Adicionar cardápio
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NovoCardapio;
