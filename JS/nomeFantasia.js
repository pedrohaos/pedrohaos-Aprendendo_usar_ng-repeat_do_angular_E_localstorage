const tipoCliente = document.querySelector("#tipoCliente");
const nomeFantasia = document.querySelector("#nomeFantasia").parentElement;

function mostrarNomeFantasia(){
    if(tipoCliente.value === "fisica"){
        nomeFantasia.style.display = "none";
    } else {
        nomeFantasia.style.display = "grid";
    }
}

mostrarNomeFantasia();

tipoCliente.addEventListener("change", mostrarNomeFantasia); 
