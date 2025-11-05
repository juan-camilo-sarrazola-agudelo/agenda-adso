/*Aplica todos los conceptos aprendidos creando un programa completo que calcule y muestre información de un estudiante

01
Datos del Aprendiz
Nombre completo y número de ficha
02
Registro de Notas
Array con tres calificaciones diferentes
03
Cálculo de Promedio
Operación matemática correcta
04
Determinación de Estado
Mensaje "Aprobado" o "No Aprobado"
05
Presentación de Resultados
Salida formateada en consola

Ejemplo de Salida Esperada:

==================
SISTEMA DE NOTAS SENA
==================
Aprendiz: [Tu Nombre]
Ficha: [Tu Ficha]
Notas: 4.0, 4.5, 3.8
==================
Promedio: 4.10
Estado: */


const Aprendiz = {
  nombre: "Juan Camilo Sarrazola",
  ficha: "3169901",
  notas: [4.0, 4.5, 3.8],
};


const promedio =
  Aprendiz.notas.reduce((acum, nota) => acum + nota, 0) / Aprendiz.notas.length;


  
const estado = promedio >= 3 ? "Aprobado" : "No Aprobado";


console.log("=== INFORME DEL ESTUDIANTE ===");
console.log("Nombre: ", Aprendiz.nombre);
console.log("Ficha: ", Aprendiz.ficha);
console.log("Notas: ", Aprendiz.notas.join(", "));
console.log("Promedio: ", promedio.toFixed(2));
console.log("Estado: ", estado);
