import CryptoJS from 'crypto-js';

export const blowfish = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  if (btnText === 'Encode') {
    if(secretKey == ''){
      encryptedText = ''
    }
    else{
      encryptedText = CryptoJS.Blowfish.encrypt(inputText, secretKey).toString();
    }
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.Blowfish.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
