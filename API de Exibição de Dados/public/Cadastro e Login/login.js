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
    
}


function entrar() {

    var cnpjVar = input_cnpj.value;
    var senhaVar = input_senha.value;
    var mensagem = "";
    var validado = false
    
    if (tentativas == 0) {
        mensagem = "Login bloqueado, volte novamente após 10 minutos!";
        alerta.innerHTML = `<div id="alerta_erro"><span>${mensagem}</span></div>`;
    } else {
        if ((cnpj1 == cnpjVar && senha1 == senhaVar) || (cnpj2 == cnpjVar && senha2 == senhaVar) || (cnpj3 == cnpjVar && senha3 == senhaVar) || (cnpj4 == cnpjVar && senha4 == senhaVar) || (cnpj5 == cnpjVar && senha5 == senhaVar) || (cnpj6 == cnpjVar && senha6 == senhaVar)) {
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
            
        }
        
            console.log("FORM LOGIN: ", cnpjVar);
            console.log("FORM SENHA: ", senhaVar);
        
            fetch("/usuarios/autenticarEmpresa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cnpjServer: cnpjVar,
                    senhaServer: senhaVar
                })
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO entrar()!")
        
                if (resposta.ok) {
                    console.log(resposta);
        
                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));
                        sessionStorage.CNPJ_USUARIO =json.cnpj ;
                        sessionStorage.NOME_USUARIO = json.razaoSocial;
                        sessionStorage.ID_USUARIO = json.idMatriz;
                        // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)
        
                        setTimeout(function () {
                            window.location = "./dashboard/estufas.html";
                        }, 1000); // apenas para exibir o loading
        
                    });
        
                } else {
        
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
    var cnpjVar = input_cnpj.value;
    if(cnpjVar.length > 10 && cnpjVar.indexOf("@") != -1 && cnpjVar.indexOf(".") != -1) {
        mensagem = "Enviaremos um email para recuperação de senha!"
    } else {
        mensagem = 'Preencha o campo email corretamente e clique novamente no botão <span style="text-decoration: underline">Esqueceu senha?</span>'
    }
    alerta.innerHTML = `<div id="alerta_esqueceu_senha"><span>${mensagem}</span></div>`;
}