// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const sWords = new Map();
//   const tWords = new Map();
//   for (let i = 0; i < s.length; i += 1) {
//     if (sWords.has(s[i])) sWords.set(s[i], sWords.get(s[i]) + 1);
//     if (tWords.has(t[i])) tWords.set(t[i], tWords.get(t[i]) + 1);

//     if (!sWords.has(s[i])) sWords.set(s[i], 1);
//     if (!tWords.has(t[i])) tWords.set(t[i], 1);
//   }

//   if (sWords.size !== tWords.size) return false;

//   for ([key, val] of sWords) {
//     if (tWords.get(key) !== sWords.get(key)) return false
//   }
//   return true;
// };

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sWords = {
    size: 0,
  };
  const tWords = {
    size: 0,
  };
  for (let i = 0; i < s.length; i += 1) {
    if (sWords[s[i]]) sWords[s[i]] += 1;
    if (tWords[t[i]]) tWords[t[i]] += 1;

    if (!sWords[s[i]]) {
      sWords[s[i]] = 1;
      sWords.size += 1;
    }
    if (!tWords[t[i]]) {
      tWords[t[i]] = 1;
      tWords.size += 1;
    }
  }
  if (sWords.size !== tWords.size) return false;
  const sWordsKeys = Object.keys(sWords);

  for (let i = 0; i < sWordsKeys.length; i += 1) {
    if (sWords[sWordsKeys[i]] !== tWords[sWordsKeys[i]]) return false;
  }

  return true;
};
