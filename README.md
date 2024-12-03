<img src="src/assets/ecoGen.png" alt="Logo do Site" width="400">

## Descrição
E-commerce Genérico é um projeto simples desenvolvido em Angular, com quatro telas principais totalmente funcionais. O objetivo é simular a interface de um e-commerce com opções de navegação entre diferentes seções.

## Telas
1. **Menu**  
   - Tela inicial do site com informações de boas-vindas e listagem de produtos. Produtos carregados dinamicamente a partir de uma API externa.

2. **Contato**  
   - Dados para os usuários entrarem em contato com a empresa (meramente ilustrativa).

3. **Avaliação**  
   - Página para os clientes avaliarem o e-commerce, incluindo funcionalidade de 5 estrelas.

4. **Carrinho**  
   - Exibição dos produtos adicionados ao carrinho, com opção de finalização. Quando vazio, exibe uma mensagem de aviso.

## Tecnologias Utilizadas
- **Angular**: Framework principal para desenvolvimento do front-end.
- **TypeScript**: Linguagem utilizada para criar código mais estruturado e escalável.
- **HTML e CSS**: Para estruturação e estilização das páginas.
- **Google Material Icons**: Ícones estilizados para interatividade.

## Requisitos Atendidos
### 1. **Páginas**
   - Foram implementadas 4 páginas:  
     - **Menu (página inicial)**  
     - **Contato**  
     - **Avaliação**  
     - **Carrinho**

### 2. **Rotas**
   - Configuradas no arquivo `app-routing.module.ts`:  
     - Rota padrão (`''`) para **Menu**.
     - Rota para as páginas **Contato**, **Avaliação** e **Carrinho**.
     - Rota coringa (`'**'`) redirecionando para a página inicial.

### 3. **Uso de HttpClient**
   - Importado no módulo principal (`app.module.ts`) e utilizado no **ProductService** para consumir dados de uma API externa e exibi-los na página **Menu**.

### 4. **API**
   - API consumida no **ProductService**, implementando o método `getProducts` com HttpClient.
   - Exibe produtos na tela inicial (`menu.component.html`) usando `ngFor`.

### 5. **Pipes**
   - **Pipe Personalizado**:  
     - Criado o pipe `truncate` no arquivo `truncate.pipe.ts` para limitar o número de caracteres em títulos longos ou descrições longas dos produtos.  
   - **Pipe Estrutural**:  
     - Utilizado o **`async` pipe** na exibição de dados assíncronos provenientes da API.

### 6. **Services**
   - Foram criados dois serviços:  
     - **ProductService**: Responsável por obter produtos da API.  
     - **CartService**: Gerencia os itens no carrinho de compras (adicionar, remover e limpar itens).

### 7. **Diretivas**
   - **Diretivas Personalizadas**:  
     - **`appCustomTooltip`**: Exibe um tooltip ao passar o mouse sobre os produtos.  
     - **`appLoadingIcon`**: Adiciona um ícone de carregamento a elementos específicos (usado no carregamento de produtos no carrinho).  
   - **Diretivas Estruturais**:  
     - **`ngIf`**: Usado para exibir mensagens de "Carregando" e "Carrinho Vazio".  
     - **`ngFor`**: Usado para renderizar listas de produtos e itens no carrinho.

## Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/Hugodof/e-commerceFF.git

2. Navegue até a pasta do projeto:
   ```bash
   cd e-commerceFF/ecoff

3. Instale as dependências:
   ```bash
   npm install

4. Execute o projeto:
   ```bash
   ng serve

5. Acesse no navegador (pode ser que forneça outro localhost):
   ```bash
   http://localhost:4200
