const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' });
  })

})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const output = utils.trimPropertiesMutation(input)
    expect(output).toBe(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const numbers = [
      { integer: 7 },
      { integer: 8 },
      { integer: 17 }
    ]
    const expected = 17;
    const largest = utils.findLargestInteger(numbers);
    expect(largest).toBe(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const countDown = counter.countDown();
    expect(countDown).toBe(3);
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const countDown = counter.countDown();
    expect(countDown).toBe(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 0; i < 10; i++) {
      counter.countDown();
    }
    const countDown = counter.countDown();
    expect(countDown).toBe(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const output = seasons.next();
    expect(output).toEqual("summer");
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (let i = 0; i < 1; i++) {
      seasons.next();
    }
    const output = seasons.next();
    expect(output).toEqual("fall");
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    const output = seasons.next();
    expect(output).toEqual("winter");
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    const output = seasons.next();
    expect(output).toEqual("spring");

  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    const output = seasons.next();
    expect(output).toEqual("summer");

  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    const output = seasons.next();
    expect(output).toEqual("spring");
  })

})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const updatedOdometer = focus.drive(100);
    expect(updatedOdometer).toBe(100);
  })
  test('[16] driving the car uses gas', () => {
    const remainGas = 17;
    focus.drive(90);
    expect(focus.tank).toBe(remainGas);
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600);
    let odometer = focus.drive(1);
    expect(odometer).toBe(600);
    focus.refuel(10);
    odometer = focus.drive(1);
    expect(odometer).toBe(601);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const ableToRun = focus.refuel(10);
    expect(ableToRun).toBe(600);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const output = await utils.isEvenNumberAsync(2);
    expect(output).toBeTruthy();
  })
  test('[20] resolves false if passed an odd number', async () => {
    const output = await utils.isEvenNumberAsync(1);
    expect(output).toBeFalsy();
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    try {
      await utils.isEvenNumberAsync("2");
    } catch (error) {
      expect(error.message).toEqual("number must be a number");
    }
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    try {
      await utils.isEvenNumberAsync(NaN);
    } catch (error) {
      expect(error.message).toEqual("number must be a number");
    }
  })
})
