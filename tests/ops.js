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
  t.throws(() => ops.dotMultiplication(m1, m2), new Error,'Error: Dimensions des matrices non correspondantes');
});

test('dotDivision', t => {
  t.plan(3);
  let options = {
    precision: 4
  };
  let ops = new lib(options);
  let m1 = [[1,2], [3,4]];
  let m2 = [[5,6], [7,8]];
  let res = ops.dotDivision(m1, m2);
  t.deepEqual(res, [[0.2,0.3333], [0.4285,0.5]], '2x2 ./ 2x2');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  m2 = [[1,2,3], [2,3,1],[3,1,2]];
  res = ops.dotDivision(m1, m2);
  t.deepEqual(res, [[1,1,1],[1,1,1],[1,1,1]], '3x3 ./ 3x3');

  m1 = [[1,4], [2,3], [3,2], [4,1]];
  m2 = [[1,2,3,4], [4,3,2,1]];
  t.throws(() => ops.dotDivision(m1, m2), new Error,'Error: Dimensions des matrices non correspondantes');
});

test('dotPuissance', t => {
  t.plan(2);
  let options = {
    precision: 3
  };
  let ops = new lib(options);
  let m1 = [[1,2], [3,0.04]];
  let res = ops.dotPuissance(m1, 2);
  t.deepEqual(res, [[1,4], [9,0.001]], '2x2²');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  res = ops.dotPuissance(m1, 3);
  t.deepEqual(res, [[1,8,27],[8,27,1],[27,1,8]], '3x3³');
});

test('somme', t => {
  t.plan(2);
  let ops = new lib();
  let m1 = [[1,2], [3,0.0000004]];
  let res = ops.somme(m1);
  t.deepEqual(res, [[4,2.0000004]], '2x2');

  m1 = [[1,2,3], [2,3,1], [3,1,2]];
  res = ops.somme(m1);
  t.deepEqual(res, [[6,6,6]], '3x3');
});

test('logarithme', t => {
  t.plan(2);
  let ops = new lib({precision:5});
  let m1 = [[1,2], [3,0.0000004]];
  let res = ops.logarithme(m1);
  t.deepEqual(res, [[0,0.69314],[1.09861, -14.73180]], '2x2');

  m1 = [[1,2,3], [2,3,1], [3,1,2]];
  res = ops.logarithme(m1);
  t.deepEqual(res, [[0,0.69314,1.09861], [0.69314,1.09861,0], [1.09861,0,0.69314]], '3x3');
});

test('moyenne', t => {
  t.plan(2);
  let ops = new lib({precision:2});
  let m1 = [[1,2], [3,0.0000004]];
  let res = ops.moyenne(m1);
  t.deepEqual(res, [[2,1]], '2x2');

  m1 = [[1,2,3], [2,3,1], [3,1,2]];
  res = ops.moyenne(m1);
  t.deepEqual(res, [[2, 2, 2]], '3x3');
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
  t.throws(() => ops.addition(m1, m2), new Error,'Error: Dimensions des matrices non correspondantes');
});

test('additionScalaire', t => {
  t.plan(2);

  let ops = new lib();
  let m1 = 2;
  let m2 = [[1,2,3], [2,3,1],[3,1,2]];
  let res = ops.additionScalaire(m1, m2);
  t.deepEqual(res, [[3,4,5],[4,5,3],[5,3,4]], '2 + 3x3');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  m2 = 3;
  res = ops.additionScalaire(m1, m2);
  t.deepEqual(res, [[4,5,6],[5,6,4],[6,4,5]], '3x3 + 3');
});

test('soustraction', t => {
  t.plan(3);

  let ops = new lib();
  let m1 = [[1,2], [3,4]];
  let m2 = [[5,6], [7,8]];
  let res = ops.soustraction(m1, m2);
  t.deepEqual(res, [[-4,-4],[-4,-4]], '2x2 - 2x2');

  m1 = [[1,2,3], [2,3,1],[3,1,2]];
  m2 = [[1,2,3], [2,3,1],[3,1,2]];
  res = ops.soustraction(m1, m2);
  t.deepEqual(res, [[0,0,0],[0,0,0],[0,0,0]], '3x3 - 3x3');

  m1 = [[1,4], [2,3], [3,2], [4,1]];
  m2 = [[1,2,3,4], [4,3,2,1]];
  t.throws(() => ops.soustraction(m1, m2), new Error,'Error: Dimensions des matrices non correspondantes');
});

test('uns', t => {
  t.plan(1);

  let ops = new lib();
  let m2 = [[5,6], [7,8]];
  let res = ops.uns(m2);
  t.deepEqual(res, [[1,5,6],[1,7,8]], '2x2');
});
