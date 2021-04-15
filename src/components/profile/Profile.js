import React from 'react'; //importando namespace
import { Row, Card } from 'react-materialize';
import * as services from '../../services/restauranteService';

//declarando o componente
class Profile extends React.Component{

  //construtor da classe
  constructor(props) {
      super(props);

      //declarando os atributos (dados) do componente..
      this.state = { nome : '', foto : '', descricao : '' };

  }

  //função executada sempre antes do componente ser renderizado
  componentDidMount(){
    //executando o serviço da API..
    services.getRestaurante()
        .then( //retorno de sucesso da API
            data => {                
                this.setState({ ...data });
            }
        ) 
        .catch( //retorno de erro da API
            e => {
                console.log(e);
            }
        ); 
  }

  //função para renderizar e exibir o conteudo HTML do componente
  render(){
    return(
        <Card>
            <Row>
                <img 
                    src={services.getApiUrl() + this.state.foto}
                    className="responsive-img"                
                />
            </Row>
            <Row>
                {this.state.nome}
            </Row>
            <Row>
                {this.state.descricao}
            </Row>
        </Card>
    )
  }
}

//definindo o componente como publico..
export default Profile;