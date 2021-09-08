function isCpf(cpf) {
  cpf = cpf.replace(/\D+/g, "");
  let cpfArray = cpf.split(""); // Tirando pontos e barras
  let cpfNumb = []; // Array contendo números
  let j = 11; // Número de multiplicações do primeiro digito.
  let k = 12; // Número de multiplicações do segundo digito.

  for (let i = 0; i < 9; i++) {
    cpfNumb.push(parseInt(cpfArray[i]));
  }

  const firstDigit = cpfNumb.reduce((acc, numb) => {
    j--;

    return (acc = acc + numb * j);
  }, 0);

  let firstDigitVerification = 11 - (firstDigit % 11);

  cpfNumb.push(firstDigitVerification);

  const secondDigit = cpfNumb.reduce((acc, numb) => {
    k--;

    return (acc = acc + numb * k);
  }, 0);

  let secondDigitVerification = 11 - (secondDigit % 11);

  if (firstDigitVerification > 9) firstDigitVerification = 0;
  if (secondDigitVerification > 9) secondDigitVerification = 0;

  cpfNumb.push(secondDigitVerification);

  console.log(cpfNumb);
}

isCpf("486.709.078-60"); // 237
