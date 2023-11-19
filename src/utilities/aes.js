import CryptoJS from 'crypto-js';

export const aes = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  if (btnText === 'Encode') {
    encryptedText = CryptoJS.AES.encrypt(inputText, secretKey).toString();
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.AES.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
