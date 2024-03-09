import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // eslint-disable-next-line no-unused-vars
    const { _brand, _motor, _color } = this;
    return new Car();
  }
}
