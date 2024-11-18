import "./cardapio.css";

const NovoCardapio = () => {
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
    <section className="modal">
      <form action="">
        <aside>
          <div>
            <input
              type="text"
              placeholder="Buscar item"
              className="search-input"
            />
          </div>

          <div className="w-fit">
            <div className="sidebar-item">
              <label htmlFor="arroz">Arroz</label>
              <input type="checkbox" name="arroz" id="arroz" />
            </div>
            <div className="sidebar-item">
              <label htmlFor="feijao">Feijão</label>
              <input type="checkbox" name="feijao" id="feijao" />
            </div>
            <div className="sidebar-item">
              <label htmlFor="batata">Batata</label>
              <input type="checkbox" name="batata" id="batata" />
            </div>
            <div className="sidebar-item">
              <label htmlFor="maionese">maionese</label>
              <input type="checkbox" name="maionese" id="maionese" />
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
                <input type="checkbox" name="arroz" id="arroz" />
              </div>
              <div className="item-input-field">
                <label htmlFor="feijao">Feijão</label>
                <input type="checkbox" name="feijao" id="feijao" />
              </div>
              <div className="item-input-field">
                <label htmlFor="batata">Batata</label>
                <input type="checkbox" name="batata" id="batata" />
              </div>
              <div className="item-input-field">
                <label htmlFor="maionese">maionese</label>
                <input type="checkbox" name="maionese" id="maionese" />
              </div>
            </div>
            <div>
              <h3>Tipo de refeição</h3>
              <select name="tipo_refeicao" id="tipo_refeicao">
                <option value="-1">Selecione uma refeição</option>
              </select>
            </div>

            <div>
              <h3>Dias da semana</h3>
              <div className="items-container">
                <div className="dia-da-semana">
                  <label htmlFor="arroz">Seg</label>
                  <span className="sr-only">Segunda-Feira</span>
                  <input type="checkbox" name="arroz" id="arroz" />
                </div>
                <div className="dia-da-semana">
                  <label htmlFor="feijao">ter</label>
                  <span className="sr-only">Terça-feira</span>
                  <input type="checkbox" name="feijao" id="feijao" />
                </div>
                <div className="dia-da-semana">
                  <label htmlFor="batata">qua</label>
                  <span className="sr-only">Quarta-feira</span>
                  <input type="checkbox" name="batata" id="batata" />
                </div>
                <div className="dia-da-semana">
                  <label htmlFor="maionese">qui</label>
                  <span className="sr-only">Quinta-feira</span>
                  <input type="checkbox" name="maionese" id="maionese" />
                </div>
                <div className="dia-da-semana">
                  <label htmlFor="maionese">sex</label>
                  <span className="sr-only">Sexta-feira</span>
                  <input type="checkbox" name="maionese" id="maionese" />
                </div>
                <div className="dia-da-semana">
                  <label htmlFor="maionese">sab</label>
                  <span className="sr-only">Sábado</span>
                  <input type="checkbox" name="maionese" id="maionese" />
                </div>
                <div className="dia-da-semana">
                  <label htmlFor="maionese">dom</label>
                  <span className="sr-only">Doming</span>
                  <input type="checkbox" name="maionese" id="maionese" />
                </div>
              </div>
            </div>

            <button type="submit" className="px-4 mx-auto flex my-4">
              Adiconar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default NovoCardapio;
