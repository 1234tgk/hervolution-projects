/**
 * JavaScript Mini Challenge #2 - Move the square
 *
 * Read the README.md to learn more about this
 * challenge. Follow the instructions below to
 * complete the challenge.
 */

/**
 * We want to add functionality to each buttons
 * in this website.
 *
 * In the end, you should be able to create colorful
 * balls bouncing around the canvas.
 *
 * Follow the instructions to create some cool
 * animations. Good luck!
 */

/**
 * Below are the codes responsible for the big
 * white canvas.
 */
let studentAnswer = new p5((sketch) => {
  /**
   * We first set how big is the white canvas.
   */
  const width = 600,
    height = 400

  /**
   * We create an array to store all circle objects.
   * WE WILL NEED TO MODIFY THIS ARRAY INSIDE OUR
   * FUNCTIONS.
   */
  let circles = []

  /**
   * We also set the default speed of the ball.
   */
  const speed = 2

  /**
   * This code defines what to do when "Click to
   * add a circle" button is clicked.
   */
  document.getElementById('add-circle-btn').addEventListener('click', (e) => {
    /**
     * TASK 1:
     * We want to create a circle object, and append
     * the object at the end of circles array.
     *
     * You can create a circle object by invoking
     * createCircle() function.
     *
     * i.e. let circle = createCircles()
     * // circle is an object now
     *
     * Create a new circle object, then append to
     * the circles array.
     *
     * HINT:
     * How do you add an object at the end of an array?
     * Do you remember your array methods?
     * (push, pop, shift, unshift, indexOf, find,
     * findIndex, splice, etc...)
     */

    // Your codes below here:
    circles.push(createCircle())
  })

  /**
   * Once you finish TASK 1, try clicking the "
   * Click to add a circle" button and see what
   * happens!
   *
   * If you did it well, something interesting will
   * happen!
   *
   * Try clicking the "Log current circles" button
   * as well. Useful information will pop up below
   * the white canvas. The information are the
   * properties of each ball. Use them to your own
   * benefit.
   */

  /**
   * This code defines what to do when "Clear all
   * circles" button is clicked
   */
  document.getElementById('clear').addEventListener('click', (e) => {
    /**
     * TASK 2:
     * We want to remove all elements in the circles
     * array when the button is clicked.
     *
     * So... remove all elements in the circles array
     */

    // Your codes below here:
    circles = []
  })

  /**
   * This code defines what to do when "Delete the
   * oldest ball" button is clicked
   */
  document.getElementById('delete-ball').addEventListener('click', (e) => {
    /**
     * TASK 3:
     * We want to remove just one element in the
     * circles array. Specifically, we want to delete
     * the first element in the circles.
     *
     * Remove the first element in the circles
     */

    // Your codes below here:
    circles.shift()
  })

  /**
   * This code defines what to do when "Stop all
   * circles" button is clicked.
   *
   * There are a lot of codes you may not understand
   * here. I will write some explanation for each code,
   * but don't try to understand all of them fully. Just
   * follow the instructions, and you will be able to finish
   * the challenge.
   */
  document.getElementById('toggleStop').addEventListener('click', (e) => {
    // We grab the button that says "Stop all circles"
    const btn = document.getElementById('toggleStop')

    // Does the button says "Stop all circles"?
    // if it does...
    if (btn.value === 'Stop all circles') {
      /**
       * TASK 4:
       * We want to stop all circles that belongs to
       * the circles array.
       *
       * Change all circles' speed to 0.
       *
       * HINT 1:
       * Have you ever pressed "Log current circles?"
       * It shows all properties of all circles.
       *
       * You probable saw the property called speed.
       *
       * You want to modify that property.
       *
       * Do you remember how to modify a property of
       * an object?
       *
       * HINT 2:
       * We need to change ALL objects in the circles
       * array.
       *
       * Do you remember your for-loop or forEach loop?
       */

      // Your codes below here:
      circles.forEach(function (item) {
        item.speed = 0
      })

      // We want to change the button to say "Resume
      // moving." We also want to disable the add button
      btn.value = 'Resume moving'
      document.getElementById('add-circle-btn').disabled = true
    }
    // if it is not...
    else {
      /**
       * TASK 5:
       * We want all circles to resume moving again.
       *
       * Change all circles' speed to the default speed.
       *
       * HINT:
       * If you were able to do TASK 3, this should be
       * a piece of cake, since it is the same logic.
       */

      // Your codes below here:
      circles.forEach(function (item) {
        item.speed = speed
      })

      // We want to change the button to say "Stop all
      // circles." We also want to enable the add button
      btn.value = 'Stop all circles'
      document.getElementById('add-circle-btn').disabled = false
    }
  })

  /**
   * This defines what to do when "Log current circles"
   * button is clicked.
   *
   * Just create a string from circles array, show that
   * at container with the id 'log'
   */
  document.getElementById('log-details').addEventListener('click', (e) => {
    document.getElementById('log').innerHTML = JSON.stringify(circles, null, 2)
  })

  /**
   * Set up the canvas with appropriate dimension and
   * frame rate
   */
  sketch.setup = () => {
    sketch.createCanvas(width, height)
    sketch.frameRate(60)
  }

  /**
   * At every frame, move the circles and re-draw them
   */
  sketch.draw = () => {
    sketch.background(255)
    circles.forEach(function (circle) {
      circle.move()
      circle.display()
    })
  }

  /**
   * This function returns an object of circle. It has
   * various properties (click on log button for
   * reference)
   */
  let createCircle = function () {
    const radius = sketch.random(10, 30)
    return {
      radius: radius,
      x: sketch.random(radius, width - radius),
      y: sketch.random(radius, height - radius),
      speed: speed,
      colorR: sketch.random(255),
      colorG: sketch.random(255),
      colorB: sketch.random(255),

      xDirection: sketch.random() < 0.5 ? -1 : 1,
      yDirection: sketch.random() < 0.5 ? -1 : 1,

      // what is this?
      move: function () {
        this.x += this.speed * this.xDirection
        this.y += this.speed * this.yDirection

        if (this.x > width - this.radius || this.x < this.radius) {
          this.xDirection *= -1
        }
        if (this.y > height - this.radius || this.y < this.radius) {
          this.yDirection *= -1
        }
      },

      // ... and this?
      display: function () {
        sketch.fill(this.colorR, this.colorG, this.colorB)
        sketch.ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
      },

      /**
       * Explanation:
       * You can add functions specifically for the object.
       * If I have an object called circle,
       * let circle = createCircles()
       * I can invoke functions called move and display with
       * my object.
       *
       * circle.move() will update its x and y coordinate,
       * circle.display() will render the circle inside the
       * canvas.
       */
    }
  }
}, document.getElementById('student-answer'))
