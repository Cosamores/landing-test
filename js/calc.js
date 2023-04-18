function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tipoVeiculo = document.querySelector('#consumo').value;
    const precoCombustivel = parseFloat(document.getElementById('preco-combustivel').value);
/*     const precoEletricidade = parseFloat(document.querySelector('#preco-eletricidade').value);
 */  const precoEletricidade = 0.85;
    // Consumo por Km:

    const gasCompacto = 15.30; 
    const gasSuv = 12.90;
    const gasSedan = 18.30;

    const elCompacto = 9.00;
    const elSuv = 7.80;
    const elSedan = 8.00;
    
    const compactoEletricoManutencao = 0.045;
    const suvEletricoManutencao = 0.05;
    const sedanEletricoManutecao = 0.049;

    const compactoGasManutencao = 0.19;
    const suvGasManutencao = 0.22;
    const sedanGasManutecao = 0.21;
  
    if (isNaN(distancia) || isNaN(precoCombustivel) || isNaN(precoEletricidade)) {
      alert('Por favor, preencha todos os campos com valores válidos.');
      return;
    }

    // Cálculo: 

    tipoVeiculo == 'compacto' ? consumo = [gasCompacto, elCompacto]  
            : tipoVeiculo == 'suv' ? consumo = [gasSuv, elSuv]
            :  consumo = [gasSedan, elSedan];

            tipoVeiculo == 'compacto' ? manutencao = [compactoGasManutencao, compactoEletricoManutencao]  
            : tipoVeiculo == 'suv' ? manutencao = [suvGasManutencao, suvEletricoManutencao]
            :  consumo = [sedanGasManutecao, sedanEletricoManutecao];

    const gasManutencao = manutencao[0];
    const elManutencao = manutencao[1]; 
  
    const custoCombustivelDia = (distancia / consumo[0]) * precoCombustivel;
    const custoEletricidadeDia = (distancia * consumo[1]) * (precoEletricidade/100);
    const economiaDia = custoCombustivelDia - custoEletricidadeDia;
  
    const custoCombustivelMes = custoCombustivelDia * 30;
    const custoEletricidadeMes = custoEletricidadeDia * 30;
    const economiaMes = custoCombustivelMes - custoEletricidadeMes
  
    const custoCombustivelAno = custoCombustivelMes * 12;
    const custoEletricidadeAno = custoEletricidadeMes * 12;
    const economiaAno = custoCombustivelAno - custoEletricidadeAno;
  
    console.log('economia dia: ' + economiaDia.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }))
    console.log('economia mês: ' + economiaMes.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }))
    console.log('economia ano: ' + economiaAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }))
    console.log(document.querySelector('.economia-ano'))

    document.querySelector('.manutencao-combustivel').innerText = ` ${gasManutencao.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`
    document.querySelector('.manutencao-eletrico').innerText = ` ${elManutencao.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`


    document.querySelector('#custo-combustivel-dia').innerText = `R$ ${custoCombustivelDia.toFixed(2).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`
    document.querySelector('#custo-eletrico-dia').innerText = custoEletricidadeDia.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('.economia-dia').innerText = economiaDia.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('.economia-dia-mobile').innerText = economiaDia.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });

    document.querySelector('#custo-combustivel-mes').innerText = custoCombustivelMes.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('#custo-eletrico-mes').innerText = custoEletricidadeMes.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('.economia-mes').innerText = economiaMes.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('.economia-mes-mobile').innerText = economiaMes.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });

    document.querySelector('#custo-combustivel-ano').innerText = custoCombustivelAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('#custo-eletrico-ano').innerText = custoEletricidadeAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('.economia-ano').innerText = economiaAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.querySelector('.economia-ano-mobile').innerText = economiaAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });

    
  }
  
/*
  consumoEletrico = 0.1 Kw/Km => 30Kw / 302 km
  preço da eletricidade = Kw/h

  O valor do Kw/h pode variar de acordo com a bandeira tarifária vigente e região
 <option value="6.50">Bandeira vermelha: R$6.50</option>
  


*/