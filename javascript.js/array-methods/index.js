var ages = [3, 10, 18, 20];

function check(age) {
  return age >= 18;
}

function myFunction() {
  console.log(ages.findIndex(check));
}
