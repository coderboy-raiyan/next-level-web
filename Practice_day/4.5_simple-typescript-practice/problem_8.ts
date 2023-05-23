function printLowerOrCapital(
  char: "red" | "blue" | "green",
  bool: boolean | undefined = undefined
) {
  if (bool) {
    console.log(char.toLocaleLowerCase());
  } else {
    console.log(char.toUpperCase());
  }
}
