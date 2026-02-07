
const form = document.querySelector('form')
const containerCep = document.querySelector('.container-cep')
const inputCep = document.querySelector('input[type="text"]')
const address = document.querySelector('.endereco')
const cepFormat = /^\d{5}\d{3}$/

const searchForAddress = event => {
    event.preventDefault()

    if(cepFormat.test(inputCep.value)){
        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
        .then(info => info.json())
        .then(infoData => address.innerHTML = JSON.stringify(infoData))
        .catch(err => console.error(err))
    }

}

const dataInputValidation = (event) => {
    const cepNumber = event.target.value.trim()
   
    const cepDefaultCaractere = /^\d+$/


    if (cepDefaultCaractere.test(cepNumber)) {
        inputCep.value.trim()
        inputCep.style.border = '2px solid #9acd32'
    }else{
        inputCep.style.border = '2px solid #ff0000'
        address.innerHTML = ""
    }

}

form.addEventListener('submit', searchForAddress)
inputCep.addEventListener('input', dataInputValidation)