# Fastify PostgreSQL App

Este projeto é uma aplicação web construída com Fastify, TypeScript e PostgreSQL, utilizando o Drizzle ORM para gerenciar a interação com o banco de dados. Abaixo estão as principais características e estrutura do projeto.

## Estrutura do Projeto

```
fastify-postgres-app
├── src
│   ├── app.ts               # Ponto de entrada da aplicação
│   ├── config
│   │   └── database.ts      # Configuração da conexão com o PostgreSQL
│   ├── controllers
│   │   └── index.ts         # Controladores para lidar com requisições
│   ├── models
│   │   └── index.ts         # Modelos de dados para o Drizzle ORM
│   ├── routes
│   │   └── index.ts         # Configuração das rotas da aplicação
│   ├── schemas
│   │   └── index.ts         # Esquemas de validação para requisições
│   └── services
│       └── index.ts         # Serviços de lógica de negócios
├── drizzle
│   ├── migrations            # Arquivos de migração do banco de dados
│   └── schema.ts            # Definição do esquema do banco de dados
├── drizzle.config.ts        # Configuração do Drizzle ORM
├── package.json              # Configuração do npm
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd fastify-postgres-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:

```bash
npm run start
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.