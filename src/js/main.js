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
  inputCpf.addEventListener("change", (event) => {
    const imgCheck = document.querySelector(".img-check-cpf");
    const imgNotCheck = document.querySelector(".img-not-check-cpf");

    let { value } = event.target;

    inputCpf.value = validationInputCpf(value);

    if (value.length >= 14 || value.length === 14) {
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
  inputConfirmation.addEventListener("change", (event) => {
    const imgCheck = document.querySelector(".img-check-cpf-bottom");
    const imgNotCheck = document.querySelector(".img-not-check-cpf-bottom");

    let { value } = event.target;
    inputConfirmation.value = validationInputCpf(value);

    if (value !== cpf) {
      imgNotCheck.style.display = "inline";
      imgCheck.style.display = "none";
    } else {
      imgCheck.style.display = "inline";
      imgNotCheck.style.display = "none";
    }
  });
}

window.onload = function () {
  validationName();
  validationCpf();
};
