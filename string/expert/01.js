
// অনেক গুলো single character / string এর কোড গুলো কি ভাবে পেতে পারি  charCodeAt()


function caesarCipher(s) {
    
  
    for (var i = 0; i < s.length; i++) {
      var charCode = s.charCodeAt(i);
      console.log(charCode);
  }
}
  
  console.log(caesarCipher("middle-Outz"));
