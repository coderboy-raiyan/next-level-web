type genericName<T> = T;
type userType<T> = T;

let myName: genericName<string> = "Joe";
const herName: genericName<number> = 1234;

const houseSterk: userType<{ name: string }> = {
  name: "Raiyan",
};
