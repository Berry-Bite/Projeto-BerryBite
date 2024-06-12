// const { json } = require("express");

var empresa1 = "Murilo Berrys";
var empresa2 = "Eder Morangos";
var empresa3 = "Caramico Berrys";

function login() {
    window.location.href = "login.html";
}

var idMatriz;
var idFazenda;

var nomeVar = ""
var cepVar = ""
var cnpjVar = ""
var numeroVar = ""
var nomeFazendaVar = ""
var complementoVar = ""
var senhaVar = ""
var confirmar_senha = ""

var validado = true;
function validar() {
    nomeVar = input_nome.value;
    cepVar = input_cep.value;
    cnpjVar = input_cnpj.value;
    numeroVar = input_numero.value;
    nomeFazendaVar = input_nome_fazenda.value;
    complementoVar = input_complemento.value;
    senhaVar = input_senha.value;
    confirmar_senha = input_confirmar_senha.value;

    var mensagem = "";
    // var telefone_errado = true;

    var senha_validada = 0;

    if (nomeVar.length < 3) {
        div_input_nome.style = "border: 0.12vw solid red";
        validacao_nome.innerHTML = "O nome precisa ter pelo menos 3 letras";
        validado = false;
    } else {
        div_input_nome.style = "";
        validacao_nome.innerHTML = "";
    }

    if (cepVar.length != 9) {
        div_input_cep.style = "border: 0.12vw solid red";
        validacao_cep.innerHTML = "O cep precisa ter 9 caracteres, incluindo o hífen (-)";
        validado = false;
    } else {
        div_input_cep.style = "";
        validacao_cep.innerHTML = "";
    }

    if (cnpjVar.length != 18 || cnpjVar.indexOf(".") < 0 || cnpjVar.indexOf("/") < 0 || cnpjVar.indexOf("-") < 0) {
        div_input_cnpj.style = "border: 0.12vw solid red";
        validacao_cnpj.innerHTML = 'O cnpj precisa ter 18 caracteres, ".", "/" e "-" ';
        validado = false;
    } else {
        div_input_cnpj.style = "";
        validacao_cnpj.innerHTML = "";
    }

    if (numeroVar.length < 1) {
        div_input_numero.style = "border: 0.12vw solid red";
        validacao_numero.innerHTML = `O seu número precisa ser válido`;
        validado = false;
    } else {
        div_input_numero.style = "";
        validacao_numero.innerHTML = "";
    }


    if (nomeFazendaVar.length < 3) {
        div_input_nome_fazenda.style = "border: 0.12vw solid red";
        validacao_nome_fazenda.innerHTML = "O nome da fazenda precisa ter pelo menos 3 letras";
        validado = false;
    } else {
        div_input_nome_fazenda.style = "";
        validacao_nome_fazenda.innerHTML = "";
    }

    if (complementoVar == "") {
        complementoVar = "Vazio"
    }

    if (senhaVar < 6) {
        div_input_senha.style = "border: 0.12vw solid red";
        validacao_senha.innerHTML = "A senha precisa ter pelo menos 6 caracteres";
        validado = false;
    } else {
        senha_validada++;
    }

    if (senhaVar != confirmar_senha) {
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

        cadastrarMatriz()

    }
}

function cadastrarMatriz() {

    // Enviando o valor da nova input
    fetch("/matriz/cadastrarMatriz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            cnpjServer: cnpjVar,
            senhaServer: senhaVar,

        }),
    })
        .then(function (respostaServer) {
            console.log("respostaServer CADASTRAR MATRIZ: ", respostaServer);

            if (respostaServer.ok) {

                respostaServer.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    idMatriz = resposta.insertId
                    cadastrarFazenda()
                });
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}



function cadastrarFazenda() {
    console.log("O id da Matriz é:" + idMatriz)
    // Enviando o valor da nova input
    fetch("/fazenda/cadastrarFazenda", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            matrizServer: idMatriz,
            nomeFazendaServer: nomeFazendaVar,

        }),

    })

        .then(function (respostaServer) {
            console.log("respostaServer CADASTRAR MATRIZ: ", respostaServer);

            if (respostaServer.ok) {

                respostaServer.json().then(function (respostaFormatada) {

                    idFazenda = respostaFormatada.insertId,
                    cadastrarEndereco()
                });
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}





function cadastrarEndereco() {

    // Enviando o valor da nova input
    fetch("/endereco/cadastrarEndereco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            fazendaServer: idFazenda,
            cepServer: cepVar,
            numeroServer: numeroVar,
            complementoServer: complementoVar,

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                setTimeout(function () {
                    login();
                }, 1000); // apenas para exibir o loading

            } else {
                throw "Houve um erro ao tentar realizar o cadastro do endereço!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}