document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
    event.preventDefault();

    const tipoCliente = document.getElementById("tipoCliente").value;
    const cpfCnpj = document.getElementById("cpf-cnpj").value;
    const nomeRegistro  = document.getElementById("nomeRegistro").value;
    const nomeFantasia = document.getElementById("nomeFantasia").value;
    const cep = document.getElementById("cep").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;


    let registros = JSON.parse(localStorage.getItem("registros")) || [];

    const novoId = registros.length + 1;
    const idFormatado = novoId.toString().padStart(2, '0');
    
    const registro = {
        codigo: idFormatado,
        tipoCliente,
        cpfCnpj,
        nomeRegistro ,
        nomeFantasia,
        cep,
        endereco,
        bairro,
        cidade,
        telefone,
        email
    };

    registros.push(registro);

    localStorage.setItem("registros", JSON.stringify(registros));

    window.location.href = "index.html";
});
