# Desafio - API Backend

Este repositório contém o código-fonte do backend (API) para um desafio de gerenciamento de funcionários.

## 🚀 Tecnologias Utilizadas (Backend)

* **Node.js:** Ambiente de execução do JavaScript no servidor.
* **NestJS:** Framework principal para a construção da API RESTful.
* **PostgreSQL:** Banco de dados relacional para armazenamento dos dados.
* **TypeORM:** ORM (Object-Relational Mapper) para fazer a "ponte" entre o código e o banco de dados.

## 🏁 Etapas Concluídas (Backend)

1.  **Configuração do Ambiente:**
    * Instalação do Node.js, NPM e da NestJS CLI.
    * Instalação do PostgreSQL e do pgAdmin.

2.  **Estrutura da API:**
    * Criação do projeto `desafio-api` com o NestJS.
    * Configuração do TypeORM para conectar ao banco de dados `desafio_viuzz_db`.

3.  **CRUD de Funcionários:**
    * Criação da entidade `Funcionario` (`id`, `nome`, `cidade`, `cargo`).
    * Criação automática da tabela `funcionarios` no banco.
    * Implementação do `FuncionariosService`:
        * `create()`: Criar novo funcionário.
        * `findAll()`: Listar todos os funcionários.
        * `findOne()`: Buscar um funcionário por ID.
        * `update()`: Atualizar um funcionário.
        * `remove()`: Deletar um funcionário.

4.  **Testes da API:**
    * Todos os endpoints do CRUD de funcionários foram testados com sucesso usando o **Insomnia**.
    * **POST /funcionarios** (Criar) -> Resposta `201 Created`.
    * **GET /funcionarios** (Ler Todos) -> Resposta `200 OK`.
    * **PATCH /funcionarios/:id** (Atualizar) -> Resposta `200 OK`.
    * **DELETE /funcionarios/:id** (Deletar) -> Resposta `200 OK`.