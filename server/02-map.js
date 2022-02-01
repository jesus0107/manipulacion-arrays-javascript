const letters = ["a", "b", "c"];

//Transformacion de array por medio de un for
const newArrayLetters = [];

for (let i = 0; i < letters.length; i++) {
  const newLetters = letters[i];
  newArrayLetters.push(newLetters + "++"); //metodo para mutar un array
}
console.log(`Array trnsformado con for: ${newArrayLetters}`);

// Transformacion de array por medio del metodo map

const newArray = letters.map((el) => el + "++");
console.log(`Aray transformado con map: ${newArray}`);

//------------>OTRO EJEMPLO<-------------

const products = [
  { id: "1", name: "shirt", category: "clothing" },
  { id: "2", name: "Sports Tennis", category: "accessories" },
  { id: "3", name: "Casual shoes", category: "footwear" },
  { id: "4", name: "skirt", category: "clothing" },
  { id: "5", name: "tie", category: "clothing" },
];

//Extraer el nombre de los productos con un for

const nameOFProducts = [];
for (let i = 0; i < products.length; i++) {
  const name = products[i].name;
  nameOFProducts.push(name);
}

console.log(nameOFProducts);

//Extraer la categoria con map

const categoriesOfProducts = products.map((product) => product.category);
console.log(categoriesOfProducts);

const numbers = [1, 2, 3, 4];

const multipliedNumbers = numbers.map((n) => n * 2);
console.log(numbers);
console.log(multipliedNumbers);
