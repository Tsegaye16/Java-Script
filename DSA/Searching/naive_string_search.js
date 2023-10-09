function naive(long, short) {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        counter++;
      }
    }
  }
  return counter;
}
let long = "along run short run alonger than all";
let short = "al";
console.log(naive(long, short));
