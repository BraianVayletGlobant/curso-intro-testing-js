// Assertions or Matchers

test('test obj', () => {
  const data = {
    name: 'John',
    age: 30,
    isMarried: false,
  };
  expect(data).toEqual({
    name: 'John',
    age: 30,
    isMarried: false,
  });

  data.lastname = 'Doe';
  expect(data).toEqual({
    name: 'John',
    lastname: 'Doe',
    age: 30,
    isMarried: false,
  });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('boolean', () => {
  const b = true;
  expect(b).toBeTruthy();
  expect(b).not.toBeFalsy();
  expect(b).toEqual(true);
  const c = false;
  expect(c).toBeFalsy();
  expect(c).not.toBeTruthy();
  expect(c).toEqual(false);
});

test('string', () => {
  expect('hello').toBeTruthy();
  expect('hello').toBeDefined();
  expect('hello').not.toBeUndefined();
  expect('hello').toMatch('ell');
  expect('hello').toMatch(/ell/);
});

test('list / arrays', () => {
  const numbers = [0, 1, 2, 3, 4, 5];
  expect(numbers).toBeTruthy();
  expect(numbers).toContain(3);
});
