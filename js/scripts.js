var pigLatinSentence = function(input) {
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelString = "aeiou";
  var new_input = "";
  var output = [];
  if (vowelString.includes(input.charAt(0))) {
    for (var i = 0; i < vowels.length-1; i++) {
      if (vowels[i] === input.charAt(0)) {
        return output = input.concat('ay');
      }
    }
  } else {
    for (var t= 0; t < input.length-1; t++) {

      if (vowelString.includes(input.charAt(0)) === false) {
        var push = input.slice(0,1); //t
        input = input.replace(input.charAt((0)),"")
        input = input + push;
      }
    }
    return output = input.concat("ay");
  }
}

var pigLatin = function(input) {
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelString = "aeiou";
  var new_input = "";
  var outputString = "";
  var output = []

  if (input.indexOf(' ') >= 0) {
    var inputArry = input.split(' ');
    for (var i = 0; i < inputArry.length; i++) {
      output.push(pigLatinSentence(inputArry[i]));
    }
    return output.join(' ');
  } else {

    if (vowelString.includes(input.charAt(0))) {
      for (var i = 0; i < vowels.length-1; i++) {
        if (vowels[i] === input.charAt(0)) {
          return input.concat('ay');
        }
      }
    } else {
      for (var t= 0; t < input.length-1; t++) {

        if (vowelString.includes(input.charAt(0)) === false) {
          var push = input.slice(0,1); //t
          input = input.replace(input.charAt((0)),"")
          input = input + push;
        }
      }
      return input.concat("ay");
    }
  }
}
