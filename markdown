# 📝 Task API - Node.js + MongoDB

Uma API RESTful simples para gerenciar tarefas (Tasks), desenvolvida com **Node.js**, **Express**, e **MongoDB**. Conta com funcionalidades CRUD, marcação de tarefas como completas, e importação em massa via **arquivo CSV**. 🚀

---

## ⚙️ Funcionalidades

- ✅ Criar uma nova task
- 📋 Listar todas as tasks
- 🔄 Atualizar uma task pelo `id`
- ❌ Remover uma task pelo `id`
- ✔️ Marcar uma task como completa pelo `id`
- 📁 Importar tasks em massa via arquivo CSV

---

## 📦 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Multer (upload de arquivos)
- csv-parser (leitura de CSV)

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
- git clone https://github.com/seu-usuario/task-api.git
- cd task-api
- Método | Rota | Descrição
- POST | /tasks | Criar uma nova task
- GET | /tasks | Listar todas as tasks
- PUT | /tasks/:id | Atualizar uma task pelo ID
- DELETE | /tasks/:id | Remover uma task pelo ID
- PATCH | /tasks/:id/complete | Marcar uma task como completa
- POST | /tasks/import | Importar tasks via arquivo CSV

🤝 Contribuição
- Sinta-se livre para abrir issues, sugerir melhorias ou enviar PRs! Toda ajuda é bem-vinda. 😊