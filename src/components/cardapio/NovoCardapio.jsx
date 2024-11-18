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

          <div>
            <div>
              <label htmlFor="">{itens.map((item) => item.nome)}</label>
              <input type="radio" name="" id="" />
            </div>
          </div>
        </aside>
        <div>
          <h1>Novo Cardápio</h1>

          <div>
            <h3>Itens</h3>
            <div>
              <h3>Tipo de refeição</h3>
              <select name="tipo_refeicao" id="tipo_refeicao">
                <option value="-1">Selecione uma refeição</option>
              </select>
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
