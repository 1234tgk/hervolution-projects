/**
 * CAUTION: DO NOT TOUCH THIS FILE
 */

/**
 * The below code grabs the value from the three input
 * field. The variables for the length of a side are named
 * x, y, and z. You will have to use these variables to
 * calculate the area of the triangle.
 */

/**
 * This file is for you to see if you need some reference.
 * Each sections of the codes are explained for your benefits.
 * You are welcome :)
 *
 * This file creates two canvases: one that makes the circle go
 * up and down, the other one makes the circle go side to side.
 */

// This is the code for the canvas that makes the circle go up
// and down
let example1 = new p5((sketch) => {
  // Here, we are setting the size of the canvas
  // width is 200px, and height is 100px
  let width = 200
  let height = 100

  // We want the initial placement of the circle to be right
  // at the middle. So we set x to be half the width and y to
  // be half the height.
  let x = width / 2
  let y = height / 2

  // We create a constant called radius that will define how big
  // the circle is. I set it as 10px.
  const radius = 10

  // This is a boolean variable that checks if the circle is going
  // up or down. If goUp is true, circle is going up. If it is false,
  // circle is going down.
  let goUp = true

  // This sets up the canvas with the appripriate width and height.
  // I am also setting the framerate to 60fps.
  sketch.setup = () => {
    sketch.createCanvas(width, height)
    sketch.frameRate(60)
  }

  // This code defines what to do at each frame.
  sketch.draw = () => {
    // We need to check if y is out of the appropriate range.
    // We want it so that if y is very close to 0 (note: not exactly at 0),
    // we want to change the direction of where the circle is going.

    // More exactly, we don't want the circle to go up; we want it to go
    // down.

    // So, if y is less than the radius, we set the goUp to be false!
    // Remember, if y is close to 0, that means the circle is at the top
    // area of the canvas.
    // (we set if y is less than the radius so that it checks whether the
    // circle "touches" the upper boundary)

    // However, if y is bigger than the height, we need to switch the goUp
    // variable to true again!

    // (we set if y is bigger than the height - radius so that it checks
    // whether the circle "touches" the lower boundary)
    if (y < radius) {
      goUp = false
    } else if (y > height - radius) {
      goUp = true
    }

    // Now we move the circle.
    // Is goUp true? If so, decrement y.
    // Is goUp false? Increment y.
    // How much you increment the y by determines the speed.
    if (goUp) {
      y -= 1
    } else {
      y += 1
    }

    // We want to render the circle with the x and y coordinate
    // we first clear the canvas
    // set the background color to white
    // then draw in the circle at position (x, y) with the diameter of
    // radius * x
    sketch.clear()
    sketch.background(255)
    sketch.circle(x, y, radius * 2)
  }
}, document.getElementById('example-1'))

// This is for moving side by side. It's almost same as the above example.
let example2 = new p5((sketch) => {
  let width = 200
  let height = 100

  let x = width / 2
  let y = height / 2

  const radius = 10

  let goLeft = true

  sketch.setup = () => {
    sketch.createCanvas(width, height)
    sketch.frameRate(60)
  }

  sketch.draw = () => {
    if (x < radius) {
      goLeft = false
    } else if (x > width - radius) {
      goLeft = true
    }

    if (goLeft) {
      x -= 5
    } else {
      x += 5
    }

    sketch.clear()
    sketch.background(255)
    sketch.circle(x, y, radius * 2)
  }
}, document.getElementById('example-2'))
