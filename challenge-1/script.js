/**
 * JavaScript Mini Challenge #1 - Area of a triangle
 *
 * The product should accurately calculate the area of
 * a triangle using the length of three sides
 *
 * Read the README.md to learn more about Heron's formula
 * Follow the instruction below to complete the code
 *
 * IMPORTANT NOTE:
 * The preview mode in glitch (the side you see on the
 * right side of the screen) will not be responsive to
 * the button click. You need to open the website on a
 * separate tab by going to: Show -> In a new window
 */

/**
 * The website has three input field for the three lengths
 * of a triangle. When the submit button is pressed, the
 * algorithm will calculate the area of triangle with the
 * given lengths of three sides and display it on the pink
 * box.
 *
 * However, some crucial parts of the code is missing. It is
 * your responsibility to fill in the missing code for the
 * website to properly work. Good Luck!
 */
document.getElementById('user-input').addEventListener('submit', (e) => {
  e.preventDefault()

  /**
   * The below code grabs the value from the three input
   * field. The variables for the length of a side are named
   * x, y, and z. You will have to use these variables to
   * calculate the area of the triangle.
   */
  let x = Number(document.getElementById('x').value)
  let y = Number(document.getElementById('y').value)
  let z = Number(document.getElementById('z').value)

  /**
   * I have already checked if the given inputs are an actual
   * number. You are welcome :)
   */
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert('Must input numbers')
    return
  }

  /**
   * TASK 1:
   * Our program wants to check another form of illegal input.
   * As any normal triangle, length of a side is always a
   * positive number. We want to check if the input has a
   * 0 or negative number.
   *
   * The if-statements are mostly completed, but it is missing
   * the condition.
   * Delete the sentence "Type in the correct condition", and
   * type in the correct conditions for each if-statement.
   *
   * HINT:
   * Let's look at the first if-statement
   * When the condition is true, the website will alert us and
   * say: "x has to be bigger than 0"
   * That means x has to be less than or equals to 0 if the
   * program wants to alert the user!
   */

  // Fix the code below
  if (x <= 0) {
    alert('x has to be bigger than 0')
    return
  }
  if (y <= 0) {
    alert('y has to be bigger than 0')
    return
  }
  if (z <= 0) {
    alert('z has to be bigger than 0')
    return
  }

  /**
   * TASK 2:
   * The Heron's formula requires us to compute
   * semi-circumference.
   *
   * 1. Declare a variable named "s"
   * 2. Calculate the semi-circumference, assign the calculated
   * value to the variable "s".
   *
   * HINT:
   * If you need to learn more about how to find the
   * semi-circumference, check out the README.md
   */

  // Type in the correct code below
  let s = (x + y + z) / 2

  /**
   * TASK 3:
   * Now we have the semi-circumference, we can now calculate
   * the area of the triangle using the Heron's formula.
   *
   * 1. Declare a variable named "area"
   * 2. Calculate the area of the triangle, assign the
   * calculated value to the variable "area"
   *
   * HINT:
   * How can we find the square root of a number in JavaScript?
   *
   * You can find the square root of a number by doing:
   * Math.sqrt(number)
   *
   * Try doing:
   * console.log(Math.sqrt(4))
   * and see what happens!
   */

  // Type in the correct code below
  let area = Math.sqrt(s * (s - x) * (s - y) * (s - z))

  /**
   * The JavaScript will update the content of the pink box
   * with the value of the variable "area"
   *
   * Did you make sure you named the variable "area"?
   */
  document.getElementById('answer').innerHTML = area
})
