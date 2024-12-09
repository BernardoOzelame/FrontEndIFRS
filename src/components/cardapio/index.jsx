import { useEffect, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: itens,
    isLoading,
    isError,
    refetch,
    // staleTime: 0,
  } = useQuery({
    queryKey: ["get-items"],
    queryFn: async () => {
      const response = await api.get(`/itens`);
      return response.data;
    },
  });

  // Sincroniza os selectedItems com os itens atualizados
  useEffect(() => {
    if (itens) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((selected) =>
          itens.some((item) => item.id === selected.id)
        )
      );
    }
  }, [itens]);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelected) => {
      let updatedSelected;
      if (prevSelected.find((selected) => selected.id === item.id)) {
        updatedSelected = prevSelected.filter(
          (selected) => selected.id !== item.id
        );
      } else {
        updatedSelected = [...prevSelected, item];
      }

      return updatedSelected.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((item) => item.id !== itemId)
    );
  };

  const filteredItems = itens
    ? itens.filter((item) =>
        item.nome.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCardapioSubmit = async (e) => {
    e.preventDefault();

    try {
      // Substitua com os valores reais, como a data e o nutricionistaId
      const cardapioData = {
        data: new Date().toISOString().split("T")[0], // Data atual como exemplo
        tipoRefeicao: document.getElementById("tipo_refeicao").value,
        nutricionistaId: 1, // Substitua pelo ID correto
      };

      // Enviar o cardápio
      const response = await api.post("/cardapios", cardapioData);
      console.log(response);
      const cardapioId = response.data.cardapio.id;
      console.log(cardapioId);
      debugger;

      // Enviar os itens selecionados
      const itemIds = selectedItems.map((item) => item.id);
      console.log(itemIds);
      await api.post(`/cardapio_itens`, { cardapioId, itemIds });

      alert("Cardápio adicionado com sucesso!");
      setSelectedItems([]);
    } catch (error) {
      console.error("Erro ao adicionar cardápio:", error);
      alert("Erro ao adicionar cardápio.");
    }
  };

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar os itens.</p>;

  return (
    <>
      <Header />
      <section className="cardapio-container mt-4">
        <ModalNovoItem show={showModal} hide={() => setShowModal(false)} />
        <form onSubmit={handleCardapioSubmit}>
          <aside>
            <div className="d-flex gap-2 justify-content-between">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Buscar item"
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Seção de itens selecionados */}
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
            <Button
              variant="success"
              className="my-4 mx-auto flex"
              type="submit"
            >
              Adicionar cardápio
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NovoCardapio;
