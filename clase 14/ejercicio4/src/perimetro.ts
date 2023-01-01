export default class Perimetro {
  static cuadrado(x: number) {
    return x * 4;
  }

  static triangulo(x: number, y: number, z: number) {
    return x + y + z;
  }

  static rectangulo(x: number, y: number) {
    return (x + y) * 2;
  }
}
