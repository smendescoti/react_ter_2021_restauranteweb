import React from 'react';
import Home from './Home';
import CadastroCliente from './CadastroCliente';
import FaleConosco from './FaleConosco';
import { Switch, Route } from 'react-router-dom';

//construindo como um função
const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro-cliente" component={CadastroCliente} />
            <Route exact path="/fale-conosco" component={FaleConosco} />
        </Switch>
    </div>
)

export default Main;