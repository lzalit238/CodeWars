function disemvowel(str) {
    var str = str.replace(/[aeiou]/gi, '');
  //checks for vowels (excluding y), tests it on global(g) and insensitive(i) cases, then replaces any [aeiou] with empty string 
  return str;
}