var url = prompt("What URL extention would you like to add? ex: .com, .net .io")
var first = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"];
for (var i = 0; i < first.length; i++) {
 for (var j = 0; j < first.length; j++) {
   for (var k = 0; k < first.length; k++) {
     var threeLetterUrl = (first[i] + first[j] + first[k] + url + "<br>");  
     document.write (threeLetterUrl);
    }
  }
   
}


