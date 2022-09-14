window.console.log("eu sou o console")

const submitButton = document.querySelector("#submit-button");


const myForm = document.querySelector("#my-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const items = document.querySelector(".items");
const body = document.querySelector("body");


submitButton.addEventListener("click", function (e) {
    e.preventDefault(); //impede o comportamento padrão

    

    const nameValue = nameInput.value; //pega os valores colocado no input
    const emailValue = emailInput.value;

    //se esses valores não tiverem preenchidos
    if (nameValue === "" || emailValue === "") {
        return alert("Please fill out all the fields!"); //prencha todos os campos
    }

 
    //formulario fica vermelho quando está válido
    myForm.style.background = "pink";

    //muda a cor de fundo caso seja aceite os valores
    body.style.background = "orange";

    submitButton.style.background = "green";
    submitButton.style.color = "writh"

    //muda o item com os valores acrescentados
    items.children[0].textContent = nameValue;

});

