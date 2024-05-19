var cnpj1 = "11.111.111/0001-01";
var senha1 = "123456";

var cnpj2 = "22.222.222/0001-01";
var senha2 = "123456";

var cnpj3 = "33.333.333/0001-01";
var senha3 = "123456";

var cnpj4 = "44.444.444/0001-01";
var senha4 = "123456";

var cnpj5 = "55.555.555/0001-01";
var senha5 = "123456";

var cnpj6 = "66.666.666/0001-01";
var senha6 = "123456";

function cadastrar() {
    window.location.href = 'cadastro.html'
}

function dashboards() {
    window.location.href = '../dashboards/estufas.html'
}

var tentativas = 3;
function validar() {
    var cnpj_digitado = input_cnpj.value;
    var senha_digitado = input_senha.value;
    var mensagem = "";
    var validado = false
    
    if (tentativas == 0) {
        mensagem = "Login bloqueado, volte novamente após 10 minutos!";
        alerta.innerHTML = `<div id="alerta_erro"><span>${mensagem}</span></div>`;
    } else {
        if ((cnpj1 == cnpj_digitado && senha1 == senha_digitado) || (cnpj2 == cnpj_digitado && senha2 == senha_digitado) || (cnpj3 == cnpj_digitado && senha3 == senha_digitado) || (cnpj4 == cnpj_digitado && senha4 == senha_digitado) || (cnpj5 == cnpj_digitado && senha5 == senha_digitado) || (cnpj6 == cnpj_digitado && senha6 == senha_digitado)) {
            console.log(validado);
            validado = true;
        } else {
            console.log(tentativas);
            div_input_cnpj.style = "border: 0.12vw solid red";
            div_input_senha.style = "border: 0.12vw solid red";
            if (tentativas != 1) {
                validacao_login.innerHTML = 'Login inválido, você tem mais ' + (tentativas - 1) + " tentativas!";
            } else {
                validacao_login.innerHTML = 'Login inválido, esta é sua última tentativa!';
            }
            tentativas--;
        }
        
        if (validado) {
            div_input_cnpj.style = "";
            div_input_senha.style = "";
            validacao_login.innerHTML = '';
            mensagem = "Login realizado com sucesso!!<br>Direcionando para o site de Dashboard!"
            alerta.innerHTML = `<div id="alerta_cadastrado"><span>${mensagem}</span></div>`;
            
            setTimeout(function redirecionar() {
                dashboards();
            }, 2000);
        }
    }
}

function ocultar() {
    if(input_senha.type == "password") {
        input_senha.type = "text";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="../icons/icons8-invisible-32.png">';
    } else {
        input_senha.type = "password";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="../icons/olhoAberto.png">';
    }
}

function esqueceu_senha() {
    var cnpj_digitado = input_cnpj.value;
    if(cnpj_digitado.length > 10 && cnpj_digitado.indexOf("@") != -1 && cnpj_digitado.indexOf(".") != -1) {
        mensagem = "Enviaremos um email para recuperação de senha!"
    } else {
        mensagem = 'Preencha o campo email corretamente e clique novamente no botão <span style="text-decoration: underline">Esqueceu senha?</span>'
    }
    alerta.innerHTML = `<div id="alerta_esqueceu_senha"><span>${mensagem}</span></div>`;
}