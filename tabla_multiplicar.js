// Importar el módulo readline
const readline = require('readline');

// Crear una interfaz para interactuar con el usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario que ingrese un número
rl.question('Ingrese un número para generar su tabla de multiplicar: ', (numero) => {
  // Convertir el valor ingresado a un número entero
  numero = parseInt(numero);

  // Verificar si el número ingresado es válido
  if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);

    // Ciclo for para generar la tabla del 1 al 10
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  } else {
    console.log("Por favor ingrese un número válido.");
  }

  // Cerrar la interfaz
  rl.close();
});

