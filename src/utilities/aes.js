import CryptoJS from 'crypto-js';

export const aes = (inputText, secretKey, btnText) => {
  let encryptedText = '';

  // Check for key length (128, 192, or 256 bits)
  const isValidKey = [16, 24, 32].includes(secretKey.length); // AES key lengths in bytes: 16, 24, 32 (corresponding to 128, 192, 256 bits)

  if (!isValidKey) {
    return 'Invalid key length. Please enter a valid AES key length (16, 24, or 32 characters).';
  }

  if (btnText === 'Encode') {
    if (secretKey === '') {
      encryptedText = '';
    } else {
      encryptedText = CryptoJS.AES.encrypt(inputText, secretKey).toString();
    }
  } else if (btnText === 'Decode') {
    const decryptedBytes = CryptoJS.AES.decrypt(inputText, secretKey);
    encryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  return encryptedText;
};
