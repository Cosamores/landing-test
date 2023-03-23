function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumoCombustivel = parseFloat(document.getElementById('consumo-combustivel').value);
    const precoCombustivel = parseFloat(document.getElementById('preco-combustivel').value);
    const consumoEletrico = 0.1;

    const bandeira = document.getElementById('preco-eletricidade');
    const precoEletricidade = parseFloat(bandeira.value).toFixed(2);
  
    if (isNaN(distancia) || isNaN(consumoCombustivel) || isNaN(precoCombustivel) || isNaN(consumoEletrico) || isNaN(precoEletricidade)) {
      alert('Por favor, preencha todos os campos com valores válidos.');
      return;
    }
  
    const custoCombustivel = (distancia / consumoCombustivel) * precoCombustivel;
    const custoEletricidade = (distancia * consumoEletrico) * (precoEletricidade/100);
    const economia = custoCombustivel - custoEletricidade
  
    document.getElementById('custo-combustivel').innerText = `R$ ${custoCombustivel.toFixed(2)}`;
    document.getElementById('custo-eletrico').innerText = `R$ ${custoEletricidade.toFixed(2)}`;
    document.getElementById('economia').innerText = `R$ ${economia.toFixed(2)}`;

  }
  
/*
  consumoEletrico = 0.1 Kw/Km => 30Kw / 302 km
  preço da eletricidade = Kw/h

  O valor do Kw/h pode variar de acordo com a bandeira tarifária vigente e região

  


*/