const inputName = document.querySelector(".input-name");
const inputLabel = document.querySelector(".label-name");
const inputCpf = document.querySelector(".input-cpf");
const cpfLabel = document.querySelector(".label-cpf");
const confirmationLabel = document.querySelector(".label-cpf-confirmation");
const inputConfirmation = document.querySelector(".input-cpf-confirmation");

function validationName() {
  inputName.addEventListener("change", (event) => {
    const img = document.querySelector(".img-check-name");
    const { value } = event.target;

    if (value !== "") {
      img.style.display = "inline";
    } else {
      img.style.display = "none";
    }
  });
}

function addDotsAndHifen(splittedLetters, cpfPattern) {
  splittedLetters.forEach((item, index) => {
    if (index === 2) {
      cpfPattern.push(item);
      cpfPattern.push(".");
    } else if (index === 5) {
      cpfPattern.push(item);
      cpfPattern.push(".");
    } else if (index === 8) {
      cpfPattern.push(item);
      cpfPattern.push("-");
    } else {
      if (index <= 10) {
        cpfPattern.push(item);
      }
    }
  });

  return cpfPattern;
}

function validationInputCpf(value) {
  if (!value || !value.length) {
    return null;
  }

  let splittedLetters = value.split("");

  splittedLetters = splittedLetters.reduce((acc, item) => {
    if (item !== "." && item !== "-") {
      acc.push(item);
    }

    return acc;
  }, []);

  const cpfPattern = addDotsAndHifen(splittedLetters, []);

  const joinLetters = cpfPattern.join("");

  return joinLetters;
}

function validationCpf() {
  inputCpf.addEventListener("keyup", (event) => {
    const imgCheck = document.querySelector(".img-check-cpf");
    const imgNotCheck = document.querySelector(".img-not-check-cpf");

    let { value } = event.target;

    inputCpf.value = validationInputCpf(value);

    if (value.length === 14) {
      confirmationCpf(value);
      imgCheck.style.display = "inline";
      imgNotCheck.style.display = "none";
    } else if (value.length > 1 && value.length < 14) {
      imgNotCheck.style.display = "inline";
      imgCheck.style.display = "none";
    } else {
      imgCheck.style.display = "none";
      imgNotCheck.style.display = "none";
    }
  });
}

function confirmationCpf(cpf) {
  inputConfirmation.addEventListener("keyup", (event) => {
    const imgCheck = document.querySelector(".img-check-cpf-bottom");
    const imgNotCheck = document.querySelector(".img-not-check-cpf-bottom");
    const message = document.querySelector(".alertMessage");

    let { value } = event.target;
    inputConfirmation.value = validationInputCpf(value);

    if (value.length === 14) {
      value = value.replace(/\D+/g, "");
      let valueStrings = value.split("");
      let valueArray = [];

      valueStrings.forEach((item) => {
        valueArray.push(parseInt(item));
      });

      cpf = cpf.replace(/\D+/g, "");
      let cpfArray = cpf.split("");
      let cpfNumb = [];
      let j = 11;
      let k = 12;

      cpfArray.forEach((item) => {
        cpfNumb.push(parseInt(item));
      });
      cpfNumb = cpfNumb.slice(0, 9);

      const firstDigit = cpfNumb.reduce((acc, numb) => {
        j -= 1;

        return (acc = acc + numb * j);
      }, 0);

      let firstDigitVerification = 11 - (firstDigit % 11);

      if (firstDigitVerification > 9) firstDigitVerification = 0;

      cpfNumb.push(firstDigitVerification);

      const secondDigit = cpfNumb.reduce((acc, numb) => {
        k -= 1;

        return (acc = acc + numb * k);
      }, 0);

      let secondDigitVerification = 11 - (secondDigit % 11);

      if (secondDigitVerification > 9) secondDigitVerification = 0;

      cpfNumb.push(secondDigitVerification);

      const cpfSum = cpfNumb.reduce((acc, item) => {
        acc += item;
        return acc;
      }, 0);

      const valueSum = valueArray.reduce((acc, item) => {
        acc += item;
        return acc;
      }, 0);

      //console.log(cpfSum);
      //console.log(valueSum);

      if (valueSum === cpfSum) {
        imgCheck.style.display = "inline";
        imgNotCheck.style.display = "none";
        message.style.display = "none";
      }
    } else if (value.length > 0 && value.length < 14) {
      imgCheck.style.display = "none";
      imgNotCheck.style.display = "inline";
      message.style.display = "block";
    } else {
      imgCheck.style.display = "none";
      imgNotCheck.style.display = "none";
      message.style.display = "block";
    }
  });
}

window.onload = function () {
  validationName();
  validationCpf();
};
