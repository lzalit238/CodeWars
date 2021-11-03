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
  if(string > 4 ) {
      let splitting = string.split("");
      let reversing = string.reverse();
      let joining = string.join("");
      return joining; 
  } else {
    return string;
  }
}

spinWords("Welcome");