function XO(str) {
    let countX = 0;
    let countO = 0;
  
  for (let i =0; i <str.length; i++) {
    let letter = str[i];
    if(letter === "X" || letter === "x"){
      countX++;
    } else if (letter === "o" || letter === "O"){
      countO++;
    }
  }
  return countX === countO;
}