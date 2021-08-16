/**
 * JavaScript Mini Challenge #2 - Move the square
 *
 * Read the README.md to learn more about this
 * challenge. Follow the instructions below to
 * complete the challenge.
 */

/**
 * We want to make it so that as we press the arrow
 * keys in our keyboard, the little square on a big
 * canvas moves in the direction of the arrow.
 *
 * Most of the codes are done. In fact, as you press
 * the left-arrow key on your keyboard, the square
 * moves to the left. The other arrow-keys, as you
 * may have noticed, are not working.
 *
 * Fill in the missing codes to complete this
 * challenge. Good Luck!
 */

/**
 * The below codes are just there to prevent the
 * webpage from scrolling up and down with the arrow
 * keys pressed.
 */
window.addEventListener(
  'keydown',
  function (e) {
    if (
      ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault()
    }
  },
  false
)

/**
 * Below are the codes responsible for the big
 * white canvas.
 */
let studentAnswer = new p5((sketch) => {
  /**
   * These variables set how big is the canvas
   * and where should the square be inside of
   * the canvas.
   *
   * IMPORTANT NOTE:
   * x is the x-coordinate of the square, and
   * y is the y-coordinate of the square.
   *
   * If x is 0, the square will be at the left-
   * most area of the canvas. If x is a positive
   * number, x will position certain length away
   * from the leftside.
   *
   * For example, if x is 100, the square will be
   * 100 units away from the leftside of the canvas.
   *
   * Same thing for y: if y is 0, the square will
   * be at the top of the canvas. If y is 100, the
   * square will be 100 units away from the top
   * of the canvas.
   */
  let width = 600
  let height = 400

  // For now, the square is at the middle of the
  // canvas.
  let x = width / 2
  let y = height / 2

  // Setting up canvas
  sketch.setup = () => {
    sketch.createCanvas(width, height)
    sketch.frameRate(60)
  }

  /**
   * TASK 1:
   * Here you can see if arrow keys are pressed,
   * the code calls for functions that makes the
   * square go either left, right, up or down.
   *
   * One small problem: functions goRight, goUp,
   * and goDown are missing from this code.
   *
   * Implement them in the designated area. goLeft
   * function is already written for you for
   * reference.
   *
   * HINT:
   * You can check out how changing x and y can
   * change the position of the object by checking
   * out the reference.js
   */
  sketch.draw = () => {
    // if left arrow key is pressed, go left
    if (sketch.keyIsDown(sketch.LEFT_ARROW)) {
      goLeft()
    }
    // if right arrow key is pressed, go right
    if (sketch.keyIsDown(sketch.RIGHT_ARROW)) {
      goRight()
    }
    // if up arrow key is pressed, go up
    if (sketch.keyIsDown(sketch.UP_ARROW)) {
      goUp()
    }
    // if down arrow key is pressed, go down
    if (sketch.keyIsDown(sketch.DOWN_ARROW)) {
      goDown()
    }

    // render in the square
    sketch.clear()
    sketch.background(255)
    sketch.rect(x - 20, y - 20, 40, 40)
  }

  // goLeft function for your reference
  function goLeft() {
    if (20 < x) {
      x -= 5
    }
  }

  // implement goRight function below
  function goRight() {
    if (x < width - 20) {
      x += 5
    }
  }

  // implement goUp function below
  function goUp() {
    if (20 < y) {
      y -= 5
    }
  }

  // implement goDown function below
  function goDown() {
    if (y < height - 20) {
      y += 5
    }
  }

  /**
   * TASK 2 (Optional):
   * If you implemented the functions correctly,
   * the square should be moving to whatever arrow
   * key you are pressing. There is a small problem,
   * however.
   *
   * If you have implemented the functions similar
   * to the given goLeft function, you probably
   * noticed that the square can go outside of the
   * canvas.
   *
   * Fix goLeft, goRight, goUp, goDown functions so
   * that the square does not go outside of the
   * canvas. For example, if square is touching the
   * left side of the canvas, the square should not
   * move if the left arrow key is pressed.
   *
   * HINT 1:
   * For goLeft as an example, if x is somewhere around
   * 0, x should not... move. It would look like this:
   * if ("x is NOT at the left edge") {
   *    x -= 5
   * }
   *
   * You should figure out how to check if x is NOT at
   * the left edge.
   *
   * HINT 2:
   * Checkout reference.js to see how I check if the
   * object is at the edge of the canvas.
   */
}, document.getElementById('student-answer'))
