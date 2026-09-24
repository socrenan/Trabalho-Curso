/* ============================================
   app.js - Logica de login do Sistema de Chamados TI
   ============================================ */

(function() {
    // Inicializa usuarios padrao se nao existirem
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            { username: 'admin', password: 'admin', role: 'admin' },
            { username: 'user', password: 'user', role: 'user' }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    // Exibe notificacao (toast) na tela
    function showToast(msg) {
        toastMessage.textContent = msg;
        toast.classList.add('show');
        clearTimeout(window.toastTimer);
        window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Valida login ao enviar o formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorMsg.textContent = '';

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const found = users.find(u =>
            u.username === username.value.trim() &&
            u.password === password.value.trim()
        );

        if (!found) {
            errorMsg.textContent = 'Usuario ou senha invalidos!';
            showToast('Credenciais incorretas');
            return;
        }

        sessionStorage.setItem('loggedUser', JSON.stringify({
            username: found.username,
            role: found.role
        }));

        if (found.role === 'admin') {
            window.location.href = 'resolver_chamados.html';
        } else {
            window.location.href = 'abrir_chamado.html';
        }
    });
})();
