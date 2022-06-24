const { sum, multiply, divide } = require('./02-math');

test('sum(1,2) should be 3', () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});

test('multiply(2,3) should be 6', () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

describe('divide', () => {
  test('divide(6,3) should be 2', () => {
    const rta = divide(6, 3);
    expect(rta).toBe(2);
  });
  test('divide(6,0) should be null', () => {
    const rta = divide(6, 0);
    expect(rta).toBe(null);
  });
});
