module.exports = function check(str, bracketsConfig) {
  let res = [str.charAt(0)];
  for (let i=1; i<str.length; i++) {
    res.push(str.charAt(i));
    bracketsConfig.forEach(element => {
      if (element.join('') === [res[res.length - 2], res[res.length - 1]].join('')) {
        res.pop();
        res.pop();
      }
    });
  }
  return res.length === 0;
}
