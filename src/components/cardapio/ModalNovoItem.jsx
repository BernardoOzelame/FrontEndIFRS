import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalNovoItem = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar novo item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Item</Form.Label>
            <Form.Control id="itemModal" type="text" placeholder="Ex: Arroz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Calorias</Form.Label>
            <Form.Control id="caloriaModal" type="number" placeholder="Ex: 100 kcal" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={hide}>
          Fechar
        </Button>
        <Button variant="success">Adicionar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNovoItem;
