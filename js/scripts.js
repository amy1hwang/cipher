var sentence = prompt("Please enter a sentence: ");

var capitalize = function(sentence) {
  /*var capitalFirst = sentence.charAt(0).toUpperCase() + sentence.slice(1);*/
  var capitalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1, -1) + sentence.slice(-1).toUpperCase();
  return capitalSentence;
};

alert(capitalize(sentence));
