import React from 'react'; //importando namespace
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

//declarando o componente
class Header extends React.Component{

  //função para renderizar e exibir o conteudo HTML do componente
  render(){
    return(
        <Row>
            <Navbar className="deep-orange darken-4">
                <li><NavLink to="/">Página inicial</NavLink></li>
                <li><NavLink to="/cadastro-cliente">Crie sua Conta de Cliente</NavLink></li>
                <li><NavLink to="/fale-conosco">Fale Conosco</NavLink></li>
            </Navbar>
        </Row>
    )
  }
}

//definindo o componente como publico..
export default Header;