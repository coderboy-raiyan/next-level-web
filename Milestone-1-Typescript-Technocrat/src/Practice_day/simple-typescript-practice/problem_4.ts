type productTuple = [string, number, number];

type ProductArray = productTuple[];

const products: ProductArray = [
  ["Product 1", 10.99, 2],
  ["Product 2", 5.99, 4],
  ["Product 3", 2.99, 1],
];

function totalCost(products: ProductArray): number {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i][1];
  }
  return totalPrice;
}

console.log(totalCost(products));
