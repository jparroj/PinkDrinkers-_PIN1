## PEGANDO A BRANCH

# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório do repositório
cd seu-repositorio

# Verifique as branches disponíveis
git branch

# Mude para a branch desejada
git checkout nome-da-branch

# Instale as dependências
npm install

# Rode o servidor
npm run dev


# Server

Este é um servidor Node.js para uma aplicação web.

## Dependências

- [@prisma/client](https://www.npmjs.com/package/@prisma/client) - ORM para comunicação com banco de dados
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para criptografia de senhas
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Alternativa ao `bcrypt` para ambientes com limitações de recursos
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware para parsear o corpo de requisições HTTP
- [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar o CORS
- [dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`
- [express](https://www.npmjs.com/package/express) - Framework para construção de aplicações web
- [nodemon](https://www.npmjs.com/package/nodemon) - Monitor de mudanças de arquivos para reiniciar o servidor automaticamente
- [pg](https://www.npmjs.com/package/pg) - Biblioteca para conexão com o PostgreSQL
- [prisma](https://www.npmjs.com/package/prisma) - ORM para comunicação com banco de dados

## Scripts

- `test`: Executa os testes da aplicação
- `dev`: Inicia o servidor em modo de desenvolvimento com o Nodemon
