// function rot13(str) {
//     let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     let abc_rog13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
//     let array = Array.from(str);
//     let new_array = [];
//     console.log(array);

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < abc.length; j++) {
//             if (abc_rog13[j] == array[i]) {
//                 new_array[i] = abc[j];
//             }else if(array[i] == " "){
//                 new_array[i] = " ";
//             }
//         }
//     }

//     str = new_array.join(' ');

//     return str;

// }

function rot13(str) {
  // Split str into a character array
  return (
    str
      .split("")
      // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        var x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));