function spinWords(string){
  if(string >= 5 ) {
    let splitting = string.split("");
      let reversing = string.reverse();
      let joining = string.join("");
      return joining; 
  }
}

spinWords("Welcome");

function spinWords(string){
  const myArray = string.split(' ');
  myArray.map(str,i)
  if(string > 4 ) {
      let splitString = string.split("");
      let reverseString = splitString.reverse();
      let joinString = reverseString.join("");
      return joinString; 
  } else if(string <= 4) {
    return string;
  }
}

spinWords("Welcome");


function spinWords(string) {
  return string.split("").reverse().join("");
}

spinWords("Hello");


//spins whole sentence
function spinWords(string) {
  if (string >= 5) {
      return string.split("").reverse().join("");
  } else {
    return string;
  }
}

//spins all words
function spinWords(string) {
    let splitString = string.split(" ").map(word => word.split("").reverse().join(""));
  return splitString.join(" ");
}
spinWords("Hello There Lily");