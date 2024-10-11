document.getElementById('cpf-cnpj').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, '');

    if (input.length <= 11) {
        input = input.replace(/(\d{3})(\d)/, '$1.$2');
        input = input.replace(/(\d{3})(\d)/, '$1.$2');
        input = input.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
        input = input.replace(/^(\d{2})(\d)/, '$1.$2');
        input = input.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        input = input.replace(/\.(\d{3})(\d)/, '.$1/$2');
        input = input.replace(/(\d{4})(\d)/, '$1-$2');
    }

    e.target.value = input;
});

document.getElementById('cep').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, '');

    input = input.replace(/(\d{5})(\d)/, '$1-$2')

    e.target.value = input;
});

document.getElementById('telefone').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, '');

    if (input.length <= 10) {
        input = input.replace(/(\d{2})(\d)/, '($1) $2');
        input = input.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        input = input.replace(/(\d{2})(\d)/, '($1) $2');
        input = input.replace(/(\d{5})(\d)/, '$1-$2');
    }

    e.target.value = input;
});