import CryptoJS from 'crypto-js';

export const three_des = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  if (btnText === 'Encode') {
    if(secretKey == ''){
      encryptedText = ''
    }
    else{
      encryptedText = CryptoJS.TripleDES.encrypt(inputText, secretKey).toString();
    }
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.TripleDES.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
