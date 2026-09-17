const db = require('./db');

async function criarTabela() {
    try {
        console.log('🔧 Criando tabela de usuários...');
        
        await db.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            senha VARCHAR(255) NOT NULL
        )`);

        console.log('✅ Tabela de "usuários" criada com sucesso (ou já existia)!');
    } catch (err) {
        console.error('🚩 Erro ao criar tabela de usuários:', err.message);
    } finally {
        process.exit();
    }
}

criarTabela();