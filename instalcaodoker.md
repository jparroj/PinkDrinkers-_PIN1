
### Certifique-se de que o Docker esteja instalado em sua máquina. 
### Você pode baixar o Docker Desktop em https://www.docker.com/products/docker-desktop.
### No VScode
Abra uma janela do terminal e faça login no Docker Hub usando o comando:
```
docker login
```
Isso solicitará suas credenciais do Docker Hub. Insira seu nome de usuário e senha do Docker Hub.

Baixe a imagem do contêiner Postgres do Docker Hub usando o comando:
```
docker pull nome_do_usuario/nome_da_imagem
```
Substitua "nome_do_usuario" e "nome_da_imagem" pelo nome do usuário e o nome da imagem correspondente que você deseja baixar. Por exemplo:
```
docker pull myusername/my-postgres-image
```
Execute um contêiner Postgres a partir da imagem baixada com o seguinte comando:

```
docker run --name nome_do_contêiner -p 5432:5432 -e POSTGRES_PASSWORD=sua_senha -d nome_do_usuario/nome_da_imagem
```

Substitua "nome_do_contêiner", "sua_senha", "nome_do_usuario" e "nome_da_imagem" pelos valores correspondentes. Por exemplo:
```
docker run --name my-postgres-container -p 5432:5432 -e POSTGRES_PASSWORD=senha_do_banco_de_dados -d myusername/my-postgres-image
```
Isso criará e iniciará um contêiner Postgres com o nome especificado, mapeando a porta 5432 do contêiner para a porta 5432 
da máquina host e configurando a senha do banco de dados com o valor especificado.
Agora você pode se conectar ao banco de dados Postgres

Poderão baixar a imagem do Docker Hub usando o comando docker pull usuario_do_dockerhub/nome_da_imagem. Por exemplo:

```
docker pull myusername/my-postgres-image
```