//* 1. Números pares e impares
//* Escribe una función que tome un número como argumento y devuelva "par" si el número es par o "impar" si es impar.

const parOImpar = (n) => {
  if (n % 2 === 0) {
    console.log(n, "es PAR");
  } else {
    console.log(n, "es IMPAR");
  }
};
// parOImpar(7);
// parOImpar(36);

//* 2. Suma de números del 1 al n
//* Escribe una función que reciba un número n y retorne la suma de todos los números desde 1 hasta n.
const sumaDe1aN = (n) => {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
};
// console.log(sumaDe1aN(5));
// console.log(sumaDe1aN(3));

//* 3. Revertir una cadena
//* Escribe una función que tome una cadena de texto y devuelva la cadena invertida.
const inverterString = (string) => {
  let word = string.split("").reverse().join("");
  return word;
};

// console.log(inverterString("Abrahan"));
// console.log(inverterString("123456"));
//* 4: Palíndromo. Escribe una función que determine si una palabra
//* es un palíndromo (se lee igual de izquierda a derecha que de derecha a
//* izquierda).
const palindromo = (string) => {
  let word = string.split("").reverse().join("");
  if (word === string) {
    return `${string} = ${word} es palindromo`;
  } else {
    return `${string} ≠ ${word} no es palindromo`;
  }
};
// console.log(palindromo("reconocer"));
// console.log(palindromo("paralelepipedo"));
//* 5: Números primos Escribe una función que reciba un número y
//* determine si es primo (un número es primo si solo es divisible por 1 y por
//* sí mismo).

const numeroPrimo = (n) => {
  if (n <= 1) return `${n} no es primo`;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} no es primo`;
    }
  }
  return `${n} si es primo`;
};
// console.log(numeroPrimo(8));
// console.log(numeroPrimo(15));

//* 6: Factorial de un número Escribe una función que reciba un
//* número N y devuelva su factorial (el producto de todos los números de 1 a
//* N).

const factorial = (n) => {
  let producto = 1;
  for (let i = 1; i <= n; i++) {
    producto *= i;
  }
  return producto;
};
// console.log(factorial(3));
//* 7: FizzBuzz Escribe un programa que imprima los números del 1 al
//* 100, pero que para los múltiplos de 3 imprima "Fizz", para los múltiplos
//* de 5 imprima "Buzz" y para los múltiplos de ambos imprima "FizzBuzz".

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz();

//* 8: Mayor de tres números Crea una función que reciba tres
//* números y devuelva el mayor de ellos.
const mayorDeTres = (num1, num2, num3) => {};
//* 9: Contar vocales Escribe una función que reciba una cadena de
//* texto y devuelva el número de vocales que contiene.

//* 10: Números Fibonacci Escribe una función que reciba un número N
//* y devuelva un array con los primeros N números de la secuencia de
//* Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada número
//* siguiente es la suma de los dos anteriores.
