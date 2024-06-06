function calcular() {
    div_mens.innerHTML = " "
    var regiao = select_regiao.value
    var plantacao = input_tamanhoPlantacao.value
    var valorMorango = input_valorMorango.value

    var kiloPorHectare = 20000 * plantacao
    var despesasPorKilo = 8.5 * kiloPorHectare
    var lucroPorKilo = 0;
    var totalGanho = 0;
    
    var texto = " "
   

   
   
  

    if(regiao == "outro"){
        alert("A Berry.Bite ainda não chegou na sua região, mas fique tranquilo(a), logo estaremos ai!😉")
    }
    else if(regiao == "#"){
        alert("Selecione uma região!")

    }else{
        div_mens.style.display = `unset`;

        
        if(regiao == "sul"){
            
            kiloPorHectare *= 0.65;
            lucroPorKilo = valorMorango * kiloPorHectare;
            totalGanho = lucroPorKilo - despesasPorKilo;
            totalGanhoComPerdas = totalGanho - (totalGanho * 0.35) 

            texto += `Atualmente você ganha <span style="color:#204b83;">R$ ${(totalGanho * 0.70).toFixed(2)}</span>, mas tenha cuidado, pois há uma alta probabilidade de enfrentar grandes perdas!<br> <span style="color:red;">&#9888</span>`
            
            texto += `<br> Na sua região, o fungo Oídio e a praga Frankiellis podem atacar até 35% da sua estufa, o que pode resultar em perdas aproximadas de <br> <span style="color: red;"> R$ ${(totalGanho * 0.35).toFixed(2)}</span>`
            
            texto += `<br>Com a <img src="../icons/logoEscrito.png" alt="logo" height="10px"> você evita e diminui as suas perdas em até % fazendo com que você fique com  até <span style="color: green";> R$ ${(totalGanho * 0.825).toFixed(2)}</span> `
            
        }
        if(regiao == "sudeste"){
            
            kiloPorHectare *= 0.60;
            lucroPorKilo = valorMorango * kiloPorHectare;
            totalGanho = lucroPorKilo - despesasPorKilo
            
            texto += `Atualmente você ganha <span style="color:#204b83;">R$ ${(totalGanho * 0.70).toFixed(2)} </span>, mas tenha cuidado, pois há uma alta probabilidade de enfrentar grandes perdas!<br> <span style="color:red;">&#9888</span>`
            
            texto += `<br> Na sua região, o fungo Oídio e a praga Ácaro-Rajado podem atacar até 40% da sua estufa, o que pode resultar em perdas aproximadas de <br> <span style="color: red;">R$ ${(totalGanho * 0.375).toFixed(2)}</span>`
            
            texto += `<br>Com a <img src="../icons/logoEscrito1.png" alt="logo" height="15px" > você diminui as suas perdas em até 50% fazendo com que você fique com até <span style="color: green";>R$ ${(totalGanho * 0.885).toFixed(2)}</span>`
            
        }
        texto += `<br><a href="#div_dados">De onde estes dados vieram?</a>`

    }    
    div_mens.innerHTML = texto
}
function enviar(){
    alert("Obrigado por chegar até aqui!\nFique de olho, em breve entraremos em contato.\n\nA equipe da Berry.Bite agradece sua atenção e interesse! 😊🍓")
}