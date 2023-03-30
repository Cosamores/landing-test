function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tipoVeiculo = document.querySelector('#consumo').value;
    const precoCombustivel = parseFloat(document.getElementById('preco-combustivel').value);
    const precoEletricidade = parseFloat(document.querySelector('#preco-eletricidade').value);
  
    // Consumo por Km:

    const gasCompacto = 15.30; 
    const gasSuv = 12.90;
    const gasSedan = 18.30;

    const elCompacto = 9.00;
    const elSuv = 7.80;
    const elSedan = 8.00;
    
  
    if (isNaN(distancia) || isNaN(precoCombustivel) || isNaN(precoEletricidade)) {
      alert('Por favor, preencha todos os campos com valores válidos.');
      return;
    }

    // Cálculo: 

    tipoVeiculo == 'compacto' ? consumo = [gasCompacto, elCompacto]  
            : tipoVeiculo == 'suv' ? consumo = [gasSuv, elSuv]
            :  consumo = [gasSedan, elSedan]
  
    const custoCombustivel = (distancia / consumo[0]) * precoCombustivel;
    const custoEletricidade = (distancia * consumo[1]) * (precoEletricidade/100);
    const economia = custoCombustivel - custoEletricidade
  
    document.querySelector('#custo-combustivel').innerText = `R$ ${custoCombustivel.toFixed(2)}`;
    document.querySelector('#custo-eletrico').innerText = `R$ ${custoEletricidade.toFixed(2)}`;
    document.querySelector('#economia').innerText = `R$ ${economia.toFixed(2)}`;

  }
  
/*
  consumoEletrico = 0.1 Kw/Km => 30Kw / 302 km
  preço da eletricidade = Kw/h

  O valor do Kw/h pode variar de acordo com a bandeira tarifária vigente e região
 <option value="6.50">Bandeira vermelha: R$6.50</option>
  


*/