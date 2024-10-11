const limpar = document.querySelector('#limpar');

    function limparLista(){
        localStorage.clear();
        location.reload();
    }

    limpar.addEventListener('click', limparLista);