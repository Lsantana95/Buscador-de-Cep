// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios'

// Cria uma instância do axios com uma configuração base
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" // Define a URL base para as requisições
})

// Exporta a instância configurada como padrão para ser utilizada em outros arquivos
export default api
