# 🔐 VF PassGen

Aplicação completa para geração de senhas seguras, com frontend em **React** e backend em **Node.js + Express**. Permite personalizar o comprimento e os tipos de caracteres da senha, com uma interface amigável e funcional.

---

## 📁 Estrutura do Projeto

```
vf-passgen/
├── backend/        # API Node.js para geração de senhas
├── frontend/       # Interface React
└── README.md       # Este arquivo
```

---

## 🚀 Funcionalidades

- Geração de senhas com critérios personalizáveis:
  - Comprimento (slider ou input)
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Símbolos
- Botão para copiar a senha
- Interface responsiva e interativa
- Backend com endpoint de geração

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- React
- Vite
- Zod
- Axios

### Backend:
- Node.js
- Express
- CORS

---

## 📦 Como executar o projeto localmente

### Pré-requisitos:
- Node.js instalado

---

### 1. Clone o repositório

```bash
git clone https://github.com/ViniciusFalcheti/VFPass-Password-Generator.git
cd vf-passgen
```

---

### 2. Rodando o Backend

```bash
cd backend
npm install
npm run dev
```

O backend será iniciado em `http://localhost:3333`

#### 🔄 Endpoint da API

```http
POST /generate
Content-Type: application/json
```

**Parâmetros da URL (query string):**

- `length`: número de caracteres da senha (ex: 8, 12, 16)
- `numbers`: `true` ou `false` (incluir números)
- `caps`: `true` ou `false` (incluir letras maiúsculas)
- `symbols`: `true` ou `false` (incluir símbolos especiais)

**Exemplo de requisição:**

```
GET http://localhost:3333/senha?length=12&numbers=true&caps=true&symbols=true
```

**Resposta:**

```json
{
  "password": "Ex@mp1e$Pwd"
}
```

---

### 3. Rodando o Frontend

```bash
cd ../frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

---

## 🧪 Exemplo de Uso

![image](https://github.com/user-attachments/assets/f997507e-588d-4683-a574-314540bfe0e3)

---

## 🙋 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

---

## 📫 Contato

Feito com 💻 por **[Seu Nome](https://github.com/ViniciusFalcheti)**  
Entre em contato: [viniciusfalcheti@gmail.com]
