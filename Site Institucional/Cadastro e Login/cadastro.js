var empresa1 = "Murilo Berrys";
var empresa2 = "Eder Morangos";
var empresa3 = "Caramico Berrys";

function login() {
    window.location.href = "login.html";
}

function validar() {
    var nome = input_nome.value;
    var cep = input_cep.value;
    var cnpj = input_cnpj.value;
    var numero = input_numero.value;
    var telefone_fixo = input_telefone_fixo.value;
    var senha = input_senha.value;
    var confirmar_senha = input_confirmar_senha.value;
    var mensagem = "";
    var validado = true;
    var telefone_errado = true;
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

    if (cep.length != 9) {
        div_input_cep.style = "border: 0.12vw solid red";
        validacao_cep.innerHTML = "O cep precisa ter 9 caracteres, incluindo o hífen (-)";
        validado = false;
    } else {
        div_input_cep.style = "";
        validacao_cep.innerHTML = "";
    }

    if (cnpj.length != 18 || cnpj.indexOf(".") < 0 || cnpj.indexOf("/") < 0 || cnpj.indexOf("-") < 0) {
        div_input_cnpj.style = "border: 0.12vw solid red";
        validacao_cnpj.innerHTML = 'O cnpj precisa ter 18 caracteres, ".", "/" e "-" ';
        validado = false;
    } else {
        div_input_cnpj.style = "";
        validacao_cnpj.innerHTML = "";
    }

    if (numero.length < 1) {
        div_input_numero.style = "border: 0.12vw solid red";
        validacao_numero.innerHTML = `O seu número precisa ser válido`;
        validado = false;
    } else {
        div_input_numero.style = "";
        validacao_numero.innerHTML = "";
    }

    for (var contador = 0; contador < telefone_fixo.length; contador++) {
        if (telefone_fixo[contador] != "0" || telefone_fixo[contador] != "1" || telefone_fixo[contador] != "2" || telefone_fixo[contador] != "3" || telefone_fixo[contador] != "4" || telefone_fixo[contador] != "5" || telefone_fixo[contador] != "6" || telefone_fixo[contador] != "7" || telefone_fixo[contador] != "8" || telefone_fixo[contador] != "9") {
            telefone_errado = false
        }
    }

    if (telefone_errado) {
        div_input_telefone_fixo.style = "border: 0.12vw solid red";
        validacao_telefone_fixo.innerHTML = "O telefone fixo só pode ter números";
        validado = false;
    } else {
        telefone_validado++;
    }

    if (telefone_fixo.length != 10) {
        div_input_telefone_fixo.style = "border: 0.12vw solid red";
        validacao_telefone_fixo.innerHTML = "O telefone fixo só pode ter 10 números, incluindo o DDD";
        validado = false;
    } else {
        telefone_validado++;
    }

    if (telefone_validado == 2) {
        div_input_telefone_fixo.style = "";
        validacao_telefone_fixo.innerHTML = "";
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