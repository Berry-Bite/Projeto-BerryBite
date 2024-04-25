var empresa1 = "Murilo Berrys";
var empresa2 = "Eder Morangos";
var empresa3 = "Caramico Berrys";

function login() {
    window.location.href = "login.html";
}

function validar() {
    var nome = input_nome.value;
    var sobrenome = input_sobrenome.value;
    var email = input_email.value;
    var cpf = input_cpf.value;
    var telefone_celular = input_telefone_celular.value;
    var nome_empresa = input_nome_empresa.value;
    var senha = input_senha.value;
    var confirmar_senha = input_confirmar_senha.value;
    var mensagem = "";
    var validado = true;
    var telefone_errado = true;
    var email_validado = 0;
    var telefone_validado = 0;
    var senha_validada = 0;

    if (nome.length < 3) {
        div_input_nome.style = "border: 0.12vw solid red";
        validacao_nome.innerHTML = "O nome precisa ter pelo menos 3 letras";
        validado = false;
    } else {
        div_input_nome.style = "";
        validacao_nome.innerHTML = "";
    }

    if (sobrenome.length < 3) {
        div_input_sobrenome.style = "border: 0.12vw solid red";
        validacao_sobrenome.innerHTML = "O sobrenome precisa ter pelo menos 3 letras";
        validado = false;
    } else {
        div_input_sobrenome.style = "";
        validacao_sobrenome.innerHTML = "";
    }

    if (email.length < 10) {
        div_input_email.style = "border: 0.12vw solid red";
        validacao_email.innerHTML = "O email precisa ter pelo menos 10 letras";
        validado = false;
    } else {
        email_validado++;
    }

    if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
        div_input_email.style = "border: 0.12vw solid red";
        validacao_email.innerHTML = 'O email precisa ter "@" e "."';
        validado = false;
    } else {
        email_validado++;
    }

    if (email_validado == 2) {
        div_input_email.style = "";
        validacao_email.innerHTML = "";
    }

    if (cpf.length != 11) {
        div_input_cpf.style = "border: 0.12vw solid red";
        validacao_cpf.innerHTML = `O CPF precisa ter 11 números e não pode ter "." ou "-"`;
        validado = false;
    } else {
        div_input_cpf.style = "";
        validacao_cpf.innerHTML = "";
    }

    for (var contador = 0; contador < telefone_celular.length; contador++) {
        if (telefone_celular[contador] != "0" || telefone_celular[contador] != "1" || telefone_celular[contador] != "2" || telefone_celular[contador] != "3" || telefone_celular[contador] != "4" || telefone_celular[contador] != "5" || telefone_celular[contador] != "6" || telefone_celular[contador] != "7" || telefone_celular[contador] != "8" || telefone_celular[contador] != "9") {
            telefone_errado = false
        }
    }

    if (telefone_errado) {
        div_input_telefone_celular.style = "border: 0.12vw solid red";
        validacao_telefone_celular.innerHTML = "O telefone celular só pode ter números";
        validado = false;
    } else {
        telefone_validado++;
    }

    if (telefone_celular.length != 11) {
        div_input_telefone_celular.style = "border: 0.12vw solid red";
        validacao_telefone_celular.innerHTML = "O telefone celular só pode ter 11 números e precisa ter o DDD";
        validado = false;
    } else {
        telefone_validado++;
    }

    if (telefone_validado == 2) {
        div_input_telefone_celular.style = "";
        validacao_telefone_celular.innerHTML = "";
    }

    if (nome_empresa.toLowerCase() != empresa1.toLowerCase() && nome_empresa.toLowerCase() != empresa2.toLowerCase() && nome_empresa.toLowerCase() != empresa3.toLowerCase()) {
        div_input_nome_empresa.style = "border: 0.12vw solid red";
        validacao_nome_empresa.innerHTML = "Esta empresa não está cadastrada no nosso sistema";
        validado = false;
    } else {
        div_input_nome_empresa.style = "";
        validacao_nome_empresa.innerHTML = "";
    }

    if (senha < 6) {
        div_input_senha.style = "border: 0.12vw solid red";
        validacao_senha.innerHTML = "A senha precisa ter pelo menos 6 caracteres";
        validado = false;
    } else {
        senha_validada++;
    }

    if (senha != confirmar_senha) {
        div_input_senha.style = "border: 0.12vw solid red";
        validacao_senha.innerHTML = "As senhas precisam ser identicas";
        div_input_confirmar_senha.style = "border: 0.12vw solid red";
        validacao_confirmar_senha.innerHTML = "As senhas precisam ser identicas";
        validado = false;
    } else {
        senha_validada++;
        div_input_confirmar_senha.style = "";
        validacao_confirmar_senha.innerHTML = "";
    }

    if (senha_validada == 2) {
        div_input_senha.style = "";
        validacao_senha.innerHTML = "";
    }

    if (validado) {
        mensagem = "Cadastro realizado com sucesso!!<br>Direcionando para o site de Login!"
        alerta.innerHTML = `<div id="alerta_cadastrado"><span>${mensagem}</span></div>`;

        setTimeout(function redirecionar() {
            login();
        }, 2000);
    }
}