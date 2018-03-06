function forLoop(list){
  for (var i = 0; i < 25; i++) {
    if (i===1) {
      list.push("I am 1 strange loop.")
    }
    else {
      list.push("I am ${i} strange loops.")
    }
  }
  return list;
}

function whileLoop(digit) {
  while (digit > 0) {
    console.log(--digit);
  }
  return "done";
}