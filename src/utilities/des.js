import CryptoJS from 'crypto-js';

export const des = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  if (btnText === 'Encode') {
    if(secretKey == ''){
      encryptedText = ''
    }
    else{
      encryptedText = CryptoJS.DES.encrypt(inputText, secretKey).toString(); 
    }
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.DES.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
