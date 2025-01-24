const key = '35a711eeaf3e45ec614edc2bd4d6f377';


// modulo 4 - troca de imagens. 
function alteraImagen(dados){
const fundoImage = document.querySelector(".left-info")
const iconePrincipal = document.querySelector("#icone-principal")

if(dados.weather[0].description === 'ensolarado'){
    fundoImage.style.backgroundImage = 'url(./assets/images/ensolarado.jpg)'
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-sun')

}if(dados.weather[0].description === 'nublado'){
    fundoImage.style.backgroundImage = 'url(./assets/images/nublado.jpg)'
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud')

}if(dados.weather[0].description === 'céu limpo'){
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud')
    fundoImage.style.backgroundImage = 'url(./assets/images/ceulimpo.jpg)'
    
}if(dados.weather[0].description === 'trovoadas'){
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud-lightning')
    fundoImage.style.backgroundImage = 'url(./assets/images/chuvoso.jpg)'

}if(dados.weather[0].description === 'nuvens dispersas'){
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud')
    fundoImage.style.backgroundImage = 'url(./assets/images/nuvens.jpg)'

}if(dados.weather[0].description === 'chuva leve'){
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud-drizzle')
    fundoImage.style.backgroundImage = 'url(./assets/images/chuvoso.jpg)'

}if(dados.weather[0].description === 'chuva moderada'){
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud-rain')
    fundoImage.style.backgroundImage = 'url(./assets/images/chuvoso.jpg)'
    
}if(dados.weather[0].description === 'algumas nuvens'){
    iconePrincipal.classList.remove('bxs-leaf')
    iconePrincipal.classList.add('bx-cloud')
    fundoImage.style.backgroundImage = 'url(./assets/images/nuvens.jpg)'
}
}




// modulo 3 - datas do sistema
function obterNomeMesEDiaDaSemana() {
    const data = new Date();
    const mes = data.getMonth(); 
    const diaSemana = data.getDay(); 

    let nomeMes;
    let nomeDiaSemana;

    
    switch (mes) {
        case 0: nomeMes = "Janeiro"; break;
        case 1: nomeMes = "Fevereiro"; break;
        case 2: nomeMes = "Março"; break;
        case 3: nomeMes = "Abril"; break;
        case 4: nomeMes = "Maio"; break;
        case 5: nomeMes = "Junho"; break;
        case 6: nomeMes = "Julho"; break;
        case 7: nomeMes = "Agosto"; break;
        case 8: nomeMes = "Setembro"; break;
        case 9: nomeMes = "Outubro"; break;
        case 10: nomeMes = "Novembro"; break;
        case 11: nomeMes = "Dezembro"; break;
        default: nomeMes = "Mês inválido";
    }

    
    switch (diaSemana) {
        case 0: nomeDiaSemana = "Domingo"; break;
        case 1: nomeDiaSemana = "Segunda"; break;
        case 2: nomeDiaSemana = "Terça"; break;
        case 3: nomeDiaSemana = "Quarta"; break;
        case 4: nomeDiaSemana = "Quinta"; break;
        case 5: nomeDiaSemana = "Sexta"; break;
        case 6: nomeDiaSemana = "Sábado"; break;
        default: nomeDiaSemana = "Dia inválido";
    }

    document.querySelector("#dia-esc").innerHTML = `${nomeDiaSemana}`

    document.querySelector("#data").innerText = `${data.getDate()}  ${nomeMes}  ${data.getFullYear()}`;
}

obterNomeMesEDiaDaSemana();



// modulo 2 - altera a exibição de dados na tela
function exibirdados(dados){
    document.querySelector('#cidade').innerHTML = `${dados.name}, ${dados.sys.country}`
    document.querySelector("#descript").innerHTML = `${dados.weather[0].description.toUpperCase()}`
    document.querySelector("#temp").innerHTML = `${dados.main.temp
    .toFixed(0)}`
    document.querySelector("#valor-pre").innerHTML = `${dados.main.pressure}`
    document.querySelector("#valor-umi").innerHTML = `${dados.main.humidity}`
    document.querySelector("#valor-ven").innerHTML = `${dados.wind.speed}`


}

// modulo 1 - chamar a API utilizada (OpenWeather) 
async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());
     exibirdados(dados);
     alteraImagen(dados);

     console.log(dados)
}

function pesquisar() {
    const input = document.querySelector("#txt-user");
    let cidade = input.value
    input.value = ""
    
    buscarcidade(cidade);
}