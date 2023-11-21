import CryptoJS from 'crypto-js';

export const three_des = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  // Check for key length (24 bytes for Triple DES)
  const isValidKey = secretKey.length === 14 || secretKey.length === 21;

  if (!isValidKey) {
    return 'Invalid key length. Please enter a 14-byte (112-bit) or 21-byte (168-bit) key for Triple DES.';
  }

  if (btnText === 'Encode') {
    if (secretKey === '') {
      encryptedText = '';
    } else {
      encryptedText = CryptoJS.TripleDES.encrypt(inputText, secretKey).toString();
    }
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.TripleDES.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
