import React from 'react';
import { Button } from 'react-materialize';
import { reduxForm, reset, Field } from 'redux-form';
import { inputField } from '../../formControls/inputField';
import { validate } from './FormClienteValidate';

//componente criado como função e utilizado
//para desenhar o conteudo do formulario..
let FormCliente = props => {

    //função para executar o submit do formulário
    //será passada para este componente por meio de properties (props)
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} autoComplete="off">

            <Field
                name="nome"
                type="text"
                label="Nome do Cliente"
                placeholder="Ex: João Carlos"
                component={inputField}
            />

            <Field
                name="email"
                type="email"
                label="Email do Cliente"
                placeholder="Ex: joaocarlos@gmail.com"
                component={inputField}
            />

            <Field
                name="telefone"
                type="text"
                label="Telefone"
                placeholder="Ex: (21) 98765-4321"
                component={inputField}
            />

            <Field
                name="senha"
                type="password"
                label="Senha de Acesso"
                placeholder="Digite aqui"
                component={inputField}
            />

            <Field
                name="senhaConfirmacao"
                type="password"
                label="Confirme sua senha"
                placeholder="Digite aqui"
                component={inputField}
            />

            <Button type="submit"
                    waves="light" 
                    className="right deep-orange">
                Realizar Cadastro
            </Button>

        </form>
    )
}

//função para o REDUX-FORM utilizada para executar o reset do formulário
//este reset será feito sempre após o submit do form..
const afterSubmit = (result, dispatch) => {
    //disparando uma função para limpar os campos do formulário
    dispatch(reset("formularioCliente"));
}

//registrando o formulário para o REDUX-FORM..
FormCliente = reduxForm({
    form: 'formularioCliente', 
    onSubmitSuccess : afterSubmit, //evento submit com sucesso
    validate //associando o formulario do redux à função de validação
})(FormCliente);

export default FormCliente;