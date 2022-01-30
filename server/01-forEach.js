const letters = ["a", "b", "c", "d", "e"];

for (let i = 0; i < letters.length; i++) {
  const el = letters[i];
  console.log("Recorriendo array con for", el);
}

letters.forEach((el, i, array) =>
  console.log("Recorriendo array con forEach", el, i, array)
);
