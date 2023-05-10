function unknown(str: unknown) {
  if (typeof str !== "string") {
    throw new Error("Please provide a valid string");
  }
  console.log(str);
}
