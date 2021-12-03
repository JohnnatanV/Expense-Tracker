class Outcome extends Data {
  static outcomeCounter = 0;

  constructor(description, value) {
    super(description, value);
    this._id = ++Outcome.outcomeCounter;
  }

  get id() {
    return this._id;
  }
}
