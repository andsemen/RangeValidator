"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }

  set from(numb) {
    if (isNaN(numb) || typeof numb !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (numb > this.to) {
      throw new RangeError(
        "The number in from cannot be greater than number in to"
      );
    }

    this._from = numb;
  }

  get to() {
    return this._to;
  }

  set to(numb) {
    if (isNaN(numb) || typeof numb !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (numb < this.from) {
      throw new RangeError(
        "The number in to cannot be less than number in from"
      );
    }

    this._to = numb;
  }

  get range() {
    const result = [];

    for (let i = this.from; i <= this.to; i++) {
      result.push(i);
    }
    return result;
  }

  validate(numb) {
    if (isNaN(numb) || typeof numb !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (numb >= this.from && numb <= this.to) {
      return numb;
    }
    throw new RangeError("This number is not included in range of array");
  }
}
