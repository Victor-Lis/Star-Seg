# Star Seg - Gerenciador de Contatos

Este é um sistema completo de gerenciamento de contatos construído com React/Next.js, oferecendo uma interface moderna e intuitiva para organizar sua lista de contatos profissionais e pessoais.

## 🚀 Funcionalidades

### Gestão de Contatos
- **Cadastro Completo:**
  - Nome, telefone, email e dados pessoais
  - Upload de foto de perfil com preview
  - Armazenamento de imagens no Firebase Storage
  - Endereço completo via integração ViaCEP
  - Validação em tempo real dos campos

### Interface
- **Listagem Dinâmica:**
  - Cards interativos com foto e informações principais
  - Pesquisa e filtros avançados
  - Ordenação por nome, data ou categoria
  - Paginação automática
  
### Funcionalidades Avançadas
- Visualização detalhada em modal
- Sistema de edição com auto-preenchimento
- Exclusão com confirmação
- Interface totalmente responsiva
- Dark/Light mode
- Cache de dados para performance

## 🛠 Tecnologias Utilizadas

- **Frontend:**
  - [Next.js 15](https://nextjs.org/) - Framework React com SSR
  - [React 19](https://react.dev/) - Biblioteca UI
  - [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
  - [Tailwind CSS](https://tailwindcss.com/) - Estilização
  - [Shadcn/ui](https://ui.shadcn.com/) - Componentes UI

- **Formulários e Validação:**
  - [React Hook Form](https://react-hook-form.com/) - Gestão de formulários
  - [Zod](https://zod.dev/) - Schemas de validação

- **Armazenamento:**
  - [Firebase Storage](https://firebase.google.com/docs/storage) - Upload de imagens

- **APIs:**
  - [ViaCEP API](https://viacep.com.br/) - Consulta de endereços

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas
│   ├── contacts/          # Funcionalidades de contatos
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes base
│   └── forms/            # Componentes de formulário
├── hooks/                # Custom hooks
├── lib/                  # Configurações e utilitários
├── schemas/              # Schemas de validação
└── types/                # Tipos TypeScript
```

## 🚦 Começando

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/star-seg.git
cd star-seg
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Configure o Firebase:**
- Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
- Ative o Storage no console
- Configure as regras de segurança

4. **Configure as variáveis de ambiente:**
Crie um arquivo `.env.local` com:
```bash
NEXT_PUBLIC_API=sua-api-url
NEXT_PUBLIC_API_KEY=sua-api-key
NEXT_PUBLIC_AUTH_DOMAIN=seu-auth-domain
NEXT_PUBLIC_PROJECT_ID=seu-project-id
NEXT_PUBLIC_STORAGE_BUCKET=seu-storage-bucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=seu-sender-id
NEXT_PUBLIC_APP_ID=seu-app-id
NEXT_PUBLIC_MEASUREMENT_ID=seu-measurement-id
```

5. **Inicie o servidor:**
```bash
npm run dev
# ou
yarn dev
```

## 📝 Scripts Disponíveis

- `npm run dev` - Ambiente de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código
- `npm run test` - Executa testes

## 👥 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Victor Lis**
- Github: [@Victor-Lis](https://github.com/Victor-Lis)
- LinkedIn: [Victor Lis](https://www.linkedin.com/in/victor-lis-bronzo)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

📧 Para sugestões, dúvidas ou feedbacks, entre em contato: [victorlisbronzo1@gmail.com]