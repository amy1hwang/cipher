/* var sentence = prompt("Please enter a sentence: ");

var capitalize = function(sentence) {
  var capitalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1, -1) + sentence.slice(-1).toUpperCase();
  return capitalSentence;
};

alert(capitalize(sentence)); */



var sentence = prompt("Please enter a sentence: ");

console.log(sentence);

var capitalLetters = function(sentence) {
  var capitalizedFirstLast = sentence.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();
  return capitalizedFirstLast;
};


// var capitalizedSentence = capitalLetters(sentence)

var reverseLetters = function(capitalizedSentence) {
  var reversedCapitals = capitalizedSentence.slice(-1) + capitalizedSentence.charAt(0);
  return reversedCapitals;
};



var callBoth = function(sentence) {
  var caps = capitalLetters(sentence);
  return reverseLetters(caps);
};

console.log(callBoth(sentence));

var combineEnd = function(sentence) {
  return sentence + callBoth(sentence);
};

console.log(combineEnd(sentence));

var countNumber = function(sentence) {
  var halfSentence = sentence.length / 2;
  var middleLetter = sentence.charAt(halfSentence);
  return middleLetter + sentence;
};
console.log(countNumber(sentence).split("").reverse().join(""));
