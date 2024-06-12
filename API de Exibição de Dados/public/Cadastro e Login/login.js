// const { autenticarUsuario } = require("../../src/models/usuarioModel");


function cadastrar() {
    window.location.href = 'cadastro.html'
}

function dashboards() {
    window.location.href = '../dashboards/estufas.html'
}

var tentativas = 3;

var cnpj_cpfVar = ""
var senhaVar = ""
var mensagem = ""

function entrar() {

    cnpj_cpfVar = input_cnpj_cpf.value;
    senhaVar = input_senha.value;
    mensagem = "";
    // var validado = false


    if (cnpj_cpfVar == "" || senhaVar == "") {
        validacao_login.innerHTML = "Preencha todos os campos para prosseguir!";
        validado = true
    }
    else if(cnpj_cpfVar.length == 18){
        autenticarMatriz()
    }
    else {
      autenticarUsuario()
    }

}

function autenticarMatriz(){
    console.log("FORM LOGIN: ", cnpj_cpfVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/matriz/autenticarMatriz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cnpjServer: cnpj_cpfVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);


            div_input_cnpj.style = "";
            div_input_senha.style = "";
            validacao_login.innerHTML = '';
            mensagem = "Login realizado com sucesso!!<br>Direcionando para o site de Dashboard!"
            alerta.innerHTML = `<div id="alerta_cadastrado"><span>${mensagem}</span></div>`;

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.CNPJ_USUARIO = json.cnpj;
                sessionStorage.NOME_USUARIO = json.razaoSocial;
                sessionStorage.ID_USUARIO = json.idMatriz;

                setTimeout(function () {
                    window.location = "../dashboard/estufas.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            console.log(tentativas);
            div_input_cnpj.style = "border: 0.12vw solid red";
            div_input_senha.style = "border: 0.12vw solid red";
            if (tentativas == 0) {
                mensagem = "Login bloqueado, volte novamente após 10 minutos!";
                alerta.innerHTML = `<div id="alerta_erro"><span>${mensagem}</span></div>`;
            }
            if (tentativas != 1) {
                validacao_login.innerHTML = 'Login inválido, você tem mais ' + (tentativas - 1) + " tentativas!";
            } else {
                validacao_login.innerHTML = 'Login inválido, esta é sua última tentativa!';
            }
            tentativas--;

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


function autenticarUsuario(){
    console.log("FORM LOGIN: ", cnpj_cpfVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticarUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cpfServer: cnpj_cpfVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);


            div_input_cnpj.style = "";
            div_input_senha.style = "";
            validacao_login.innerHTML = '';
            mensagem = "Login realizado com sucesso!!<br>Direcionando para o site de Dashboard!"
            alerta.innerHTML = `<div id="alerta_cadastrado"><span>${mensagem}</span></div>`;

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.CNPJ_USUARIO = json.cpf;
                sessionStorage.NOME_USUARIO = json.razaoSocial;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.FK_MATRIZ = json.fkMatriz;

                setTimeout(function () {
                    window.location = "../dashboard/estufas.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            console.log(tentativas);
            div_input_cnpj.style = "border: 0.12vw solid red";
            div_input_senha.style = "border: 0.12vw solid red";
            if (tentativas == 0) {
                mensagem = "Login bloqueado, volte novamente após 10 minutos!";
                alerta.innerHTML = `<div id="alerta_erro"><span>${mensagem}</span></div>`;
            }
            if (tentativas != 1) {
                validacao_login.innerHTML = 'Login inválido, você tem mais ' + (tentativas - 1) + " tentativas!";
            } else {
                validacao_login.innerHTML = 'Login inválido, esta é sua última tentativa!';
            }
            tentativas--;

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


function ocultar() {
    if (input_senha.type == "password") {
        input_senha.type = "text";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="../icons/icons8-invisible-32.png">';
    } else {
        input_senha.type = "password";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="../icons/olhoAberto.png">';
    }
}

function esqueceu_senha() {
    var cnpj_cpfVar = input_cnpj.value;
    if (cnpj_cpfVar.length > 10 && cnpj_cpfVar.indexOf("@") != -1 && cnpj_cpfVar.indexOf(".") != -1) {
        mensagem = "Enviaremos um email para recuperação de senha!"
    } else {
        mensagem = 'Preencha o campo cnpj corretamente e clique novamente no botão <span style="text-decoration: underline">Esqueceu senha?</span>'
    }
    alerta.innerHTML = `<div id="alerta_esqueceu_senha"><span>${mensagem}</span></div>`;
}