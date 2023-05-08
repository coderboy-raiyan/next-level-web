function printLowerOrCapital(char: "red" | "blue" | "green", bool: boolean) {
  if (bool) {
    console.log(char.toLocaleLowerCase());
  } else {
    console.log(char.toUpperCase());
  }
}
