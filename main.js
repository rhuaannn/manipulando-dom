window.console.log("eu sou o console")

const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const items = document.querySelector(".items");
const body = document.querySelector("body");
const erroMessage = document.querySelector(".msg");


submitButton.addEventListener("click", function (e) {
    e.preventDefault(); //impede o comportamento padrão

    const nameValue = nameInput.value; //pega os valores colocado no input
    const emailValue = emailInput.value;

    //se esses valores não tiverem preenchidos
    if (nameValue === "" || emailValue === "") {
        erroMessage.textContent = "digite os dados";
        erroMessage.classList = "error";
        
        setTimeout (() => {
        erroMessage.textContent = "";
        erroMessage.classList = "";
    }, 3000);
    return;
}

const li = document.createElement("li");
li.classList = "item";
li.innerHTML = `Nome: ${nameValue} <br>Email: ${emailValue}`;

items.appendChild(li);
nameInput.value = "";
emailInput.value = "";

//formulario fica vermelho quando está válido
myForm.style.background = "pink";

//muda a cor de fundo caso seja aceite os valores
body.style.background = "orange";

submitButton.style.background = "green";
submitButton.style.color = "writh"

    //muda o item com os valores acrescentados
 

});

