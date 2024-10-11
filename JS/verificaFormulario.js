const form = document.getElementById('formularioRegistro');
const salvarButton = document.getElementById('salvar');
const inputs = form.querySelectorAll('input');

function verificarInputs() {
    let todosPreenchidos = true;
    
    inputs.forEach(input => {
        if (input.id !== 'nomeFantasia' && input.value.trim() === '') {
            todosPreenchidos = false;
        }
    });

    salvarButton.disabled = !todosPreenchidos;

    if (todosPreenchidos) {
        salvarButton.classList.remove('btn-outline-secondary');
        salvarButton.classList.add('btn-outline-success');
    } else {
        salvarButton.classList.remove('btn-outline-success');
        salvarButton.classList.add('btn-outline-secondary');
    }
}

inputs.forEach(input => {
    input.addEventListener('input', verificarInputs);
});

verificarInputs();
