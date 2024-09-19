module.exports.generateRandomString = (length) => {
    const character ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
  
    for (let i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * character.length));
    }
  
    return result;
  };
  module.exports.generateNumber = (length) => {
    const Number ="0123456789";
    var result = "";
  
    for (let i = 0; i < length; i++) {
      result += Number.charAt(Math.floor(Math.random() * Number.length));
    }
  
    return result;
  }
  