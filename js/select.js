/* 
const endereco = document.querySelector('#endereco');

const sp = `Pinheiros: 
Av. Dr. Gastão Vidigal, 1450 - Vila Leopoldina, São Paulo`;
const sp1 = 'Jardim Europa: \n Avenida Europa, 444 - Jardim Europa, São Paulo';
const rj = 'Av. das Américas, 12.221 - Barra da Tijuca, Rio de Janeiro'
const bsb = 'SIA Trecho 01 lote, 290/320 - Guará, Brasília - Distrito Federal'
const cwb = 'Rua Marechal Floriano Peixoto, 4043 - Parolin , Curitiba - Paraná'
const rec = 'Av. Marechal Mascarenhas de Moraes, 1967 - Imbiribeira, Recife - Pernambuco';
const poa = 'Av. Ceará, 444 - São João, Porto Alegre - Rio Grande do Sul';
const flor = 'R. Fúlvio Aducci, 416 - Estreito, Florianópolis - Santa Catarina';
const cities = {sp, rj, bsb, cwb,rec, poa, flor}
const city = document.getElementById('city');
const cityOpt = city.options;
const horarios = document.querySelector('#horario').options;


console.log(sp)
output = cityOpt[city.selectedIndex].textContent

setInterval(function() {
    if (output = cityOpt[city.selectedIndex].value == 'sp'){
        endereco.textContent = (sp + '\n' + sp1);
    }
    if (output = cityOpt[city.selectedIndex].value == 'rj'){
        endereco.textContent = rj;
    }
    if (output = cityOpt[city.selectedIndex].value == 'bsb'){
        endereco.textContent = bsb;
    }
    if (output = cityOpt[city.selectedIndex].value == 'cwb'){
        endereco.textContent = cwb;
    }
    if (output = cityOpt[city.selectedIndex].value == 'rec'){
        endereco.textContent = rec;
    }
    if (output = cityOpt[city.selectedIndex].value == 'poa'){
        endereco.textContent = poa;
    }
    if (output = cityOpt[city.selectedIndex].value == 'flor'){
        endereco.textContent = flor;
    }
    },500)
/* 




const teste = () => {
output = cityOpt[city.selectedIndex].textContent
endereco.textContent = output;
}
const address = () => {
    output = cityOpt[city.selectedIndex].textContent
    const asArray = Object.entries(cities);
    console.log(asArray);
    filtered = asArray.split();
    console.log(filtered)
    //filtered = asArray.filter(([key, value]) => value == output);
    //endereco.textContent = filtered;
    //console.log(output)
    
}

    //setInterval(address(), 500)
   
        
         */
    
