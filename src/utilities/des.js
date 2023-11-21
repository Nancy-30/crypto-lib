import CryptoJS from 'crypto-js';

export const des = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  // Check for key length
  const isValidKey = secretKey.length === 7; 

  if (!isValidKey) {
    return 'Invalid key length. Please enter a 56-bit key.';
  }

  if (btnText === 'Encode') {
    if (secretKey === '') {
      encryptedText = '';
    } else {
      encryptedText = CryptoJS.DES.encrypt(inputText, secretKey).toString();
    }
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.DES.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
