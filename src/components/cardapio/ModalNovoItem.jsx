import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import apiService from "../../services/api";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ModalNovoItem = ({ show, hide }) => {
  const api = apiService();

  const [nome, setNome] = useState("");
  const [calorias, setCalorias] = useState("");
  const [grupo, setGrupo] = useState(""); // Novo estado para grupo de comida
  const [message, setMessage] = useState("");

  const handleAddItem = async () => {
    try {
      const response = await api.post("itens", { nome, calorias, grupo });
      if (response.status === 200) {
        setMessage("Item adicionado com sucesso");
        setNome("");
        setCalorias("");
        setGrupo(""); // Limpar estado do grupo

        setTimeout(() => {
          hide();
          setMessage("");
        }, 1000);
      }
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      setMessage("Erro ao adicionar item");
    }
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar novo item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!message && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Item</Form.Label>
              <Form.Control
                id="itemModal"
                type="text"
                placeholder="Ex: Arroz"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Calorias</Form.Label>
              <Form.Control
                id="caloriaModal"
                type="number"
                placeholder="Ex: 100 kcal"
                value={calorias}
                onChange={(e) => setCalorias(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Grupo de Comida</Form.Label>
              <Form.Select
                value={grupo}
                onChange={(e) => setGrupo(e.target.value)}
              >
                <option value="">Selecione um grupo</option>
                <option value="grãos">Grãos</option>
                <option value="vegetais">Vegetais</option>
                <option value="frutas">Frutas</option>
                <option value="carnes">Carnes</option>
                <option value="laticínios">Laticínios</option>
              </Form.Select>
            </Form.Group>
          </Form>
        )}
        {message && (
          <div className="d-flex justify-content-center">
            <FaCheck color="green" size={40} />
            <p>{message}</p>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={hide}>
          Fechar
        </Button>
        <Button variant="success" onClick={handleAddItem}>
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNovoItem;
