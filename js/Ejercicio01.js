// Personalización de salidas a Consola
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";

const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;

console.log("%c1.- Ejercicio 01: Declaración de Variables ", style_console);

// 1. Declaración de Variables utilizando el prefijo VAR
console.warn("Declaracion de Variables Utilizando el Prefijo var");
var miNombre = "Cristopher";
var miApellido = "Joseph";
console.log("Mi nombre es: " + miNombre + " " + miApellido);

// 2. Declaración de Variables utilizando el prefijo CONST

console.warn("Declaracion de Variables Utilizando el Prefijo CONST");
const miMatricula = "240687";
console.log("Mi matricula es: " + miMatricula);

// 3. Declaración de Variables utilizando el prefijo LET

/* La palabra reservada LET en JavaScript nos permite declarar varivales de una manera muy simmiliar a VAR, con la diferencia 
del alcance (SCOPE) de la misma, es decir, aquellas variables declaradas con var tienen un alcance global durante la 
ejecución y la LET se limitan a funciones, ciclos o bloques de codigo, eliminando los valores almanceados
una vez cumplen su función */

console.warn("Declaracion de Variables Utilizando el Prefijo LET");

var miFechaNacimiento = new Date(2006, 4, 23); 

function calcularEdad(fechaNacimiento) {
    let fechaHoy = new Date();
     /* Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos una variable que nos 
    permite saber el numero de milisegundos por día */
    let milisegundosPorDia = 1000 * 60 * 60 * 24;
    /* Ya que tenemos los milisegundos por día tenemos que restar la fecha de hoy, la fecha en que nacimos para calcular los
    milisegundos que hemos vivido*/
    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    let edad = Math.floor(diasVividos / 365.25); 
    return edad;
}

let edadFinal = calcularEdad(miFechaNacimiento);
console.log("Mi edad calculada es: " + edadFinal + " años.");

// --- CORRECCIÓN DE ALCANCE (SCOPE) ---
var esMayorDeEdad; 
let esMenorDeEdad; 

if (edadFinal >= 18) {
    esMayorDeEdad = true;
    esMenorDeEdad = false;
} else {
    esMayorDeEdad = false;
    esMenorDeEdad = true;
}

console.log("En base a tu edad puedo deducir que el valor de esMayorDeEdad es: " 
    + esMayorDeEdad + " y el valor de esMenorDeEdad es: " + esMenorDeEdad + ".");


// 4. Interpolación de Datos
/* para interpolar datos en JavaScript, es decir, mezclar la información estática, que no cambia con datos dinámicos, que 
pueden cambiar durante la ejecución del programa se requiere comenzar la cadena con un backtick (' ) y los datos que son
dinánicos estarán cerrados en llaves curvas {} antecedidas por un signo de dolar $*/

console.warn("-- Interpolación de Datos --");

console.log(`Hola, ${miNombre} ${miApellido} sé que tienes: ${edadFinal} años; por lo que eres: ${esMayorDeEdad ? 'mayor de edad' : 'menor de edad'}.`);    