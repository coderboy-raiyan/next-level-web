// type user = {
//     _id : string;
// }

interface userBasicInfo {
  role: string[];
  age: string;
}
interface user extends userBasicInfo {
  name: string;
}

const dummy: user = {
  name: "Raiyan",
  role: ["admin"],
  age: "14",
};
