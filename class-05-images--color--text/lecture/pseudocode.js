// - Pseudocode: function rectangleAreaAndPerimeter
// - write a function that takes two numbers, calculates the perimeter and area of a rectangle with sides defined by those numbers, and returns an array containing (in this order): the perimeter, the area, and the exact string
// All `<>` values in the string should be dynamically populated based on the function call.

function rectangleAreaAndPerimeter(x, y) {
  //calculate perimeter
  var perimeter = 2 * x + 2 * y;
  //calculate area
  var area = x * y;
  // return an array
    // array[0] = perimeter
    // array[1] = area
    // array[2] = big string
  // 'A rectangle with sides of length <x> and <y> has a perimeter of <P> and an area of <A>.'

  return [perimeter, area, 'A rectangle with sides of length ' + x + ' and ' + y + ' has a perimeter of ' + perimeter + ' and an area of ' + area + '.'];
}

console.log(rectangleAreaAndPerimeter(4, 7));
