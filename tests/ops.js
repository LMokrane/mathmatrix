const lib = require('..');
const test = require('tape');

test('multiplication', t => {
  t.plan(2);

  try {
    let m1 = [[1,2], [3,4]];
    let m2 = [[5,6], [7,8]];
    let res = lib.multiplication(m1, m2);
    t.equal(res, [[19,22],[43,50]], 'res=[[19,22],[43,50]]');
  } catch(err) {
    t.fail(err);
  }
});
