interface IPersonData {
  name: string;
  age: number;
}

function greaterOrEqual(persons: IPersonData[]) {
  const filteredPersons = persons.filter(
    (person: IPersonData) => person.age >= 18
  );
  return filteredPersons;
}

const personsAgeData: IPersonData[] = [
  { name: "Damon tragareyn", age: 22 },
  { name: "Alison hightower", age: 21 },
  { name: "Aemond tragareyn", age: 16 },
];

greaterOrEqual(personsAgeData);
