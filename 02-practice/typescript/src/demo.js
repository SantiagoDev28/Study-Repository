// @ts-nocheck
//With @ts-check, we can see type errors in JavaScript files.

// JavaScript example.
(async ()=> { // This function must be async.
  const myCart = [0];

  /** @type {Product[]} */
  const products= []; // TypeScript could not infer the correct type.

  const limit = 2

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET' // The property was misspelled.
    });
    const data = await rta.json(); // The Response object doesn't have a parseJson() method. I replaced it with json().
    products.push(...data);
  }
  function getTotal() {
    let total = 0; // const variables are immutable, so I changed it to let.
    for (let i = 0; i < products.length; i++) { // The loop variable is reassigned, so I changed const to let. length is a property, not a function.
      total += products[i].price;
    }
    return total;
  }
  function addProduct(index=0) { // Added the number type to the index parameter.
    if (getTotal() <= limit) { // getTotal() returns a number
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1); // Fixed the function name.
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = `${person.name} ` + `${person.lastName} ` + limit; // Fixed the string concatenation.
  console.log(rta);
})();


