// Tipos de datos en Java Script
// Personalizacióin de salidas a Consola
console.log("%cEjercicio 02: Tipos de Datos ",style_console);
// 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.- UNDEFINED (No Definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;
console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En java script existe el método typeof() que nos devuelve el tipo de dato de una variable preficamente declarada.*/

console.log("Tipos de dato de las varibles declaradas:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);
// Supongamos que un usuario denominado JorgeGQ23 se ha logeado exitosamente, el valor de la variable debera actualizarce a su username
usuarioLogeado = "JorgeGQ23";
// pero no solo cambiará su valor , también cambiará su tipo

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);

// 2. BOOLEAN (TRUE/FALSE) - Verdadero o Falso
console.warn("2.- BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendrá un menu específico para los usuarios registrados , en el podrán visualizar sus mensajes o estado de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que entra de manera incognita a visualizar las propiedades. */

function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado} , que es de tipo: ${typeof(hayUsuarioLogeado)}`);

    if(hayUsuarioLogeado === true)
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú de usuario");
    }
    else if(!hayUsuarioLogeado)
    {
        console.log("Dado que no hay usuario logeado la app no mostrara el menú de usuario.");
    }
    else {
        console.log("No puedo procesar este tipo de dato, requiero de un booleano.");
    }
}

// test1  : usuario logeado = true
hayUsuarioLogeado= true;
console.log("Test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false
console.log("Test 2")
hayUsuarioLogeado= false;
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado= 52.5;
validacionUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)")
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo
que para otros lenguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el
solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
        ID del Usuario propietario: ${userID_Owner}
        Precio de la propiedad: ${priceProperty}
        Latitud (GPS) : ${latGPS}
        Longitud (GPS) : ${longGPS}
        Altitud (GPS) : ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
        ID del Usuario propietario: ${typeof(userID_Owner)}
        Precio de la propiedad: ${typeof(priceProperty)}
        Latitud (GPS) : ${typeof(latGPS)}
        Longitud (GPS) : ${typeof(longGPS)}
        Altitud (GPS) : ${typeof(altGPS)}`);

//4.- STRING (Cadena de Caracteres)

var fullnameOwner = "Jorge Olaf García Quiroga";
let nameProperty = "Hermosa Casa en la Playa de Puerto Vallarta";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automoviles a orilla del mar";
var statusProperty = "Disponible";
var typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son unas palabras
 */

console.warn("4. STRING(CADENA DE CARACTERES, PALABRAS)");
console.log(`El usuario: ${typeof(fullnameOwnerwner)}
        esta vendiendo o rentando: ${nameProperty}
        que consiste en: ${descriptionProperty}
        actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);
console.log(`Las variables declaradas son del tipo: 
fullnamerOwaner : ${typeof(fullnameOwner)}
nameProperty : ${typeof(nameProperty)}
descriptionPorperty: ${typeof(descriptionProperty)}
statusProperty : ${typeof(statusProperty)}
typeProperty : ${typeof(typeProperty)}`);

/*Existen metodos para manipular los datosdel tipo STRING, como:
El metodo toUpperCase que convierte todas las letras en mayusculas */

console.log("El ususario logueado es: $(ususarioLogueado.toUpper")




/* 5.BIGINT (Entero de Alta Precision, o alta amplitud) */
console.warn("5. BIGINT (ENTEROS DE ALTA PRECISION)");
let numeroGrande1 = 1234567890; /* 10 digitos */
let numeroGrande2 = 12345678901234567890 /* 20 digitos */
let numeroGrande3 = 123456789012345678901234567890 /* 30 digitos */
let numeroGrande4 = 1234567890123456789012345678901234567890 /* 30 digitos */


console.log(`Los valos y tipos de datos son: 
    numeroGrande1, valor= ${numeroGrande1}, tipo: ${typeof(numeroGrande1)}
    numeroGrande2, valor= ${numeroGrande2}, tipo: ${typeof(numeroGrande2)}
    numeroGrande3, valor= ${numeroGrande3}, tipo: ${typeof(numeroGrande3)}
    numeroGrande4, valor= ${numeroGrande4}, tipo: ${typeof(numeroGrande4)}
    `)

    /* 6 SYMBOL */
    /* Es tipo de dato  parte de almacenar el valor, almacena la direcccion fisica en memeopria donde se
    almacena el valor, logrando que todos los valores de cada variable simpre sean UNICOS*/
    console.warn("6. SYMBOL (Simbolos)");

    const numero1 = 3;
    const numero2 = 3.0;
    const numero3 = "3";
    const numero4 = "3.0";
    const numero5 = Symbol(3);
    const numero6 = Symbol (3.0);
    const numero7 = Symbol ("3");
    const numero8 = Symbol ("3.0");
    const numero9 = Symbol (3);

    console.log(`Imprimiendo los valores y tipos de dato: 
        numero1, valor: ${numero1}, tipoDato: ${typeof(numero1)}
        numero1, valor: ${numero2}, tipoDato: ${typeof(numero2)}
        numero1, valor: ${numero3}, tipoDato: ${typeof(numero3)}
        numero1, valor: ${numero4}, tipoDato: ${typeof(numero4)}
        numero5, valor: ${numero5.description}, tipoDato: ${typeof(numero5)}
        numero5, valor: ${numero6.description}, tipoDato: ${typeof(numero6)}
        numero5, valor: ${numero7.description}, tipoDato: ${typeof(numero7)}
        numero5, valor: ${numero8.description}, tipoDato: ${typeof(numero8)}  
        `)
/*Realizando un par de validaciones */
if(numero1 == numero2)
    console.log("se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero1 == numero3)
    console.log("se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero1 == numero3)
    console.log("se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero1 == numero4)
    console.log("se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero1 == numero4)
    console.log("se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero1 == numero5)
    console.log("se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero5 == numero9)
    console.log("se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
    console.log("se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");


/*7. NULL (NULO) */
/* Este tipo de datos es similar a UNDEFINED, con la diferencia de que los usuarios o el sistema es 
conciente que se ele asigno este valor */ 

let isPremiumUser;
let isUserLoged;
var todayDate = new Date();
var lastLogin = new todayDate();
let isNewUser; 

console.warn(`Las variables del usuario son:
    isPremiumuser, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
    isUserLoged, valor: ${isUserLoged}, tipo: ${typeof(isUserLoged)}
    isPremiumuser, valor: ${isNewUser}, tipo: ${typeof(isNewUser)}
    `);

    /* durante la navegación del usuaro en la platafroma en algun punto ingresa sus credenciales y 
    se valida en base de datos */

    /* Simulando que las credenciales fueron correctas */ 

    isUserLoged = true;
    isPremiumUser = null;
    if(lastLogin == todayDate)
        isNewUser = true;
    else
        isNewUser = false;
    console.log(`Las variables del usuario son: 
        isPremiumuser, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
        `);






