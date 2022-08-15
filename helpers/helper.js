

  

  function getRandomString() {
    var lenght = randomInteger(1, 30);
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < lenght; i++ ) {result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
    return result;
  }
 
