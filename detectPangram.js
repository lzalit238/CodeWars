function isPangram(string){
  var regex = /([a-z])(?!.*1)/g;
  return(string.match(regex) || []).length === 26;
}
//using regex only passes the 2nd test "This is not a pangram."

function isPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklnmopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++){
    if(strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}