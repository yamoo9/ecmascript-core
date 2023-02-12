// 객체 합성
// - 객체 합성 (객체 파괴 행위가 있을 수 있음)
// - 객체 파괴 없이 새로운 객체 생성

const a = {
  name: 'alpha',
  use: 'eat',
  methodA() {},
};

const b = {
  name: 'beta',
  methodB() {},
};

const c = Object.assign({}, a, b);

console.log(a);
console.log(b);
console.log(c);
