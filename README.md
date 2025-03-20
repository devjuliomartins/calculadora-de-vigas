# Calculadora de Reações e Diagramas de Vigas
Este é um projeto desenvolvido para a disciplina de **Resistência dos Materiais**. A calculadora permite determinar as reações de apoio, considerando diferentes tipos de apoios e cargas.

## Funcionalidades

- **Cálculo das reações de apoio** com base nas condições de contorno fornecidas (apoios simples, engastado e pivô).
- Suporte para **cargas pontuais** e **cargas distribuídas**.
- Interface simples para entrada dos dados, com opção de visualizar os resultados.

## Tecnologias Utilizadas

- **Golang**: Linguagem de programação utilizada para o cálculo das reações.
- **Gin**: Framework utilizado para a criação de uma interface web simples e eficiente.
- **JavaScript**: Usado para interagir com a API e exibir os resultados no frontend.

## Uso

1. **Comprimento da Viga (m)**: O comprimento total da viga.
2. **Tipo de Apoio**: Você pode escolher entre **simples**, **engastado** e **pivô**.
3. **Posição do Apoio (m)**: A posição do apoio na viga.
4. **Tipo de Carga**: Você pode escolher entre **carga pontual** e **carga distribuída**.
5. **Intensidade da Carga (kN)**: A intensidade da carga aplicada.
6. **Posição da Carga (m)**: A posição onde a carga é aplicada.

Após inserir todos os dados, clique em **Calcular** para obter as reações de apoio.

### Resultados Esperados

- Reações de apoio calculadas.


## Para Rodar o Projeto

Antes de rodar o projeto, é necessário ter o Go instalado na máquina.

### Passos para Executar

1. **Clone o Repositório**:

    Primeiro, clone o repositório em sua máquina local:

    ```bash
    git clone https://github.com/devjuliomartins/calculadora-de-vigas.git
    cd calculadora-de-vigas
    ```

2. **Instale as Dependências**:

    Instale as bibliotecas necessárias para rodar o projeto:

    ```bash
    go mod tidy
    ```

5. **Executar a Aplicação**:

    Para rodar o servidor:

    ```bash
    go run main.go
    ```

    O servidor estará disponível em `http://localhost:8080/`.

6. **Acesse o Projeto**:

    Abra o navegador e acesse `http://localhost:8080/` para interagir com a calculadora.

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar ou adicionar novos recursos ao projeto, por favor, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Faça suas alterações.
4. Commit suas alterações (`git commit -am 'Adicionando nova feature'`).
5. Faça o push para a branch (`git push origin minha-nova-feature`).
6. Crie uma pull request.

---

Este projeto foi desenvolvido por mim durante o curso de Resistência dos Materiais na *Universidade Severino Sombra Vassouras/RJ*.
