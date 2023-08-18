const { add, reverseString } = require('./reverseString');

describe('Add function Suite', () => {
  test('Should give you 2 when 1 + 1 is added', () => {
    //expected = what was it supposed to be
    //result = what did the code recieve
    const result = add(1, 1);
    expect(result).toBe(2);
  });

  test('Should give me 12 when i pass in 8 and 4', () => {
    const result = add(8, 4);

    expect(result).toBe(12);
  });
});

describe('ReverseString Suite', () => {
  test('Should give me rac when I pass in car', () => {
    const result = reverseString('car');
    expect(result).toBe('rac');
  });

  test('Should give me nworg when I pass in grown', () => {
    const result = reverseString('grown');
    expect(result).toBe('nworg');
  });

  test('Should return "Yay a Palindrome" when given a Palindrome', () => {
    const result = reverseString('racecar');
    expect(result).toBe('Yay a Palindrome');
  });
});
