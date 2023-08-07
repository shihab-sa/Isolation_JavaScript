
/*
string থেকে প্রত্যেকটি single character এর কোড গুলো বের করে দেখাও!
আমরা এই  charCodeAt() মেথডের মাধ্যমে বের করতে পারি!
*/


function caesarCipher(s) {
    
  
    for (var i = 0; i < s.length; i++) {
      var charCode = s.charCodeAt(i);
      console.log(charCode);
  }
}
  
  console.log(caesarCipher("middle-Outz"));
