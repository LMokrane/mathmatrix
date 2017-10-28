const lib = require('..');
const test = require('tape');

test('multiplication', t => {
  t.plan(3);

  let ops = new lib();
  let m1 = [[1,2], [3,4]];
  let m2 = [[5,6], [7,8]];
  let res = ops.multiplication(m1, m2);
  t.deepEqual(res, [[19,22],[43,50]], '2x2 * 2x2');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  m2 = [[1,2,3], [2,3,1],[3,1,2]];
  res = ops.multiplication(m1, m2);
  t.deepEqual(res, [[14,11,11],[11,14,11],[11,11,14]], '3x3 * 3x3');

  m1 = [[1,4], [2,3], [3,2], [4,1]];
  m2 = [[1,2,3,4], [4,3,2,1]];
  res = ops.multiplication(m1, m2);
  t.deepEqual(res, [[17,14,11,8],[14,13,12,11],[11,12,13,14],[8,11,14,17]], '4x2 * 2x4');
});

test('dotMultiplication', t => {
  t.plan(3);

  let ops = new lib();
  let m1 = [[1,2], [3,4]];
  let m2 = [[5,6], [7,8]];
  let res = ops.dotMultiplication(m1, m2);
  t.deepEqual(res, [[5,12],[21,32]], '2x2 .* 2x2');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  m2 = [[1,2,3], [2,3,1],[3,1,2]];
  res = ops.dotMultiplication(m1, m2);
  t.deepEqual(res, [[1,4,9],[4,9,1],[9,1,4]], '3x3 .* 3x3');

  m1 = [[1,4], [2,3], [3,2], [4,1]];
  m2 = [[1,2,3,4], [4,3,2,1]];
  t.throws(() => ops.dotMultiplication(m1, m2), new Error,'Dimensions des matrices non correspondantes');
});

test('addition', t => {
  t.plan(3);

  let ops = new lib();
  let m1 = [[1,2], [3,4]];
  let m2 = [[5,6], [7,8]];
  let res = ops.addition(m1, m2);
  t.deepEqual(res, [[6,8],[10,12]], '2x2 + 2x2');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  m2 = [[1,2,3], [2,3,1],[3,1,2]];
  res = ops.addition(m1, m2);
  t.deepEqual(res, [[2,4,6],[4,6,2],[6,2,4]], '3x3 + 3x3');

  m1 = [[1,4], [2,3], [3,2], [4,1]];
  m2 = [[1,2,3,4], [4,3,2,1]];
  t.throws(() => ops.addition(m1, m2), new Error,'Dimensions des matrices non correspondantes');
});
