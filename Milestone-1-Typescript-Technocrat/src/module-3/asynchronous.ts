interface IProduct {
  id: number;
  title: string;
  price: number;
}

async function getAllTodos(): Promise<any> {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

getAllTodos()
  .then((data: IProduct) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
