# Teste Delliv - TrackingHub
> Aplicativo de rastreio de entregas


## Inicialização do Backend
> Para o Backend ser inicializado siga os seguintes comandos

+ Instalação de dependencias

      npm install
  
+ Criação do container com o Banco de Dados

      docker compose up
  
+ Rodar o projeto localmente

        npm run start


## Inicialização do FrontEnd
> Para o FrontEnd ser inicializado siga os seguintes comandos

+ Instalação de depencias

      npm install

+ Criação de container

      docker compose up

+ Rodar o projeto
  
  + Para rodar o projeto espere o container ser criado. Apos a criação do container acesse o endereço

        localhost:3000
    
+ Usuario para fazer o Login

      email: usuario@usuario.com
      senha: 12345
  
## Prototipo 
> Para acessar o prototipo, clique no Link a baixo

https://www.figma.com/file/xxdtfFWkvQUWphYapMJb6v/Delliv-Test?type=design&node-id=0%3A1&mode=design&t=XQlObYhcrZfgtWjq-1

## Observações Gerais
> Desenvolvi uma versão de Login com o __Redux__, mas como apareceram muitos bugs e o tempo estava curso, optei por tira-lo e usar o hook __UseState__ para gerenciar o estado local da aplicação.
