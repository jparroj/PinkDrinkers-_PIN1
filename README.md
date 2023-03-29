## Dependências

### Frontend (Cliente-View)

- React: biblioteca JavaScript para construir interfaces de usuário.
- React-DOM: biblioteca para renderizar a interface de usuário no navegador.
- React-Router-DOM: biblioteca para gerenciar as rotas no lado do cliente.
- Axios: biblioteca para fazer solicitações HTTP para o servidor.

```
npm install react react-dom react-router-dom axios
```

### Backend (Servidor-Server)

- Express: framework JavaScript para construir o servidor HTTP.
- Body-Parser: middleware para analisar as solicitações HTTP.
- Cors: middleware para permitir solicitações HTTP de diferentes origens.
- Pg: biblioteca para se conectar ao banco de dados PostgreSQL.
- Prisma: ORM (Object-Relational Mapping) para definir e executar consultas ao banco de dados.

```
npm install express body-parser cors pg prisma
```

### Desenvolvimento

- Nodemon: biblioteca para reiniciar automaticamente o servidor sempre que houver alterações no código.
- Concurrently: biblioteca para executar o servidor e o cliente simultaneamente.
```
npm install nodemon concurrently --save-dev
```
- .env: contém as variáveis de ambiente que serão usadas na aplicação
```
npm install dotenv
```

Obs.: A pasta node_modules está no arquivo .gitignore, portanto, é necessário executar o comando ```npm install ou yarn install``` para instalar as dependências antes de executar o projeto

#### Powered by: Lucas, Tobias, Breno, João

