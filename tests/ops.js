const lib = require('..');
const test = require('tape');

test('multiplication', t => {
  t.plan(3);

  try {
    let ops = new lib();
    let m1 = [[1,2], [3,4]];
    let m2 = [[5,6], [7,8]];
    let res = ops.multiplication(m1, m2);
    t.equal(res, [[19,22],[43,50]], '2x2');

    m1 = [[1,2,3], [2,3,1],[3,1,2]];
    m2 = [[1,2,3], [2,3,1],[3,1,2]];
    res = ops.multiplication(m1, m2);
    t.equal(res, [[14,11,11],[11,14,11],[11,11,14]], '3x3');

    m1 = [[1,4], [2,3], [3,2], [4,1]];
    m2 = [[1,2,3,4], [4,2,3,1]];
    res = ops.multiplication(m1, m2);
    t.equal(res, [[17,14,11,8],[14,13,12,11],[11,12,13,14],[8,11,14,17]], '2x4 * 4x2');
  } catch(err) {
    t.fail(err);
  }
});
