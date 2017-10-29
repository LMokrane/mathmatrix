class Matrice {
  constructor(options) {
    let conf = options || {
      precision : 5
    };
    this.precision = conf.precision;
  }

  _virgule(val) {
    let regx = new RegExp(`[0-9]*\.[0-9]{${this.precision}}`,'g');
    let res = regx.exec(val);
    return res ? parseFloat(res[0]) : val;
  }

  multiplication(A, B) {
    let n= A.length, m= B.length, p= B[0].length;
    let C = [];
    for (let i=0; i<n; i++) {
      C[i] = [];
      for (let j=0; j<p; j++) {
        C[i][j] = 0;
        for (let k=0; k<m; k++) {
          C[i][j] += this._virgule(A[i][k] * B[k][j]);
        }
      }
    }
    return C;
  }

  dotMultiplication(A, B) {
    let n= A.length, m= A[0].length;
    if (n !== B.length && m !== B[0].length) {
      throw new Error('Dimensions des matrices non correspondantes');
    } else {
      let C = [];
      for (let i=0; i<n; i++) {
        C[i] = [];
        for (let j=0; j<m; j++) {
          C[i].push( this._virgule(A[i][j] * B[i][j]) );
        }
      }
      return C;
    }
  }

  dotDivision(A, B) {
    let n= A.length, m= A[0].length;
    if (n !== B.length && m !== B[0].length) {
      throw new Error('Dimensions des matrices non correspondantes');
    } else {
      let C = [];
      for (let i=0; i<n; i++) {
        C[i] = [];
        for (let j=0; j<m; j++) {
          C[i].push( this._virgule(A[i][j] / B[i][j]) );
        }
      }
      return C;
    }
  }

  dotPuissance(A, p) {
    let n= A.length, m= A[0].length;
    let C = [];
    for (let i=0; i<n; i++) {
      C[i] = [];
      for (let j=0; j<m; j++) {
        C[i].push( this._virgule(Math.pow(A[i][j], p) ));
      }
    }
    return C;
  }

  somme(A) {
    let n= A.length, m= A[0].length;
    let C= [[]];
    for (let i=0; i<n; i++) {
      for (let j=0; j<m; j++) {
        C[0][j] ? C[0][j] += this._virgule(A[i][j]) : C[0].push(A[i][j]);
      }
    }
    return C;
  }

  addition(A, B) {
    let n= A.length, m= A[0].length;
    if (n !== B.length && m !== B[0].length) {
      throw new Error('Dimensions des matrices non correspondantes');
    } else {
      let C = [];
      for (let i=0; i<n; i++) {
        C[i] = [];
        for (let j=0; j<m; j++) {
          C[i].push( this._virgule(A[i][j] + B[i][j]) );
        }
      }
      return C;
    }
  }

  additionScalaire(A, B) {
    let n=0, m=0, C=[];
    if (Array.isArray(A)) {
      n=A.length;
      m=A[0].length;
      for (let i=0; i<n; i++) {
        C[i] = [];
        for (let j=0; j<m; j++) {
          C[i].push( this._virgule(A[i][j] + B) );
        }
      }
    } else {
      n=B.length;
      m=B[0].length;
      for (let i=0; i<n; i++) {
        C[i] = [];
        for (let j=0; j<m; j++) {
          C[i].push( this._virgule(B[i][j] + A) );
        }
      }
    }
    return C;
  }

  soustraction(A, B) {
    let n= A.length, m= A[0].length;
    if (n !== B.length && m !== B[0].length) {
      throw new Error('Dimensions des matrices non correspondantes');
    } else {
      let C = [];
      for (let i=0; i<n; i++) {
        C[i] = [];
        for (let j=0; j<m; j++) {
          C[i].push( this._virgule(A[i][j] - B[i][j]) );
        }
      }
      return C;
    }
  }
}

module.exports = Matrice;
