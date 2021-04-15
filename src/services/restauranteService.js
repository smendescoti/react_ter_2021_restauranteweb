import axios from 'axios';

//função para retornar o endereço da API..
export const getApiUrl = () => {
    return "http://apirestaurante-001-site1.itempurl.com";
}

//função para consultar os dados do restaurante
export const getRestaurante = () => {
    return axios.get(getApiUrl() + "/api/restaurante")
        .then( //retornando o promisse da API
            response => { return response.data; }
        );
}

//função para consultar os dados do cardápio
export const getCardapio = () => {
    return axios.get(getApiUrl() + "/api/cardapio")
        .then( //retornando o promisse da API
            response => { return response.data; }
        );
}

//função para consultar os dados do cardápio por categoria
export const getCardapioPorCategoria = (idCategoria) => {
    return axios.get(getApiUrl() + "/api/cardapio/" + idCategoria)
        .then( //retornando o promisse da API
            response => { return response.data; }
        );
}

//função para consultar os dados de categorias
export const getCategorias = () => {
    return axios.get(getApiUrl() + "/api/categorias")
        .then( //retornando o promisse da API
            response => { return response.data; }
        );
}

//função para cadastrar um cliente na API
export const postCliente = (cliente) => {
    return axios.post(getApiUrl() + "/api/cliente", cliente)
        .then( //retornando o promisse da API
            response => { return response.data; }
        );
}
