# Project Name
Triangle Tracker
#### {Project Description}
The above application helps a user to determine the types of a triangle by entering values of each side}, {17/2/2019}

## Author Information
Jackline Gatwiri
Email: Jaciegatz@gmail.com
## Description
A webapp using Javascript to identify whether a triangle is an equalateral, isosceles, scaline, or whether the the given measurements do not create a triangle at all. The app helps to identify the type of a triangle by prompting the user to fill in the sides value with numbers then provides an alert message showing the type of a triangle after the user submits his details.
## Setup/Installation Requirements
* Clone this repo to your desktop using your terminal and install js.node to run your javascript.
* You might want to look into ways of linking yout html and javascript <br>
Scripts to be run <br>
function calculate() {
  var firstValue = parseInt(document.getElementById("firstValue").value);
  var secondValue = parseInt(document.getElementById("secondValue").value);
  var thirdValue = parseInt(document.getElementById("thirdValue").value);
  var array = [firstValue, secondValue, thirdValue];
  if ((firstValue + secondValue) <= thirdValue || (firstValue + thirdValue) <= secondValue || (secondValue + thirdValue) <= firstValue) {
    alert("this is not a triangle");
  } else if ((firstValue === secondValue) && (firstValue === thirdValue) && (thirdValue === secondValue)) {
    alert("this is an equilateral");
  } else if ((firstValue === secondValue) && (firstValue !== thirdValue) || (secondValue === thirdValue) && (secondValue !== firstValue) || (thirdValue === firstValue) && (thirdValue !== secondValue)) {
    alert("this is an isosceles");
  } else {
    alert("this is a scalene");
  }
}
##Link
https://github.com/jackiegatwiri/Triangle 
##BDD
Specifications
. If the values of each side are equal, it is an equalateral
. If two sides are equal, it is an isosceles
. If none of the sides are equal, it is a scalene
. ff two of the sides are less than or equal to the other side. Then it is not a triangle at all

Behavior
Our program should handle:
Side One input example
Side Two input example
Side Three input example
Output Example
3 sides are equal
5
5
5
True
2 sides are equal
5
5
7
True
None of the sides are equal
5
8
5
True
The sum of two sides is less than or equal to the the third side
3
3
10
True


## Known Bugs
If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue. Please include sample queries and their corresponding results.
## Technologies Used
The application uses CSS, JS and HTML
use this HTML code to create a background image 
.image {
  background-image: url("https://images.unsplash.com/photo-1550060542-3f67a27cb751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80");
  position: relative;
  background-position: 50% 50%;
  height: 400px;
  background-size: cover;
  /*all of this constitutes ways of creating a background image on a division*/
  background-repeat: no-repeat;
}}
## Support and contact details
If you have any ideas, suggestions, questions, or problems, please contact me at;  Tel: 0700042852, Email: jaciegatz@gmail.com 
### License
Portfolio cotains pieces of source code that is Copyright (c) {2019} **{Moringa}**
