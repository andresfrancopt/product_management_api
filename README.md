<h1 align="center">
  <br />
  <img
    src="./assets/icon.png"
    alt="Product Management API"
    width="150"
  />
  <br />
  <b>Product Management API</b>
  <br />
  <sub
    ><sup><b>(with Node.js and tested with Insomnia)</b></sup></sub
  >
  <br />
  <a
    href="https://github.com/andresfrancopt/product_management_api/actions/workflows/build.yml"
  >
    <img
      src="https://github.com/andresfrancopt/product_management_api/actions/workflows/build.yml/badge.svg"
      alt=""
    />
  </a>
  <a href="https://github.com/andresfrancopt/product_management_api/releases/latest">
    <img
      src="https://img.shields.io/github/v/release/andresfrancopt/product_management_api"
      alt="Latest Release"
    />
  </a>


### Product Management API Documentation

#### General Description
The Product Management API is a RESTful service designed to manage products within an inventory system. It provides endpoints to create, read, update, and delete product information. This API is built to be scalable, secure, and easy to integrate with other systems.

##### Objectives
- Provide a reliable and efficient way to manage product data.
- Ensure data integrity and security.
- Facilitate easy integration with other services and applications.

#### Functionalities
- Create new products.
- Retrieve product details.
- Update existing product information.
- Delete products from the inventory.

#### Technologies Used
- **Node.js**: JavaScript runtime for building the API
- **Express.js**: Web framework for Node.js (version 4.21.2)
- **Body-parser**: Middleware for parsing request bodies (version 1.20.3)
- **Insomnia**: API client for testing endpoints

### Endpoints

#### Create a Product
- **URL**: `/products`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100.00
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product created successfully",
    "product": {
      "id": "1707516800000",
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00
    }
  }
  ```

#### Retrieve All Products
- **URL**: `/products`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": "1707516800000",
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00
    }
  ]
  ```

#### Update a Product
- **URL**: `/products/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "name": "Updated Product Name",
    "price": 150.00
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product updated successfully",
    "product": {
      "id": "1707516800000",
      "name": "Updated Product Name",
      "price": 150.00
    }
  }
  ```

#### Delete a Product
- **URL**: `/products/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "Product deleted successfully",
    "productId": "1707516800000"
  }
  ```

#### Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/andresfrancopt/product-management-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product-management-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

### How to Improve This Project
- Implement MongoDB and Mongoose for persistent data storage (currently using in-memory storage)
- Add Jest for unit and integration testing
- Implement authentication and authorization
- Add pagination to the product listing endpoint
- Enhance validation and error handling
- Integrate with a front-end application
- Use environment variables with dotenv package
- Add API documentation with Swagger/OpenAPI
- Implement logging system
- Add input validation middleware
- Implement error handling middleware
- Add CORS support
- Add rate limiting
- Implement request data sanitization
- Use a cloud database service like MongoDB Atlas for data persistence


---

### Documentação da API de Gestão de Produtos

#### Descrição Geral
A API de Gestão de Produtos é um serviço RESTful projetado para gerenciar produtos dentro de um sistema de inventário. Ela fornece endpoints para criar, ler, atualizar e excluir informações de produtos. Esta API foi construída para ser escalável, segura e fácil de integrar com outros sistemas.

#### Objetivos
- Fornecer uma maneira confiável e eficiente de gerenciar dados de produtos.
- Garantir a integridade e segurança dos dados.
- Facilitar a integração fácil com outros serviços e aplicações.

#### Funcionalidades
- Criar novos produtos.
- Recuperar detalhes de produtos.
- Atualizar informações de produtos existentes.
- Excluir produtos do inventário.

#### Tecnologias Utilizadas
- **Node.js**: Runtime JavaScript para construir a API
- **Express.js**: Framework web para Node.js (versão 4.21.2)
- **Body-parser**: Middleware para análise de corpos de requisição (versão 1.20.3)
- **Insomnia**: Cliente de API para testar endpoints

### Endpoints

#### Criar um Produto
- **URL**: `/products`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome do Produto",
    "description": "Descrição do Produto",
    "price": 100.00
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Produto criado com sucesso",
    "product": {
      "id": "1707516800000",
      "name": "Nome do Produto",
      "description": "Descrição do Produto",
      "price": 100.00
    }
  }
  ```

#### Recuperar Todos os Produtos
- **URL**: `/products`
- **Método**: `GET`
- **Resposta**:
  ```json
  [
    {
      "id": "1707516800000",
      "name": "Nome do Produto",
      "description": "Descrição do Produto",
      "price": 100.00
    }
  ]
  ```

#### Atualizar um Produto
- **URL**: `/products/:id`
- **Método**: `PUT`
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome do Produto Atualizado",
    "price": 150.00
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Produto atualizado com sucesso",
    "product": {
      "id": "1707516800000",
      "name": "Nome do Produto Atualizado",
      "price": 150.00
    }
  }
  ```

#### Excluir um Produto
- **URL**: `/products/:id`
- **Método**: `DELETE`
- **Resposta**:
  ```json
  {
    "message": "Produto excluído com sucesso",
    "productId": "1707516800000"
  }
  ```

### Instruções de Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/andresfrancopt/product-management-api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd product-management-api
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```

### Como Melhorar Este Projeto
- Implementar MongoDB e Mongoose para persistência de dados (atualmente usando armazenamento em memória)
- Adicionar Jest para testes unitários e de integração
- Implementar autenticação e autorização
- Adicionar paginação ao endpoint de listagem de produtos
- Melhorar a validação e o tratamento de erros
- Integrar com uma aplicação front-end
- Usar variáveis de ambiente com o pacote dotenv
- Adicionar documentação da API com Swagger/OpenAPI
- Implementar sistema de logging
- Adicionar middleware de validação de entrada
- Implementar middleware de tratamento de erros
- Adicionar suporte a CORS
- Adicionar limitação de taxa
- Implementar sanitização de dados das requisições
- Usar um serviço de banco de dados em nuvem como o MongoDB Atlas para persistência de dados