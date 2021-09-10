<h1 align="center"> CPF Validation 🔐 </h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#--funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F--autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licen%C3%A7a">Licença</a>
</p>

</br>

<p align="center">
  <img src="src/img/cpf-validation.gif">
</p>

</br>

## 💡 Projeto

<p>Um projeto capaz de validar se o CPF digitado é o mesmo do anterior utilizando o cálculo para validação de CPF. Ou seja, apenas são permitidos CPFs válidos.
</p>
</br>

# 🧐 Como é feito o cáculo do CPF?
Todo CPF possui dois digitos finais que são os digitos verificadores [DV]. Que vem após o hífen *(-)*. A validação de CPF é muito importante para evitar fraudes e erros na digitação

Então, vamos aos cálculos! 😄 

### 1️⃣ Verificando o primeiro digito
Começamos o cálculo utilizando os 9 primeiros digitos e multiplicando por 10 em ordem descrescente.

| 01  | 04  | 05  | 03  | 08  | 02  | 02  | 00  | 06  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| xx  | xx  | xx  | xx  | xx  | xx  | xx  | xx  | xx  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 10  | 09  | 08  | 07  | 06  | 05  | 04  | 03  | 02  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 10  | 36  | 40  | 21  | 48  | 10  | 08  | 00  | 12  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

> 10 + 36 + 40 + 21 + 48 + 10 + 8 + 0 + 12 = 185

Dessa forma, dividimos o resultado por 11, obtendo apenas o módulo da divisão, que no caso é o resto.
O resto será igual a 9, assim, subtraímos 11 de 9. </br>

> 11 - 9 = 2

Portanto, o primeiro digito é **2**. _Se o resultado da divisão for 10, o digito será 0._

### 2️⃣ Verificando o segundo digito

Agora a multiplicação é feita de 11 à 2.

| 01  | 04  | 05  | 03  | 08  | 02  | 02  | 00  | 06  | 02  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

| xx  | xx  | xx  | xx  | xx  | xx  | xx  | xx  | xx  | xx  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 11  | 10  | 09  | 08  | 07  | 06  | 05  | 04  | 03  | 02  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 11  | 40  | 45  | 24  | 56  | 12  | 10  | 00  | 18  | 04  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

> 11 + 40 + 45 + 24 + 56 + 12 + 10 + 0 + 18 + 4 = 220

Então, teremos a soma dos números = 220, fazendo o módulo e a subtração, teremos:

> 11 - (220 % 11) = 11

Como o segundo digito é igual a 11, então respeitaremos a condição, que diz que número maior que 9 o digito é **0**.

Sendo assim, o CPF validado será: **145.382.206-20**

</br>

## ⚙️ Tecnologias

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

  </br>

## 🔨 Funcionalidades

- [x] O usuário pode incluir seu CPF em dois campos: o primeiro é o campo de _CPF_ e o outro o de _confirmação de CPF_, se o CPF for válido o **CPF Validaton** irá informar.

</br>

## ✒️ Autor

</br>

👤 **Gabriel Henrique**

- Github: [@Gabriek0](https://github.com/Gabriek0)
- LinkedIn: [@gabriel-henrique-664bb219a](https://www.linkedin.com/in/gabriel-henrique-664bb219a/)

</br>

## 📜 Licença

- [![NPM](https://img.shields.io/github/license/Gabriek0/cpf-validation)](https://github.com/Gabriek0/cpf-validation/blob/main/LICENSE)
