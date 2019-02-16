function calculate() {
  var firstValue = parseInt(document.getElementById("firstValue").value);
  var secondValue = parseInt(document.getElementById("secondValue").value);
  var thirdValue = parseInt(document.getElementById("thirdValue").value);
  var array = [firstValue, secondValue, thirdValue];
  if ((firstValue + secondValue) <= thirdValue || (firstValue + thirdValue) <= secondValue || (secondValue + thirdValue) <= firstValue) {
    alert("this is not a triangle");
  } else if ((firstValue === secondValue) && (firstValue === thirdValue) && (thirdValue === secondValue)) {
    alert("this is an equilateral");
  } else if ((firstValue === secondValue) && (firstValue !== thirdValue) || (secondValue === firstValue) && (secondValue !== thirdValue) || (thirdValue === firstValue) && (thirdValue !== secondValue)) {
    alert("this is an isosceles");
  } else {
    alert("this is a scalene");
  }
}
