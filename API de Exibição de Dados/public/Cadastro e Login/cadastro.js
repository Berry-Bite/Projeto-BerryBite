// const { json } = require("express");

var empresa1 = "Murilo Berrys";
var empresa2 = "Eder Morangos";
var empresa3 = "Caramico Berrys";

function login() {
    window.location.href = "login.html";
}

var idMatriz;
var idFazenda;

var validado = true;
function cadastrar() {
    var nomeVar = input_nome.value;
    var cepVar = input_cep.value;
    var cnpjVar = input_cnpj.value;
    var numeroVar = input_numero.value;
    var nomeFazendaVar = input_nome_fazenda.value;
    var complementoVar = input_complemento.value;
    var senhaVar = input_senha.value;
    var confirmar_senha = input_confirmar_senha.value;

    var mensagem = "";
    var telefone_errado = true;
  
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
        div_input_nome.style = "border: 0.12vw solid red";
        validacao_nome.innerHTML = "O nome da fazenda precisa ter pelo menos 3 letras";
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
    fetch("/usuarios/cadastrarMatriz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            cnpjServer: cnpjVar,
            senhaServer: senhavar,

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
               verMatriz()
        
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}


function verMatriz(){

     // Enviando o valor da nova input
     fetch(`/usuarios/verMatriz?cnpj=${cnpjVar}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                idMatriz = resposta.idMatriz
                cadastrarFazenda()
            } else {
                throw "Houve um erro ao tentar realizar o select da Matriz!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrarFazenda() {

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarFazenda", {
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
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
               verFazenda()
        
            } else {
                throw "Houve um erro ao tentar realizar o cadastro da Fazenda!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function verFazenda(){

    // Enviando o valor da nova input
    fetch(`/usuarios/verFazenda?nomeFazenda=${nomeFazendaVar}`, {
       method: "GET",
       headers: {
           "Content-Type": "application/json",
       },
   })
       .then(function (resposta) {
           console.log("resposta: ", resposta);

           if (resposta.ok) {
               idFazenda = resposta.idFazenda,
               cadastrarEndereco()
           } else {
               throw "Houve um erro ao tentar realizar o select da Fazenda!";
           }
       })
       .catch(function (resposta) {
           console.log(`#ERRO: ${resposta}`);
       });

   return false;
}



function cadastrarEndereco() {

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarEndereco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            matrizServer: idFazenda,
            cepServer: cepVar,
            numeroServer: numeroVar,
            complementoServer: complementoVar,

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
               verFazenda()
        
            } else {
                throw "Houve um erro ao tentar realizar o cadastro do endereço!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}