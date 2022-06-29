describe('group 1', () => {
  beforeAll(() => {
    // (antes de todos los casos)
    // Ej: up db, mocks, etc
    // Corre para case1, case2 y group1.a
    console.log('beforeAll:group 1');
  });

  afterAll(() => {
    // (despues de todos los casos)
    console.log('afterAll:group 1');
  });

  beforeEach(() => {
    // (antes de cada uno de los caso)
    console.log('beforeEach:group 1');
  });

  afterEach(() => {
    // (despues de cada uno de los caso)
    console.log('afterEach:group 1');
  });

  test('case 1', () => {
    console.log('test:case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('test:case 2');
    expect(2 - 1).toBe(1);
  });

  describe('group 2', () => {
    beforeAll(() => {
      // Ej: up db, mocks, etc
      // Corre para case3 y case4
      console.log('beforeAll:group 2');
    });

    afterAll(() => {
      // (despues de todos los casos)
      console.log('afterAll:group 2');
    });

    beforeEach(() => {
      // (antes de cada uno de los caso)
      console.log('beforeEach:group 2');
    });

    afterEach(() => {
      // (despues de cada uno de los caso)
      console.log('afterEach:group 2');
    });

    test('case 3', () => {
      console.log('test:case 3');
      expect(2 * 4).toBe(8);
    });

    test('case 4', () => {
      console.log('test:case 4');
      expect(2 / 1).toBe(2);
    });
  });
});
