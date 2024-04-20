function calcular() {
    div_mens.innerHTML = " "
    //calculo de produção*cotação para descobrir o lucro bruto
    var producao = Number(input_producao.value);
    var cotacao = Number(input_valormorango.value);
    var total_producao = producao * cotacao;
    //calculo de perda no processo
    var perda_processo = Number(input_perdas.value);
    var total_perdas = (perda_processo) * cotacao;

    //calculos custos operacionais
    var custos_insumo = Number(input_operacional.value);
    var custos_energia = Number(input_energia.value);
    var custos_irrigacao = Number(input_irrigacao.value);
    var custos_total = custos_energia + custos_insumo + custos_irrigacao;

    //descontos totais do cliente 
    var descontos = total_perdas + custos_total;

    //bruto e liquido
    var bruto = total_producao;
    var liquido = bruto - descontos;

    // percentual processo  
    var percentual_perdaprocesso = ((bruto - total_perdas) / bruto) * 100
    var bt_pcr = perda_processo * 0.2332;
    var pcrtotal = perda_processo - bt_pcr;

    var bt_irrg = custos_irrigacao * 0.25;
    var irrgtotal = custos_irrigacao - bt_irrg;
    //percentual da diferença entre o liquido e o bruto
    var percentual_liquido = ((bruto - liquido) / bruto) * 100;

    var efetividade = (percentual_liquido - 48.32).toFixed(2);
    if (efetividade < 0) {
        var efetividade = 0;
    }


    div_mens.innerHTML += ` <hr>
    <br> O lucro bruto da sua produção é de: R$${total_producao} <br>
        <br> Com a baixa eficiência no método de irrigação e controle de temperatura, sua estufa está tendo uma perda de: R$${total_perdas} neste processo <br>
        <br> O custo total da sua produção (insumos, energia e água) é de: R$${custos_total}<br>
        <br> Sua empresa está com um déficit de ${percentual_liquido}% sobre o lucro bruto que, com as deduções, passa a ser: R$${liquido} <br> 
    
<hr>
    
    <br> Com a solução da Berry.bite, conseguimos fazer uma otimização/melhoria em alguns processos, onde o deficit de perda em kilos por safra passa a ser (Kg)${pcrtotal}  e os custo por irrigação por safra passaria a ser: R$${irrgtotal}.<br>
    
    <br> Efetividade sobre as perdas da safra que antes era de ${perda_processo}(Kg) vai ser (Kg)${pcrtotal} ,  equivaleria a R$${pcrtotal * cotacao}
    <br>Uma diferença de: R$${total_perdas - (pcrtotal * cotacao)} a menos da gasto do valor de anteriormente era de R$${total_perdas} <br>
 
    <br>Com base nos calculos de impactos da solução IoT:
    <table>
<tbody>
    <tr>
        <td colspan="3">Fungos e Bacterias</td>
    </tr>
    <tr>
        <td colspan="3">30% de perda da produção por infecções e outros virus</td>
    </tr>
    <tr>
        <td colspan="3">fonte: EMBRAPA Circular Técnica 96</td>
    </tr>
    <tr>
        <td>Manutenção Ar-condicionado/falhas criticas no sistema de resfriamento</td>
        <td>11.66%</td>
        <td>não aplicável</td>
    </tr>
    <tr>
        <td>Controle de temperatura (IOT)</td>
        <td>11.66%</td>
        <td rowspan="2">aplicável</td>
    </tr>
    <tr>
        <td>Gestão inteligente sobre troca de calor (estufa/Ambiente externo)</td>
        <td>11.66%</td>
    </tr>
    <tr>
        <td colspan="3">impacto direto da solução: 23.32%</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3">Sistema de Irrigação</td>
    </tr>
    <tr>
        <td colspan="3">50%  de perda da produção por irrigação irregular</td>
    </tr>
    <tr>
        <td colspan="3">fonte: EMBRAPA Irrigação do Morangueiro</td>
    </tr>
    <tr>
        <td>Falhas humanas por irrigação manual</td>
        <td>12.5%</td>
        <td rowspan="2">não aplicável</td>
    </tr>
    <tr>
        <td>Cortes no abastecimento de agua por falta de pagamento ou racionamento</td>
        <td>12.5%</td>
    </tr>
    <tr>
        <td>Planejamento do uso de agua para irrigação(desperdicio por excesso)</td>
        <td>12.5%</td>
        <td rowspan="2">aplicável</td>
    </tr>
    <tr>
        <td>Irrigação precisa ( fator: Umidade x Temperatura)</td>
        <td>12.5%</td>
    </tr>
    <tr>
        <td colspan="3">impacto direto da solução:	25.00%</td>
    </tr>`
}

function home() {
    
}