// Requisições iniciais
async function getOlympicRankByName() {
    try {
        const response = await fetch('https://apis.codante.io/olympic-games/countries')
        const orders = await response.json()
        let name_country = []
        for (let i = 0; i<31; i++){
            name_country.push(orders.data[i].name);
        } 
        return name_country;    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function getCountries() {
    let top30 = await getOlympicRankByName();
    console.log(top30);
}

