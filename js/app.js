// Selecao de elementos
console.log('aopa')

const multiplacationForm = document.querySelector("#multiplicador-form");
const numberInput = document.querySelector("#number");
const multiplacationInput = document.querySelector("#multiplicador");
const multiplicationTable = document.querySelector("#multi-operacoes");
const multiplacationTitle = document.querySelector("#title-table span")
//Funcões
 const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;

        const template = `<div class="row">
             <div class="operacao">${number} x ${i} = </div>
             <div class="resultado">${result}</div>
            </div>`;

        const  parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row);
             
        multiplacationTitle.innerText = number;
    };
 };

//Eventos

multiplacationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplacationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;


    createTable(multiplicationNumber, multiplicatorNumber);
})