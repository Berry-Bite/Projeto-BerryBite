var email1 = "fernanda@hotmail.com";
var senha1 = "123456";

var email2 = "fernanda@gmail.com";
var senha2 = "123456";

var email3 = "fernanda@sptech.school";
var senha3 = "123456";

var email4 = "caramico@hotmail.com";
var senha4 = "123456";

var email5 = "caramico@gmail.com";
var senha5 = "123456";

var email6 = "caramico@sptech.school";
var senha6 = "123456";

function cadastrar() {
    window.location.href = 'cadastro.html'
}

function dashboards() {
    window.location.href = 'dashboard.html'
}

var tentativas = 3;
function validar() {
    var email_digitado = input_usuario.value;
    var senha_digitado = input_senha.value;
    var mensagem = "";
    var validado = false
    
    if (tentativas == 0) {
        mensagem = "Login bloqueado, volte novamente após 10 minutos!";
        alerta.innerHTML = `<div id="alerta_erro"><span>${mensagem}</span></div>`;
    } else {
        if ((email1 == email_digitado && senha1 == senha_digitado) || (email2 == email_digitado && senha2 == senha_digitado) || (email3 == email_digitado && senha3 == senha_digitado) || (email4 == email_digitado && senha4 == senha_digitado) || (email5 == email_digitado && senha5 == senha_digitado) || (email6 == email_digitado && senha6 == senha_digitado)) {
            console.log(validado);
            validado = true;
        } else {
            console.log(tentativas);
            div_input_usuario.style = "border: 0.12vw solid red";
            div_input_senha.style = "border: 0.12vw solid red";
            validacao_login.innerHTML = 'Login inválido, digite novamente!';
            tentativas--;
        }
        
        if (validado) {
            div_input_usuario.style = "";
            div_input_senha.style = "";
            validacao_login.innerHTML = '';
            mensagem = "Login realizado com sucesso!!<br>Direcionando para o site de Dashboard!"
            alerta.innerHTML = `<div id="alerta_cadastrado"><span>${mensagem}</span></div>`;
            
            // setTimeout(function redirecionar() {
            //     dashboards();
            // }, 2000);
        }
    }
}

function ocultar() {
    if(input_senha.type == "password") {
        input_senha.type = "text";
    } else {
        input_senha.type = "password";
    }
}

function esqueceu_senha() {
    var email_digitado = input_usuario.value;
    if(email_digitado.length > 10 && email_digitado.indexOf("@") != -1 && email_digitado.indexOf(".") != -1) {
        mensagem = "Enviaremos um email para recuperação de senha!"
    } else {
        mensagem = 'Preencha o campo email corretamente e clique novamente no botão <span style="text-decoration: underline">Esqueceu senha?</span>'
    }
    alerta.innerHTML = `<div id="alerta_esqueceu_senha"><span>${mensagem}</span></div>`;
}