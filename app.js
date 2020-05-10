"use strict"; // strictモードを利用し、曖昧な実装を防止
function fib(n) {
  if (n === 0) {
    // 0の時は0を戻す
    return 0;
  } else if (n === 1) {
    // 1の時は1を戻す
    return 1;
  }
  // 1つ前の数、2つ前の数を足しあわせた結果を戻す
  // 再帰：関数定義の中で、自分自身を呼び出す
  //        この実装では、return 0 or return 1 が戻るまで呼出しが繰り返されるので指数オーダーになる
  return fib(n - 1) + fib(n - 2);
}

// 40個までやる
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
