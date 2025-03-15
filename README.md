# Calculadora de Reações e Diagramas de Vigas
Este é um projeto desenvolvido para a disciplina de **Resistência dos Materiais**. A calculadora permite determinar as reações de apoio, considerando diferentes tipos de apoios e cargas.

## Funcionalidades

- **Cálculo das reações de apoio** com base nas condições de contorno fornecidas (apoios simples, engastado e pivô).
- Suporte para **cargas pontuais** e **cargas distribuídas**.
- Interface simples para entrada dos dados, com opção de visualizar os resultados.

## Tecnologias Utilizadas

- **Python**: Linguagem de programação utilizada para o cálculo das reações e geração dos diagramas.
- **Flask**: Framework utilizado para a criação de uma interface web simples.

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

### Requisitos

Antes de rodar o projeto, é necessário ter o Python instalado. Recomendamos o Python 3.7 ou superior. Você também precisará instalar as dependências listadas abaixo.

### Passos para Executar

1. **Clone o Repositório**:

    Primeiro, clone o repositório em sua máquina local:

    ```bash
    git clone https://github.com/devjuliomartins/calculadora-de-vigas.git
    cd calculadora-de-vigas
    ```

2. **Crie um Ambiente Virtual** (opcional, mas recomendado):

    Para manter o ambiente de desenvolvimento isolado, você pode criar um ambiente virtual:

    ```bash
    python -m venv venv
    ```

3. **Ative o Ambiente Virtual**:

   **No Windows**:
      ```bash
      venv\Scripts\activate
      ```
   **No macOS/Linux**:
      ```bash
      source venv/bin/activate
      ```

4. **Instale as Dependências**:

    Instale as bibliotecas necessárias para rodar o projeto:

    ```bash
    pip install -r requirements.txt
    ```

5. **Execute o Servidor Flask**:

    Após a instalação das dependências, você pode rodar o servidor Flask:

    ```bash
    python main.py
    ```

    O servidor estará disponível em `http://localhost:5000/`.

6. **Acesse o Projeto**:

    Abra o navegador e acesse `http://localhost:5000/` para interagir com a calculadora.

### Dependências

O projeto utiliza as seguintes bibliotecas:

- Flask
- NumPy

Para instalar as dependências, execute:

```bash
pip install -r requirements.txt
```

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
