function reverseArray<T extends string[]>(...array: T) {
  return array.reverse();
}

const numberOfStrings = [
  "aemond tragareyn",
  "aegon tragareyn",
  "deamon targareyn",
];

reverseArray(...numberOfStrings);
