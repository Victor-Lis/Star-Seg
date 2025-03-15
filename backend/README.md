# Star Seg API

API REST desenvolvida com Fastify e TypeScript para gerenciamento de usuários, utilizando PostgreSQL como banco de dados e Drizzle ORM para manipulação dos dados.

## Tecnologias

- Fastify (Framework Web)
- TypeScript
- PostgreSQL (Banco de Dados)
- Drizzle ORM
- Zod (Validação de Schemas)

## Estrutura do Projeto

```
src/
├── @types/                  # Definições de tipos TypeScript
│   └── userController/      # Tipos para o controller de usuários
├── config/
│   └── database.ts         # Configuração da conexão com PostgreSQL
├── controllers/
│   └── index.ts           # Controllers para gerenciamento de requisições
├── models/
│   └── index.ts           # Modelos e schemas do Drizzle ORM
├── routes/
│   └── index.ts           # Definição das rotas da API
├── schemas/
│   ├── createUser.ts      # Schema de validação para criação
│   ├── deleteUser.ts      # Schema de validação para deleção
│   ├── getUser.ts         # Schema de validação para busca
│   └── updateUser.ts      # Schema de validação para atualização
├── services/
│   └── index.ts           # Regras de negócio e lógica da aplicação
└── app.ts                 # Entrada da aplicação
```

## Funcionalidades

### Usuários
- **GET /** - Lista todos os usuários
- **GET /:id** - Busca usuário por ID
- **POST /** - Cria novo usuário
- **PATCH /** - Atualiza usuário existente
- **DELETE /** - Remove usuário

### Modelo de Usuário
```typescript
{
  id: uuid,                    // ID único (gerado automaticamente)
  name: string,               // Nome do usuário
  phone: string,              // Telefone (13 caracteres)
  email: string,              // Email (único)
  profilePicture?: string,    // Foto de perfil (opcional)
  cep: string,               // CEP (8 caracteres)
  state: string,             // Estado (2 caracteres)
  city: string,              // Cidade
  neighborhood: string,       // Bairro
  street: string,            // Rua
  number: number,            // Número
  complement?: string,       // Complemento (opcional)
  createdAt: timestamp      // Data de criação (automático)
}
```

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/star-seg-backend.git
cd star-seg-backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL=sua_url_do_postgres
PORT=3001
HOST=0.0.0.0
```

4. Execute as migrações:
```bash
npm run migrate
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto
- `npm start` - Inicia o servidor em produção
- `npm run generate` - Gera migrações do Drizzle
- `npm run migrate` - Executa migrações pendentes
- `npm run studio` - Abre interface do Drizzle Studio

## Validações

Utilizamos Zod para validar os dados de entrada:
- Telefone deve ter 13 caracteres
- Email deve ser válido e único
- CEP deve ter 8 caracteres
- Estado deve ter 2 caracteres
- Campos obrigatórios não podem estar vazios

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3001`

## Contribuição

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.