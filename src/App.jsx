import { FiSearch } from "react-icons/fi";
import "./styles.css";
import { useState } from "react";
import api from "./services/api";

function App() {
  // Define dois estados utilizando o hook useState
  const [input, setInput] = useState(""); // Estado para armazenar o valor do input
  const [cep, setCep] = useState([]); // Estado para armazenar os dados do CEP

  // Função assíncrona para lidar com a busca do CEP
  async function handleSearch() {
    // Verifica se o campo de input está vazio
    if (input === "") {
      alert("Por favor, digite um CEP para buscar");
      return;
    }

    try {
      // Realiza uma requisição à API usando o valor do input como parâmetro
      const response = await api.get(`${input}/json`);
      // Atualiza o estado 'cep' com os dados obtidos da API
      setCep(response.data);
      // Limpa o campo de input
      setInput("");
    } catch {
      // Trata erros na busca do CEP
      alert("Erro na busca do CEP.");
      // Limpa o campo de input em caso de erro
      setInput("");
    }
  }

  // Retorna a estrutura JSX do componente
  return (
    <>
      {/* Container principal */}
      <div className="container">
        {/* Título do aplicativo */}
        <h1 className="title">Buscador de CEP</h1>

        {/* Container para input e botão de busca */}
        <div className="container-input">
          {/* Input para inserir o CEP */}
          <input
            type="text"
            placeholder="Digite o CEP aqui..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* Botão de busca que aciona a função handleSearch */}
          <button className="ButtonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#020202" />
          </button>
        </div>

        {/* Exibe informações do CEP apenas se houver dados */}
        {Object.keys(cep).length > 0 && (
          <main className="container-main">
            {/* Exibe os detalhes do CEP obtidos da API */}
            <h2>CEP: {cep.cep}</h2>
            <span>Logradouro: {cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>
              {cep.localidade} {cep.uf}
            </span>
          </main>
        )}
      </div>
    </>
  );
}

export default App;
