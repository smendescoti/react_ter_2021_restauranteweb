import React from 'react'; //importando namespace
import { Card, Col, Row } from 'react-materialize';
import * as services from '../../services/restauranteService';

//declarando o componente
class Menu extends React.Component {

    //construtor
    constructor(props) {
        super(props);

        //definindo os atributos do componente..
        this.state = { cardapio: [], categorias: [] }; //JSON array

        //registrando todas as funções que acessam o state
        this.handleChange = this.handleChange.bind(this);
    }

    //função executada antes do componente ser renderizado
    componentDidMount() {
        this.consultarItensCardapio();
        this.consultarCategorias();
    }

    //função executada no evento onChange do campo select
    //e -> event (traz as informações do evento executado)
    handleChange(e) {
        //capturar o valor selecionado no campo
        var value = e.target.value;

        //verificar se algum valor foi selecionado
        if (value != "") {
            services.getCardapioPorCategoria(value)
                .then(
                    data => {
                        //armazenar o retorno da API no state..
                        this.setState({ cardapio: data });
                    }
                )
                .catch(
                    e => {
                        console.log(e);
                    }
                );
        }
        else {
            this.consultarItensCardapio();
        }
    }

    //função para ler os produtos do cardapio
    consultarItensCardapio() {
        services.getCardapio()
            .then(
                data => {
                    //armazenar o retorno da API no state..
                    this.setState({ cardapio: data });
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            );
    }

    //função para ler as categorias
    consultarCategorias() {
        services.getCategorias()
            .then(
                data => {
                    //armazenar o retorno da API no state..
                    this.setState({ categorias: data });
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            );
    }

    //função para renderizar e exibir o conteudo HTML do componente
    render() {
        return (
            <Card>
                <Row>
                    <Col s={6}>
                        <h4><strong>Conheça nosso cardápio</strong></h4>
                    </Col>
                    <Col s={6}>
                        <div className="input-field">
                            <select className="browser-default"
                                onChange={this.handleChange}>
                                <option value="">Todos os Produtos</option>
                                {
                                    this.state.categorias.map(
                                        function (item, i) {
                                            return (
                                                <option key={i} value={item.id}>
                                                    {item.nome}
                                                </option>
                                            )
                                        }
                                    )
                                }
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        Quantidade de itens exibidos: {this.state.cardapio.length}
                    </Col>
                </Row>
                {
                    this.state.cardapio.map(
                        function (item, i) {
                            return (
                                <Row key={i}>
                                    <Col m={2}>
                                        <img src={services.getApiUrl() + item.foto}
                                            className="responsive-img" />
                                    </Col>
                                    <Col m={10}>
                                        <h5>
                                            <strong>{item.nome}</strong>
                                            <span className="new badge deep-orange"
                                                data-badge-caption={item.categoria.nome}>
                                            </span>
                                        </h5>
                                        <p>{item.descricao}</p>
                                        <h5>{item.preco}</h5>
                                    </Col>
                                </Row>
                            )
                        }
                    )
                }
            </Card>
        )
    }
}

//definindo o componente como publico..
export default Menu;