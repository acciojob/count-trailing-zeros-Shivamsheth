function trailingZeros(n) {
  n = parseInt(n);
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));