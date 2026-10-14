# GameHub 🎮

Plataforma web desenvolvida em Angular para gerenciamento e catálogo de jogos eletrónicos, implementada sem backend e com dados centralizados em memória através de Services.

## 🚀 Funcionalidades
- **Página Inicial (`/`):** Apresenta o nome da plataforma, resumo, destaques e indicadores dinâmicos do total de jogos e jogos gratuitos.
- **Catálogo de Jogos (`/jogos`):** Listagem completa utilizando `@for`, com barra de busca por nome, filtro por categoria e mensagens condicionais com `@if` caso não haja resultados.
- **Detalhes do Jogo (`/jogos/:id`):** Consulta individual de jogos utilizando parâmetros de rota (`ActivatedRoute`) e tratamento de erro ("Jogo não encontrado").
- **Cadastro de Jogos (`/cadastrar`):** Formulário interativo com `[(ngModel)]` e validações (nome obrigatório, preço não negativo e avaliação de 0 a 5) que adiciona novos registos via Service sem recarregar a página.
- **Sobre o Projeto (`/sobre`):** Descrição detalhada do sistema, identificação do aluno, disciplina e tecnologias utilizadas.

## 🛠️ Tecnologias Utilizadas
- **Angular** (Standalone Components)
- **TypeScript**
- **HTML5 & CSS3**
- **Angular Router**

## ⚙️ Instruções de Execução

Certifica-te de ter o **Node.js** e o **Angular CLI** instalados no teu computador.

1. Clona este repositório ou descarrega os ficheiros (lembrando que a pasta `node_modules` não é incluída no repositório).
2. Abre o terminal na pasta raiz do projeto (`GAMESHUB`).
3. Instala as dependências executando o comando:
   ```bash
   npm install
