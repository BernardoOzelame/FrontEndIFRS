import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ModalNovoItem from "./ModalNovoItem";
import Header from "../Header";
import "./cardapio.css";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import apiService from "../../services/api";

const NovoCardapio = () => {
  const api = apiService();
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para o valor da busca

  const {
    data: itens,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-items"],
    queryFn: async () => {
      const response = await api.get(`/itens`);
      return response.data;
    },
  });

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
  const filteredItems = itens
    ? itens.filter((item) =>
        item.nome.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar os itens.</p>;

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
                      <label
                        htmlFor={`${item.id}-sidebar`}
                        className="fw-medium"
                      >
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
                <p style={{ color: "#BDBABB" }}>Nenhum item encontrado.</p>
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
                  <p style={{ fontSize: "20px", color: "#BDBABB" }}>
                    Nenhum item selecionado.
                  </p>
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
