import React from 'react'; //importando namespace
import { Row, Col } from 'react-materialize';
import Header from './components/header/Header';
import Main from './pages/Main';
import Profile from './components/profile/Profile';

//declarando o componente
class App extends React.Component {

  //função para renderizar e exibir o conteudo HTML do componente
  render() {
    return (
      <Row>
        <Header />
        <Col s={3}>
          <Profile />
        </Col>
        <Col s={9}>
          <Main />
        </Col>
      </Row>
    )
  }
}

//definindo o componente como publico..
export default App;