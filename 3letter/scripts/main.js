// function combinations(current_string, actual_string, seen) {
//     var result = [];
//     if (current_string.length === actual_string.length) {
//         return [current_string];
//     }
//     actual_string.forEach(function(currentChar, index) {
//         if (seen.indexOf(index) === -1) {
//             result = [].concat.apply(result, combinations(current_string
//                 + currentChar, actual_string, seen.concat(index)));
//         }
//     });
//     return result;
// }

// console.log(combinations("", "ABC".split(""), []));

// New
var url = prompt("What URL extention would you like to add? ex: .com, .net .io")
var first = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"];
for (var i = 0; i < first.length; i++) {
 for (var j = 0; j < first.length; j++) {
   for (var k = 0; k < first.length; k++) {
     document.write(first[i] + first[j] + first[k] + url + "<br>");
    }
  }
   
}
  

