type noobDeveloper = {
  name: string;
};

type proDeveloper = noobDeveloper & {
  experience: number;
  expertise: string[];
};

const dev1: noobDeveloper = {
  name: "Aly Jonson",
};

const dev2: proDeveloper = {
  name: "Raiyan",
  experience: 5,
  expertise: ["Js", "c", "dsa"],
};
