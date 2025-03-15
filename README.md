# Star Seg - Gerenciador de Contatos

Uma aplicação completa para gerenciamento de contatos, construída com Next.js e Fastify.

<br>

## 📚 Estrutura do Projeto

```
star-seg/
├── frontend/           # Aplicação Next.js
│   ├── src/
│   │   ├── app/       # Rotas e páginas
│   │   ├── components/# Componentes React
│   │   ├── hooks/     # Hooks customizados
│   │   ├── schemas/   # Schemas de validação
│   │   └── lib/       # Configurações e utilitários
│   └── public/        # Arquivos estáticos
│
└── backend/           # API Fastify
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── schemas/
    │   └── services/
    └── drizzle/      # Migrações do banco
```

<br>

## 🚀 Tecnologias

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Hook Form
- Zod
- Firebase Storage

<br>

### Backend
- Fastify
- TypeScript
- PostgreSQL
- Drizzle ORM
- Zod

<br>

## 🛠️ Começando

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- Firebase project (para storage)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/star-seg.git
cd star-seg
```

2. Instale as dependências do frontend
```bash
cd frontend
npm install
```

3. Configure as variáveis de ambiente do frontend
```env
NEXT_PUBLIC_API=http://localhost:3333
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
```

4. Instale as dependências do backend
```bash
cd ../backend
npm install
```

5. Configure as variáveis de ambiente do backend
```env
DATABASE_URL=sua_url_do_postgres
PORT=3333
```

6. Execute as migrações do banco
```bash
npm run push
```

<br>

## 🚀 Rodando o Projeto

### Frontend
```bash
cd frontend
npm run dev
```
Acesse: http://localhost:3000

### Backend
```bash
cd backend
npm run dev
```
API rodando em: http://localhost:3333

<br>

## 📱 Funcionalidades

- ✅ Cadastro de contatos
- ✅ Upload de fotos de perfil
- ✅ Listagem de contatos
- ✅ Edição de contatos
- ✅ Exclusão de contatos
- ✅ Integração com ViaCEP
- ✅ Validação de formulários
- ✅ Design responsivo

<br>

## 🌐 Deploy

### Frontend
O deploy automático do frontend é realizado na [Vercel](https://vercel.com). Você pode acessar a aplicação em: [https://star-seg.vercel.app](https://star-seg.vercel.app)

### Backend
O deploy automático do backend é realizado no [Render](https://render.com). A API está disponível em: [https://star-seg.onrender.com](https://star-seg.onrender.com)

<br>

## 👨‍💻 Autor

**Victor Lis**
- Github: [@Victor-Lis](https://github.com/Victor-Lis)
- LinkedIn: [Victor Lis](https://www.linkedin.com/in/victor-lis-bronzo)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

📧 Para sugestões, dúvidas ou feedbacks, entre em contato: [victorlisbronzo1@gmail.com]
