/* ============================================
   resolver-chamados.js - Logica da tela de resolucao
   ============================================ */

(function() {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser') || 'null');
    if (!loggedUser || loggedUser.role !== 'admin') {
        window.location.href = 'login.html';
        return;
    }

    const container = document.getElementById('chamadosContainer');
    const filterStatus = document.getElementById('filterStatus');
    const filterPrioridade = document.getElementById('filterPrioridade');
    const filterSearch = document.getElementById('filterSearch');
    const btnLimpar = document.getElementById('btnLimparFiltros');
    const btnLogout = document.getElementById('btnLogout');
    const modalUsuario = document.getElementById('modalUsuario');
    const closeModal = document.getElementById('closeModalUsuario');
    const btnNovoUsuario = document.getElementById('btnNovoUsuario');
    const formNovoUsuario = document.getElementById('formNovoUsuario');
    const msgNovoUsuario = document.getElementById('msgNovoUsuario');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

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
        window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function getChamados() {
        return JSON.parse(localStorage.getItem('chamados') || '[]');
    }

    function saveChamados(chamados) {
        localStorage.setItem('chamados', JSON.stringify(chamados));
    }

    function render() {
        const statusFilter = filterStatus.value;
        const prioridadeFilter = filterPrioridade.value;
        const search = filterSearch.value.toLowerCase().trim();

        let chamados = getChamados();

        if (statusFilter !== 'todos') {
            chamados = chamados.filter(c => c.status === statusFilter);
        }
        if (prioridadeFilter !== 'todas') {
            chamados = chamados.filter(c => c.prioridade === prioridadeFilter);
        }
        if (search) {
            chamados = chamados.filter(c =>
                c.titulo.toLowerCase().includes(search) ||
                c.numero.toLowerCase().includes(search)
            );
        }

        chamados.sort((a, b) => new Date(b.dataAbertura) - new Date(a.dataAbertura));

        if (chamados.length === 0) {
            container.innerHTML =
                `<p style="text-align:center;color:#4a637f;padding:2rem;">Nenhum chamado encontrado.</p>`;
            return;
        }

        let html = '';
        chamados.forEach(c => {
            const isResolvido = c.status === 'Resolvido';
            html += `
                <div class="chamado-item ${isResolvido ? 'resolvido' : ''}">
                    <div class="chamado-info">
                        <strong>${c.titulo}</strong>
                        <div class="meta">
                            <span>#${c.numero}</span>
                            <span><i class="far fa-user"></i> ${c.solicitante}</span>
                            <span><i class="far fa-calendar-alt"></i> ${new Date(c.dataAbertura).toLocaleDateString()}</span>
                            <span><i class="fas fa-tag"></i> ${c.categoria}</span>
                            <span><i class="fas fa-flag"></i> ${c.prioridade}</span>
                            <span class="badge-status ${isResolvido ? 'badge-resolvido' : 'badge-aberto'}">${c.status}</span>
                        </div>
                        ${c.descricao ? `<div style="margin-top:0.3rem;color:#4a637f;font-size:0.9rem;">${c.descricao.substring(0,120)}${c.descricao.length>120?'...':''}</div>` : ''}
                        ${isResolvido && c.resolvidoPor ? `<div style="font-size:0.8rem;color:#065f46;">Resolvido por ${c.resolvidoPor} em ${new Date(c.dataResolucao).toLocaleDateString()}</div>` : ''}
                    </div>
                    <div class="chamado-actions">
                        ${!isResolvido ? `<button class="btn-success" data-id="${c.id}"><i class="fas fa-check"></i> Resolver</button>` : ''}
                        <button class="btn-danger" data-id="${c.id}" data-action="delete"><i class="fas fa-trash"></i> Excluir</button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        container.querySelectorAll('.btn-success').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = Number(this.dataset.id);
                resolverChamado(id);
            });
        });
        container.querySelectorAll('.btn-danger[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = Number(this.dataset.id);
                if (confirm('Tem certeza que deseja excluir este chamado?')) {
                    excluirChamado(id);
                }
            });
        });
    }

    function resolverChamado(id) {
        let chamados = getChamados();
        const index = chamados.findIndex(c => c.id === id);
        if (index === -1) return;
        chamados[index].status = 'Resolvido';
        chamados[index].resolvidoPor = loggedUser.username;
        chamados[index].dataResolucao = new Date().toISOString();
        saveChamados(chamados);
        showToast('Chamado marcado como resolvido!');
        render();
    }

    function excluirChamado(id) {
        let chamados = getChamados();
        chamados = chamados.filter(c => c.id !== id);
        saveChamados(chamados);
        showToast('Chamado excluído.', true);
        render();
    }

    formNovoUsuario.addEventListener('submit', function(e) {
        e.preventDefault();
        msgNovoUsuario.textContent = '';

        const username = document.getElementById('novoUsername').value.trim();
        const password = document.getElementById('novoPassword').value.trim();
        const role = document.getElementById('novoRole').value;

        if (!username || !password) {
            msgNovoUsuario.textContent = 'Preencha todos os campos.';
            return;
        }
        if (password.length < 4) {
            msgNovoUsuario.textContent = 'A senha deve ter no mínimo 4 caracteres.';
            return;
        }

        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.username === username)) {
            msgNovoUsuario.textContent = 'Usuário já existe.';
            return;
        }

        users.push({ username, password, role });
        localStorage.setItem('users', JSON.stringify(users));
        showToast(`Usuário ${username} cadastrado com sucesso!`);
        modalUsuario.classList.remove('active');
        formNovoUsuario.reset();
        msgNovoUsuario.textContent = '';
    });

    btnNovoUsuario.addEventListener('click', () => modalUsuario.classList.add('active'));
    closeModal.addEventListener('click', () => modalUsuario.classList.remove('active'));
    modalUsuario.addEventListener('click', function(e) {
        if (e.target === this) modalUsuario.classList.remove('active');
    });

    btnLogout.addEventListener('click', function() {
        sessionStorage.removeItem('loggedUser');
        window.location.href = 'login.html';
    });

    filterStatus.addEventListener('change', render);
    filterPrioridade.addEventListener('change', render);
    filterSearch.addEventListener('input', render);
    btnLimpar.addEventListener('click', function() {
        filterStatus.value = 'todos';
        filterPrioridade.value = 'todas';
        filterSearch.value = '';
        render();
    });

    render();
})();
