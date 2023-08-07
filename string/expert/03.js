//String.fromCharCode() প্রত্যেকটি single character এর কোড গুলোর, আবার single character দেয়

function caesarCipher(s) {
    
  
    for (var i = 0; i < s.length; i++) {
      var charCode = s.charCodeAt(i);
      console.log(String.fromCharCode(charCode));
  }
}
  
caesarCipher("middle-Outz")