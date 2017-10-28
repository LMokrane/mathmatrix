class Matrice {
  constructor() {
  }

  multiplication(A, B) {
    let n= A.length, m= B.length, p= B[0].length;
    let C = [];
    for (let i=0; i<n; i++) {
      C[i] = [];
      for (let j=0; j<p; j++) {
        C[i][j] = 0;
        for (let k=0; k<m; k++) {
          C[i][j] += A[i][k] * B[k][j];
        }
      }
    }
    return C;
  }

  addition(A, B) {
    let n= A.length, m= A[0].length;
    let C = [];
    for (let i=0; i<n; i++) {
      C[i] = [];
      for (let j=0; j<m; j++) {
        C[i].push(A[i][j] + B[i][j]);
      }
    }
    return C;
  }
}

module.exports = Matrice;
