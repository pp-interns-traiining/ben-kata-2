const fizzBuzz = (num) => {
  const print = [];
  for (let i = 1; i < num + 1; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      print.push('fizzbuzz');
    } else if (i % 3 === 0) {
      print.push('fizz');
    } else if (i % 5 === 0) {
      print.push('buzz');
    } else {
      print.push(i);
    }
  }
  return print;
};
