interface listOfCars<T = "4 wheel off road"> {
  name: string;
  carType?: T;
}

const rangeRoverVouge: listOfCars<string> = {
  name: "Vouge v8",
  carType: "2 wheel",
};

console.log(rangeRoverVouge);
