// Hamming distance string comparor
//https://stackoverflow.com/questions/36120278/compare-string-and-return-true-if-there-is-small-spelling-mistake
export function hammingDistance(str1, str2) {
  var dist = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (var i = 0, j = Math.max(str1.length, str2.length); i < j; i++) {
    if (!str1[i] || !str2[i] || str1[i] !== str2[i]) {
      dist++;
    }
  }
  return dist;
}
