const API_URL = 'http://localhost:3000/usuarios';

document.getElementById('formCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = e.target.querySelector('button');
    const textoOriginal = btn.textContent;
    btn.textContent = 'Cadastrando...';
    btn.disabled = true;

    const payload = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };


try {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (res.ok) {
        document.getElementById('formCadastro').reset();
        carregarUsuarios();
        alert('Usuário criado com sucesso!');
    } else {
        alert('Erro: ' + data.erro);
    }
    } catch (error) {
    console.error('🚩 Falha na requisição:', error);
    alert('Falha ao conectar com o servidor.');
    } finally {
    btn.textContent = textoOriginal;
    btn.disabled = false;
    }
});

async function carregarUsuarios() {
   const output = document.getElementById('output');
   output.textContent = 'Carregando...';

   try {
    const res = await fetch(API_URL);
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
   } catch (error) {
    output.textContent = 'Erro de conexão com o Backend.';
   }
}

carregarUsuarios();