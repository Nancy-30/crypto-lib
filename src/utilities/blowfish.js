import CryptoJS from 'crypto-js';

export const blowfish = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  const isValidKey = secretKey.length; 

  if (secretKey.length < 4 || secretKey.length > 56) {
    return 'Invalid key length. Please enter a key between 4 and 56 bytes.';
  }

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
