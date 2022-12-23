function generarColor() {
  var x: number = Math.floor(Math.random() + 255) + 1;
}

console.group(`RGG(${generarColor()},${generarColor()},${generarColor()})`);
