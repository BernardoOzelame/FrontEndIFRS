import { useState } from "react";
import "./cardapio.css";
import ModalNovoItem from "./ModalNovoItem";
import Header from "../Header";

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const NovoCardapio = () => {
  const [tela, setTela] = useState("");
  const [showModal, setShowModal] = useState(false);
  const itens = [
    {
      id: 1,
      nome: "Maçã",
      calorias: 52.0,
      grupo: "Frutas",
    },
    {
      id: 2,
      nome: "Banana",
      calorias: 96.0,
      grupo: "Frutas",
    },
    {
      id: 3,
      nome: "Peito de Frango",
      calorias: 165.0,
      grupo: "Proteínas",
    },
    {
      id: 4,
      nome: "Arroz Integral",
      calorias: 123.0,
      grupo: "Grãos",
    },
    {
      id: 5,
      nome: "Brócolis",
      calorias: 34.0,
      grupo: "Vegetais",
    },
    {
      id: 6,
      nome: "Batata Doce",
      calorias: 86.0,
      grupo: "Vegetais",
    },
    {
      id: 7,
      nome: "Queijo Cottage",
      calorias: 98.0,
      grupo: "Laticínios",
    },
    {
      id: 8,
      nome: "Ovo Cozido",
      calorias: 155.0,
      grupo: "Proteínas",
    },
    {
      id: 9,
      nome: "Salmão",
      calorias: 208.0,
      grupo: "Proteínas",
    },
    {
      id: 10,
      nome: "Aveia",
      calorias: 389.0,
      grupo: "Grãos",
    },
  ];

  return (
    <>
      <Header />
      <section>
        <ModalNovoItem show={showModal} hide={() => setShowModal(false)} />
        <form action="">
          <aside>
            <div>
              <Form.Control
                placeholder="Buscar item"
                className="search-input"
              />
              <Button style={{marginLeft: '10px'}} variant="success" type="button" onClick={() => setShowModal(true)}>
              Adicionar item
              </Button>
            </div>

            <div style={{width: "fit-content"}}>
              <div className="sidebar-item">
                <label htmlFor="arroz">Arroz</label>
                <Form.Check
                  type="checkbox" name="arroz" id="arroz"
                />
              </div>
              <div className="sidebar-item">
                <label htmlFor="feijao">Feijão</label>
                <Form.Check
                  type="checkbox" name="feijao" id="feijao"
                />
              </div>
              <div className="sidebar-item">
                <label htmlFor="batata">Batata</label>
                <Form.Check
                  type="checkbox" name="batata" id="batata"
                />
              </div>
              <div className="sidebar-item">
                <label htmlFor="maionese">maionese</label>
                <Form.Check
                  type="checkbox" name="maionese" id="maionese"
                />
              </div>
            </div>
          </aside>
          <div>
            <h1>Novo Cardápio</h1>

            <div>
              <h3>Itens</h3>
              <div className="items-container">
                <div className="item-input-field">
                  <label htmlFor="arroz">Arroz</label>
                  <Form.Check
                    type="checkbox" name="arroz" id="arroz"
                  />
                </div>
                <div className="item-input-field">
                  <label htmlFor="feijao">Feijão</label>
                  <Form.Check
                    type="checkbox" name="feijao" id="feijao"
                  />
                </div>
                <div className="item-input-field">
                  <label htmlFor="batata">Batata</label>
                  <Form.Check
                    type="checkbox" name="batata" id="batata"
                  />
                </div>
                <div className="item-input-field">
                  <label htmlFor="maionese">maionese</label>
                  <Form.Check
                    type="checkbox" name="maionese" id="maionese"
                  />
                </div>
              </div>
              <div>
                <h3>Tipo de refeição</h3>
                <Form.Select name="tipo_refeicao" id="tipo_refeicao">
                  <option value="-1">Selecione uma refeição</option>
                </Form.Select>
              </div>

              <div>
                <h3>Dias da semana</h3>
                <div className="dias-da-semana-items-container">
                  <div className="dia-da-semana">
                    <label htmlFor="segundaFeira">Seg</label>
                    <span className="sr-only">Segunda-Feira</span>
                    <Form.Check
                      type="checkbox" name="segundaFeira" id="segundaFeira"
                    />
                  </div>
                  <div className="dia-da-semana">
                    <label htmlFor="tercaFeira">ter</label>
                    <span className="sr-only">Terça-feira</span>
                    <Form.Check
                      type="checkbox" name="tercaFeira" id="tercaFeira"
                    />                  
                  </div>
                  <div className="dia-da-semana">
                    <label htmlFor="quartaFeira">qua</label>
                    <span className="sr-only">Quarta-feira</span>
                    <Form.Check
                      type="checkbox" name="quartaFeira" id="quartaFeira"
                    />                   
                  </div>
                  <div className="dia-da-semana">
                    <label htmlFor="quintaFeira">qui</label>
                    <span className="sr-only">Quinta-feira</span>
                    <Form.Check
                      type="checkbox" name="quintaFeira" id="quintaFeira"
                    /> 
                  </div>
                  <div className="dia-da-semana">
                    <label htmlFor="sextaFeira">sex</label>
                    <span className="sr-only">Sexta-feira</span>
                    <Form.Check
                      type="checkbox" name="sextaFeira" id="sextaFeira"
                    />                   
                  </div>
                  <div className="dia-da-semana">
                    <label htmlFor="sabado">sab</label>
                    <span className="sr-only">Sábado</span>
                    <Form.Check
                      type="checkbox" name="sabado" id="sabado"
                    />
                  </div>
                  <div className="dia-da-semana">
                    <label htmlFor="domingo">dom</label>
                    <span className="sr-only">Doming</span>
                    <Form.Check
                      type="checkbox" name="domingo" id="domingo"
                    />
                  </div>
                </div>
              </div>

              <Button variant="success" type="button">
              Adicionar item
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default NovoCardapio;
