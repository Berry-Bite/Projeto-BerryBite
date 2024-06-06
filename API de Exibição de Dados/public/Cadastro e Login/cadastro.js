// const { json } = require("express");

var empresa1 = "Murilo Berrys";
var empresa2 = "Eder Morangos";
var empresa3 = "Caramico Berrys";

function login() {
    window.location.href = "login.html";
}

var fkMatriz;

function cadastrar() {
    var nomeVar = input_nome.value;
    var cepVar = input_cep.value;
    var cnpjVar = input_cnpj.value;
    var numeroVar = input_numero.value;
    var telefone_fixoVar = input_telefone_fixo.value;
    var complementoVar = input_complemento.value;
    var senhaVar = input_senha.value;
    var confirmar_senha = input_confirmar_senha.value;

    var mensagem = "";
    var validado = true;
    var telefone_errado = true;
    var telefone_validado = 0;
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

    // for (var contador = 0; contador < telefone_fixoVar.length; contador++) {
    //     if (telefone_fixoVar[contador] != "0" || telefone_fixoVar[contador] != "1" || telefone_fixoVar[contador] != "2" || telefone_fixoVar[contador] != "3" || telefone_fixoVar[contador] != "4" || telefone_fixoVar[contador] != "5" || telefone_fixoVar[contador] != "6" || telefone_fixoVar[contador] != "7" || telefone_fixoVar[contador] != "8" || telefone_fixoVar[contador] != "9") {
    //         telefone_errado = false
    //     }
    // }

    // if (telefone_errado) {
    //     div_input_telefone_fixo.style = "border: 0.12vw solid red";
    //     validacao_telefone_fixo.innerHTML = "O telefone fixo só pode ter números";
    //     validado = false;
    // } else {
        telefone_validado++;
    // }

    // if (telefone_fixoVar.length != 10) {
    //     div_input_telefone_fixo.style = "border: 0.12vw solid red";
    //     validacao_telefone_fixo.innerHTML = "O telefone fixo só pode ter 10 números, incluindo o DDD";
    //     validado = false;
    // } else {
        telefone_validado++;
    // }

    if (telefone_validado == 2) {
        div_input_telefone_fixo.style = "";
        validacao_telefone_fixo.innerHTML = "";
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
        
            // Enviando o valor da nova input
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    nomeServer: nomeVar,
                    cnpjServer: cnpjVar,
                    telefoneFixoServer: telefone_fixoVar,
                    senhaServer: senhaVar,
                    
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);
        
                    if (resposta.ok) {
                        //   cardErro.style.display = "block";
        
                        //   mensagem_erro.innerHTML =
                        //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                        
                        console.log(resposta)
        
                       
                    } else {
                        throw "Houve um erro ao tentar realizar o cadastro!";
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                    finalizarAguardar();
                });
        

                   // Enviando o valor da nova input
                   fetch("/usuarios/capturarId", {
                    method: "GET",
                  
                    
                })
                    .then(function (resposta) {
                        console.log("resposta: ", resposta);
            
                        if (resposta.ok) {
                          
                            fkMatriz = resposta[0].idMatriz;
            
                        } else {
                            throw "Houve um erro ao tentar realizar o cadastro!";
                        }
                    })
                    .catch(function (resposta) {
                        console.log(`#ERRO: ${resposta}`);
                        finalizarAguardar();
                    });
            
    
                

                // Enviando o valor da nova input
                fetch("/usuarios/cadastrarEmpresa", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                        // Agora vá para o arquivo routes/usuario.js
                        cepServer: cepVar,
                        numeroServer: numeroVar,
                        complementoServer: complementoVar,
                        
                    }),
                })
                    .then(function (resposta) {
                        console.log("resposta: ", resposta);
            
                        if (resposta.ok) {
                            //   cardErro.style.display = "block";
            
                            //   mensagem_erro.innerHTML =
                            //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                            
                            console.log(resposta)
                            setTimeout(() => {
                                window.location = "login.html";
                            }, "2000");
            
                            limparFormulario();
                            finalizarAguardar();
                        } else {
                            throw "Houve um erro ao tentar realizar o cadastro!";
                        }
                    })
                    .catch(function (resposta) {
                        console.log(`#ERRO: ${resposta}`);
                        finalizarAguardar();
                    });
            
                return false;

             
    

       
    }
}