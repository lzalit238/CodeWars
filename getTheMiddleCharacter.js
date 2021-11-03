var position
var length
function getMiddle(s)
{

  if((s.length % 2) == 0) {
    position = s.length / 2 - 1;
    length = 2;
  } else {
    position = (s.length - 1) / 2;
    length = 1;
  }
  return s.substring(position, position + length)
}

getMiddle("test");//es
getMiddle("testing");//t
getMiddle("middle");//dd
getMiddle("A"); //A