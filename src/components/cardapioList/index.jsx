import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Card, ListGroup, Spinner, Alert } from "react-bootstrap";
import apiService from "../../services/api";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CardapioList = () => {
  const api = apiService();
  const [expandedCardapioId, setExpandedCardapioId] = useState(null);

  // Hook para buscar todos os cardápios
  const {
    data: cardapios,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["get-cardapios"],
    queryFn: async () => {
      const response = await api.get("/cardapios");
      return response.data;
    },
  });

  // Função para alternar a exibição dos itens de um cardápio específico
  const toggleCardapio = (id) => {
    setExpandedCardapioId((prevId) => (prevId === id ? null : id));
  };

  // Função para buscar os detalhes do nutricionista
  const fetchNutricionista = async (nutricionistaId) => {
    const response = await api.get(`/nutricionistas/${nutricionistaId}`);
    return response.data;
  };

  // Função para buscar os itens do cardápio
  const fetchCardapioItens = async (cardapioId) => {
    const response = await api.get(`/cardapio_itens?cardapioId=${cardapioId}`);
    return response.data;
  };

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Carregando cardápios...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger">
        Erro ao carregar os cardápios: {error.message}
      </Alert>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Lista de Cardápios</h2>
      {cardapios.length === 0 ? (
        <p className="text-center text-muted">Nenhum cardápio encontrado.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {cardapios.map((cardapio) => {
            const {
              data: nutricionista,
              isLoading: isLoadingNutricionista,
              isError: isErrorNutricionista,
            } = useQuery({
              queryKey: ["get-nutricionista", cardapio.nutricionistaId],
              queryFn: () => fetchNutricionista(cardapio.nutricionistaId),
            });

            const {
              data: cardapioItens,
              isLoading: isLoadingItens,
              isError: isErrorItens,
            } = useQuery({
              queryKey: ["get-cardapio-itens", cardapio.id],
              queryFn: () => fetchCardapioItens(cardapio.id),
              enabled: expandedCardapioId === cardapio.id, // Só busca os itens se o cardápio estiver expandido
            });

            return (
              <Card key={cardapio.id}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">Cardápio #{cardapio.id}</h5>
                    <small className="text-muted">
                      Data: {cardapio.data} | Tipo de Refeição:{" "}
                      {cardapio.tipoRefeicao}
                    </small>
                  </div>
                  <Button
                    variant="light"
                    onClick={() => toggleCardapio(cardapio.id)}
                    aria-expanded={expandedCardapioId === cardapio.id}
                  >
                    {expandedCardapioId === cardapio.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </Button>
                </Card.Header>
                {expandedCardapioId === cardapio.id && (
                  <Card.Body>
                    {isLoadingNutricionista ? (
                      <Spinner animation="border" size="sm" />
                    ) : isErrorNutricionista ? (
                      <Alert variant="danger">
                        Erro ao carregar nutricionista.
                      </Alert>
                    ) : (
                      <Card.Text>
                        <strong>Nutricionista:</strong> {nutricionista.nome}{" "}
                        <br />
                        <strong>Email:</strong> {nutricionista.email} <br />
                        <strong>Telefone:</strong> {nutricionista.telefone}
                      </Card.Text>
                    )}
                    <h6>Itens do Cardápio:</h6>
                    {isLoadingItens ? (
                      <Spinner animation="border" size="sm" />
                    ) : isErrorItens ? (
                      <Alert variant="danger">
                        Erro ao carregar itens do cardápio.
                      </Alert>
                    ) : cardapioItens.length === 0 ? (
                      <p>Nenhum item encontrado para este cardápio.</p>
                    ) : (
                      <ListGroup>
                        {cardapioItens.map((item) => (
                          <ListGroup.Item key={item.id}>
                            <strong>Nome:</strong> {item.nome} <br />
                            <strong>Calorias:</strong> {item.calorias} kcal{" "}
                            <br />
                            <strong>Grupo:</strong> {item.grupo}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                  </Card.Body>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardapioList;
