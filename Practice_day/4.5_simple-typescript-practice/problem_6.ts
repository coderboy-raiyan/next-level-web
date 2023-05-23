interface IPerson {
  name: string;
  age: number;
  email: string;
}
const personsData: IPerson[] = [
  { name: "Jhon doe", age: 24, email: "jhon@gmail.com" },
  { name: "alyson doe", age: 24, email: "alison@gmail.com" },
];

function findOnePerson(persons: IPerson[], email: string): IPerson | null {
  const person = persons.find((person: IPerson) => person.email == email);
  return person ? person : null;
}

findOnePerson(personsData, personsData[0].email);
