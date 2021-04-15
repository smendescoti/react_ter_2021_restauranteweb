import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import FormCliente from './FormCliente';
import * as services from '../../services/restauranteService';

class FormClienteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mensagem_sucesso: '',
            mensagem_erro: ''
        }
    }

    //função para executar o SUBMIT do formulário..
    handleSubmit = (values) => {

        this.setState({
            mensagem_sucesso: '',
            mensagem_erro : ''
        })

        services.postCliente(values)
            .then( //promisse de sucesso
                data => {
                    this.setState({
                        mensagem_sucesso: data.message
                    })
                }
            )
            .catch( //promisse de falha
                e => {
                    this.setState({
                        mensagem_erro: e.response.data.message
                    });
                }
            );

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Row>
                <Card>
                    <Row>
                        <h4>Cadastro de Cliente</h4>

                        {
                            this.state.mensagem_sucesso ?
                                <div className="card-panel green lighten-2 white-text">
                                    <strong>{this.state.mensagem_sucesso}</strong>
                                </div>
                                : <div></div>
                        }

                        {
                            this.state.mensagem_erro ?
                                <div className="card-panel red lighten-2 white-text">
                                    <strong>{this.state.mensagem_erro}</strong>
                                </div>
                                : <div></div>
                        }

                        <br />

                        <FormCliente
                            onSubmit={this.handleSubmit}
                        />
                    </Row>
                </Card>
            </Row>
        )
    }

}

export default FormClienteContainer;