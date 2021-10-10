// Iteración #1

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

moviesCategories = movies.map((movie) => movie.categories);

console.log(moviesCategories);

// Iteración #2

// Dado el siguiente javascript usa for of y for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

totalVolume = 0;
iVolume = 0;

for (const user of users) {
  for (const key in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[key].volume;
    iVolume++;
  }
}

meanVolume = totalVolume / iVolume;
console.log(meanVolume);

// Iteración #3

// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favoritos. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

let sounds = {};
for (const user of users) {
  for (const key in user.favoritesSounds) {
    if (user.favoritesSounds[key] in sounds) {
      sounds[user.favoritesSounds[key]]++;
    } else {
      sounds[user.favoritesSounds[key]] = 1;
    }
  }
}

console.log(sounds);

// Iteración #4

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

array = ["Muñeca", "Barbilla", "Vagina"];
text = "Vagina";

function findArrayIndex(array, text) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === text) {
      return array[index] + ': posición ' + index;
    }
  }
}

console.log(findArrayIndex(array, text));
