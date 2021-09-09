const inputName = document.querySelector(".input-name");
const inputLabel = document.querySelector(".label-name");
const inputCpf = document.querySelector(".input-cpf");
const cpfLabel = document.querySelector(".label-cpf");

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
  console.log(cpfPattern.length);

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
    const img = document.querySelector(".img-check-cpf");
    let { value } = event.target;

    inputCpf.value = validationInputCpf(value);

    if (value.length >= 14) {
      img.style.display = "inline";
    } else {
      img.style.display = "none";
    }
  });
}

window.onload = function () {
  validationName();
  validationCpf();
};
