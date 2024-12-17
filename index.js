document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validação dos campos
    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return;
    }

    if (email === '') {
        alert('Por favor, preencha o campo E-mail.');
        return;
    }

    // Validação do formato do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Se tudo estiver correto, exibe uma mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    
});