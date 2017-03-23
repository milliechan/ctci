// given an age, return if person is old enough to legally drink
function isOldEnoughToDrink(age) {
  return age >= 21;
}

console.log(isOldEnoughToDrink(22))

function checkAge(name, age) {
  if (age < 21) {
    return "Go home"
  } else {
    return "welcome"
  }
}

console.log(checkAge('a', 100))

