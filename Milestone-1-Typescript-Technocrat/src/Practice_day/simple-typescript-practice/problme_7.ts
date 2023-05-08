const randomNumbers = [1, 5, 6];

function findMinAndMax(...params: number[]) {
  let min = params[0];
  let max = params[0];
  for (let i = 0; i < params.length; i++) {
    if (params[i] < min) {
      min = params[i];
    }
  }
  for (let i = 0; i < params.length; i++) {
    if (params[i] > max) {
      max = params[i];
    }
  }
  console.log(min, max);
}

findMinAndMax(...randomNumbers);
