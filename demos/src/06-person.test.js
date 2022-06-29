const Person = require('./06-person');

describe('Test for Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('John', 45, 1.7);
  });

  test('should return down', () => {
    // AAA
    // 1er A: Arrange (Given)
    // 2da A: Act (When)
    // 3er A: Assert (Then)

    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
