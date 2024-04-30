import { sumTwoNumbers } from './main';

test('Sum two numbers', () => {
  const total = sumTwoNumbers(1, 1);

  expect(total).toBe(2);
});
