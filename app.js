"use strict"; // strictモードを利用し、曖昧な実装を防止
const memo = new Map();
// 0と1の場合の戻り値を定義
memo.set(0, 0);
memo.set(1, 1);

/**
 * フィボナッチ数列取得関数
 * @param {*} n フィボナッチ数列を取得したい数値
 */
function fib(n) {
  // 配列に登録されている場合、その値を戻す
  if (memo.has(n)) {
    return memo.get(n);
  }

  // 1つ前の数、2つ前の数を足しあわせた結果を取得し、引数に紐づけてmemoに登録
  // O(n)：nに対して、n倍処理時間がかかる線形オーダーで実施
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);

  // 登録した値を戻す
  return value;
}

// 40個までやる
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
