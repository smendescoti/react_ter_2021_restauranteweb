import React from 'react';
import { Row, Input } from 'react-materialize';

//criando o componente como função..
export const inputField = ({
    //entrada de parametros do componente..
    type, //tipo do campo (text, password, email, date)
    label, //rotulo do campo
    placeholder, //mensagem dentro do campo
    input, //propriedades do campo (name, etc)

    //parametros reservados pelo REDUX-FORM utilizados
    //para exibir as mensagens de erro de validação
    meta: {
        touched, //indica se o conteudo do campo foi modificado
        error //trazer a mensagem de erro do campo
    }

}) => (
    <Row>
        <Input
            type={type}
            label={label}
            placeholder={placeholder}
            {...input}
            s={12}
        />
        {
            touched && (
                error &&
                <span className="red-text text-darken-4"
                    style={{ marginLeft: '10px' }}>
                    {error}
                </span>
            )
        }
    </Row>
)