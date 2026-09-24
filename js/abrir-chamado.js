/* ============================================
   abrir-chamado.js - Logica da tela de abertura de chamado
   ============================================ */

(function() {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser') || 'null');
    if (!loggedUser) {
        window.location.href = 'login.html';
        return;
    }

    const form = document.getElementById('chamadoForm');
    const solicitante = document.getElementById('solicitante');
    const email = document.getElementById('email');
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');
    const prioridade = document.getElementById('prioridade');
    const categoria = document.getElementById('categoria');
    const anexo = document.getElementById('anexo');
    const fileName = document.getElementById('fileName');
    const btnSubmit = document.getElementById('btnSubmit');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    document.getElementById('logoutBtn').addEventListener('click', function() {
        sessionStorage.removeItem('loggedUser');
        window.location.href = 'login.html';
    });

    anexo.addEventListener('change', function() {
        fileName.textContent = this.files && this.files.length > 0 ? this.files[0].name : 'nenhum arquivo';
    });

    function showToast(msg, isError = false) {
        toastMessage.textContent = msg;
        toast.classList.add('show');
        const icon = toast.querySelector('i');
        if (isError) {
            icon.className = 'fas fa-exclamation-circle';
            icon.style.color = '#ffb347';
        } else {
            icon.className = 'fas fa-check-circle';
            icon.style.color = '#5bff8a';
        }
        clearTimeout(window.toastTimer);
        window.toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
    }

    function resetForm() {
        form.reset();
        fileName.textContent = 'nenhum arquivo';
        document.querySelectorAll('.form-group input, .form-group textarea, .form-group select')
            .forEach(el => el.style.borderColor = '');
    }

    function generateTicketNumber() {
        const now = new Date();
        const y = now.getFullYear().toString().slice(-2);
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        const rand = String(Math.floor(100 + Math.random() * 900));
        return `TI-${y}${m}${d}-${rand}`;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        let valid = true;
        const requiredFields = [solicitante, email, titulo, descricao];
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#d1453b';
                valid = false;
            } else {
                field.style.borderColor = '';
            }
        });
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() && !emailPattern.test(email.value.trim())) {
            email.style.borderColor = '#d1453b';
            valid = false;
        } else if (email.value.trim()) {
            email.style.borderColor = '';
        }

        if (!valid) {
            showToast('Preencha todos os campos obrigatórios corretamente.', true);
            return;
        }

        const formData = {
            id: Date.now(),
            numero: generateTicketNumber(),
            solicitante: solicitante.value.trim(),
            email: email.value.trim(),
            titulo: titulo.value.trim(),
            descricao: descricao.value.trim(),
            prioridade: prioridade.value,
            categoria: categoria.value,
            anexo: anexo.files && anexo.files.length > 0 ? anexo.files[0].name : null,
            dataAbertura: new Date().toISOString(),
            status: 'Aberto',
            resolvidoPor: null,
            dataResolucao: null
        };

        let chamados = JSON.parse(localStorage.getItem('chamados') || '[]');
        chamados.push(formData);
        localStorage.setItem('chamados', JSON.stringify(chamados));

        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        await new Promise(resolve => setTimeout(resolve, 300));

        showToast(`Chamado ${formData.numero} aberto com sucesso!`);
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> Abrir Chamado';
        resetForm();
    });

    document.querySelectorAll('.form-group input, .form-group textarea, .form-group select')
        .forEach(el => {
            el.addEventListener('input', function() {
                if (this.value.trim()) this.style.borderColor = '';
            });
            el.addEventListener('change', function() {
                if (this.value.trim()) this.style.borderColor = '';
            });
        });
})();
