/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  const arr = [];
  const arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      arr2.push(t[i]);
    } else {
      arr2.pop();
    }
  }

  if (arr.length !== arr2.length) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};