import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalNovoItem = () => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar novo item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Ex: Arroz" />
                    </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger">Fechar</Button>
                    <Button variant="success">Adicionar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalNovoItem;