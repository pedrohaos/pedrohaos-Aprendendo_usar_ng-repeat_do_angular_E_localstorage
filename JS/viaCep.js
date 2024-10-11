async function buscaEndereco(cep){
    const mensagemErro = document.querySelector('#erro');
    try{
        const consultCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
        const consultCEPComvertido = await consultCEP.json();
        if (consultCEPComvertido.erro){
            throw Error('CEP não existe')
        }

        const cidade = document.querySelector('#cidade');                                                                                
        const logradouro = document.querySelector('#endereco');                                                                          

        const bairro = document.querySelector('#bairro');                                 

        cidade.value = consultCEPComvertido.localidade;
        logradouro.value = consultCEPComvertido.logradouro
        bairro.value = consultCEPComvertido.bairro

        
    } catch(erro){
        mensagemErro?.insertAdjacentHTML('afterend', '<p style="color: red; padding-left: 15px;">CEP invalido.</p>') || '';
        console.log(erro)
    }
}

const cep = document.querySelector('#cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))