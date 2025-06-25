```markdown
# Sistema de Gerenciamento de Moradores - Edifício Uberlândia Tower 🏢

Este repositório apresenta um projeto completo de sistema CRUD desenvolvido com a stack MERN (MongoDB, Express, React, Node.js). A aplicação foi construída como parte da disciplina de Linguagem de Programação para Internet da Uniube, com foco na administração dos moradores do fictício Edifício Uberlândia Tower.

---

## 📌 Funcionalidades

O sistema permite realizar todas as operações básicas de cadastro de moradores:

- ➕ Adicionar novos moradores com foto
- 📋 Listar todos os moradores
- ✏️ Editar informações
- 🗑️ Excluir registros

Cada morador possui os seguintes dados:

- Nome
- E-mail
- Endereço
- Imagem de perfil (armazenada localmente)

---

## 🛠 Tecnologias

### 🔷 Front-end
- React.js com Create React App
- React Router DOM
- Axios para requisições HTTP
- Bootstrap + CSS
- Toasts com React Hot Toast

### 🔶 Back-end
- Node.js
- Express.js
- MongoDB + Mongoose
- Uploads com Multer
- Variáveis de ambiente com Dotenv
- Middleware de CORS

---

## ⚙️ Como executar o projeto localmente

### Pré-requisitos
- Node.js instalado
- Servidor MongoDB rodando (pode ser local com MongoDB Compass)

### 1. Clone o projeto
```bash
git clone https://github.com/pedro-g100/mern-crud.git
cd mern-crud
```

### 2. Instale e execute o back-end
```bash
cd backend
npm install
node --watch index.js
```

### 3. Inicie o front-end
```bash
cd ../frontend
npm install
npm start
```

---

## 🔌 API - Endpoints e Formatos

Base URL: `http://localhost:7000/api`

| Método | Endpoint               | Descrição                          |
|--------|------------------------|------------------------------------|
| GET    | `/users`               | Lista todos os moradores           |
| GET    | `/user/:id`            | Detalha um morador específico      |
| POST   | `/user`                | Cria um novo morador (com imagem)  |
| PUT    | `/update/user/:id`     | Atualiza dados de um morador       |
| DELETE | `/delete/user/:id`     | Remove o morador da base de dados  |

**Exemplo de envio via POST (form-data):**
```json
{
  "name": "Joana Souza",
  "email": "joana@email.com",
  "address": "Av. Afonso Pena, 200",
  "image": (arquivo.jpg)
}
```

---

## 🧬 Organização do Projeto

```
crud-uberlandia-tower/
├── frontend/         # Aplicação React
│   ├── src/
│   │   ├── addUser/
│   │   ├── getUser/
│   │   └── updateUser/
├── backend/         # API Node.js
│   ├── controller/
│   ├── model/
│   ├── routes/
│   └── uploads/    # Armazena imagens enviadas
```

---

## 🗄 Banco de Dados

- Cada documento segue a seguinte estrutura:

```json
{
  "name": "Joana Souza",
  "email": "joana@email.com",
  "address": "Av. Afonso Pena, 200",
  "image": "/uploads/joana.jpg"
}
```

---

## 👥 Responsável

Este projeto foi desenvolvido por:

- **Pedro Guilherme (5162157)**

Universidade de Uberaba (Uniube) – Curso de Sistemas de Informação  
Disciplina: Linguagem de Programação para Internet
```