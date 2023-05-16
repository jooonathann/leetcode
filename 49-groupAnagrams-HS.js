const groupAnagrams = function (strs) {
  const counter = {};
  for (let i = 0; i < strs.length; i += 1) {
    const str = strs[i].split('').sort().join('');
    if (!counter[str]) {
      counter[str] = [strs[i]];
    } else {
      counter[str].push(strs[i]);
    }
  }
  const anagramsArr = Object.values(counter);
  return anagramsArr;
};
