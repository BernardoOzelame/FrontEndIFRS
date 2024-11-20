import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import ModalNovoItem from "./ModalNovoItem";
import Header from "../Header";
import "./cardapio.css";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";

const NovoCardapio = () => {
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
    {
      id: 11,
      nome: "Feijão",
      calorias: 389.0,
      grupo: "Grãos",
    },
  ];

  const diasDaSemana = [
    { abreviatura: "Seg", nome: "Segunda-Feira" },
    { abreviatura: "ter", nome: "Terça-feira" },
    { abreviatura: "qua", nome: "Quarta-feira" },
    { abreviatura: "qui", nome: "Quinta-feira" },
    { abreviatura: "sex", nome: "Sexta-feira" },
    { abreviatura: "sab", nome: "Sábado" },
    { abreviatura: "dom", nome: "Domingo" },
  ];

  const refeicoes = [{ nome: "Almoço" }, { nome: "Jantar" }];

  return (
    <>
      <Header />
      <section className="cardapio-container mt-4">
        <ModalNovoItem show={showModal} hide={() => setShowModal(false)} />
        <form action="">
          <aside>
            <div className="d-flex gap-2 justify-content-between">
              <input
                type="text"
                placeholder="Buscar item"
                className="search-input"
              />
              {/* <BiSearch /> */}
              <Button
                variant="success"
                onClick={() => setShowModal(true)}
                // className="rounded-circle d-flex justify-content-center align-items-center"
              >
                Novo item
                {/* <HiOutlinePlusCircle className="h4 h-fit p-0" /> */}
              </Button>
            </div>

            <div id="items-sidebar">
              {itens.map((item) => (
                <div className="sidebar-item" key={item.id}>
                  <label htmlFor={`${item.id}-sidebar`} className="fw-medium">
                    {item.nome}
                  </label>
                  <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                    <p className="caloria-text">{item.calorias} cal</p>
                    <Form.Check
                      type="checkbox"
                      name={item.nome}
                      id={`${item.id}-sidebar`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <div>
            <h1 className="fw-bold w-fit mx-auto">Novo Cardápio</h1>

            <div>
              <h3 className="h5 my-3">Itens</h3>
              <div className="items-container overflow-y-auto">
                {itens.map((item) => (
                  <div className="item-input-field" key={item.id}>
                    <label htmlFor={item.id}>{item.nome}</label>
                    <Form.Check
                        type="checkbox"
                        name={item.nome}
                        id={item.id}
                      />
                  </div>
                ))}
              </div>
              <div className="my-6">
                <h3 className="h5 my-3">Tipo de refeição</h3>
                <Form.Select name="tipo_refeicao" id="tipo_refeicao" className="w-50">
                  <option value="-1">Selecione uma refeição</option>
                  {refeicoes.map((refeicao, index) => (
                    <option value={refeicao.nome} key={index}>
                      {refeicao.nome}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div>
                <h3 className="h5 my-3">Dias da semana</h3>
                <div className="dias-da-semana-items-container">
                  {diasDaSemana.map((dia, index) => (
                    <div className="dia-da-semana" key={index}>
                      <label htmlFor={dia.abreviatura}>{dia.abreviatura}</label>
                      <span className="sr-only">{dia.nome}</span>
                      <Form.Check
                        type="checkbox"
                        name={dia.abreviatura}
                        id={dia.abreviatura}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="success" className="my-4 mx-auto flex">
                Adicionar
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default NovoCardapio;
