interface IProductOnline<T = "men"> {
  id: number;
  name: string;
  price: number;
  category: T;
}

const data: IProductOnline<"women">[] = [
  {
    id: 1,
    name: "T-Shirt",
    price: 234,
    category: "women",
  },
];
