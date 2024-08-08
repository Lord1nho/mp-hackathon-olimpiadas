// FUNÇÃO BÁSICA PARA BUSCAR PAÍSES DAS OLIMPÍADAS
async function getOlympicRankByName() {
    try {
        const response = await fetch('https://apis.codante.io/olympic-games/countries')
        const orders = await response.json()
        let name_country = []
        for (let i = 0; i<30; i++){
            name_country.push(orders.data[i]);
        } 
        return name_country;    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



// async para pegar os países e criar a tabela ao carregar a página.
async function getCountries() {
    let top30 = await getOlympicRankByName();
    let teste = document.querySelector('#medal_table');
    let line = ''
    for (let i = 0; i < top30.length; i++) {
        if (top30[i].name == "Brasil") {
            line += `<tr class="brasil_position">
        <td class="quant_medals">${top30[i].rank}</td>
        <td><img src=${top30[i].flag_url}>${top30[i].name}</td>
        <td class="quant_medals">${top30[i].gold_medals}</td>
        <td class="quant_medals">${top30[i].silver_medals}</td>
        <td class="quant_medals">${top30[i].bronze_medals}</td>
        <td class="quant_medals">${top30[i].total_medals}</td>
        </tr>`;
        } else {
            line += `
            <tr>
            <td class="quant_medals">${top30[i].rank}</td>
            <td><img src=${top30[i].flag_url}>${top30[i].name}</td>
            <td class="quant_medals">${top30[i].gold_medals}</td>
            <td class="quant_medals">${top30[i].silver_medals}</td>
            <td class="quant_medals">${top30[i].bronze_medals}</td>
            <td class="quant_medals">${top30[i].total_medals}</td>
            </tr>`;
        }
       
    }    

    teste.innerHTML += line;
    console.log(teste);
}

getCountries();

