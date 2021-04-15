//função para realizar a validação dos campos do formulário REDUX-FORM
//values -> parametro que recebe os campos preenchidos no formulario em JSON
export const validate = (values) => {

    //criando um objeto que irá conter as mensagens de erro de validação.
    //neste objeto errors devemos adicionar os campos do formulario e para cada campo
    //uma mensagem de erro de validação..
    const errors = {}; //vazio

    //campo obrigatorio
    if(!values.nome){
        errors.nome = "Por favor, informe o nome do cliente.";
    }

    if(!values.email){
        errors.email = "Por favor, informe o email do cliente.";
    }

    if(!values.telefone){
        errors.telefone = "Por favor, informe o telefone do cliente.";
    }

    if(!values.senha){
        errors.senha = "Por favor, informe a senha do cliente.";
    }

    if(!values.senhaConfirmacao){
        errors.senhaConfirmacao = "Por favor, confirme a senha do cliente.";
    }
    else if(values.senhaConfirmacao != values.senha){
        errors.senhaConfirmacao = "Senhas não conferem.";
    }

    //retornando os erros de validação
    return errors;
}