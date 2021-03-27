class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    key = key.repeat(Math.ceil(message.length / key.length)).split('');

    let res = '';

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) < 91) {
        res += String.fromCharCode(
          ((message.charCodeAt(i) + key[0].charCodeAt()) % 26) + 65
        );
        key.shift();
      } else {
        res += message.charAt(i);
      }
    }

    if (this.direct === false) {
      return res.split('').reverse('').join('');
    }

    return res;
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    key = key.repeat(Math.ceil(message.length / key.length)).split('');

    let res = '';

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) < 91) {
        res += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key[0].charCodeAt()) % 26) + 65
        );
        key.shift();
      } else {
        res += message.charAt(i);
      }
    }

    if (this.direct === false) {
      return res.split('').reverse('').join('');
    }

    return res;
  }
}

module.exports = VigenereCipheringMachine;
