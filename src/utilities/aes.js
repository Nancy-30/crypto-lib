import CryptoJS from "crypto-js";

export function aes(inputText, secretKey, btnText) {
  if (btnText === "Encode") {
    const encryptedText = CryptoJS.AES.encrypt(inputText, secretKey).toString();
    return encryptedText;
  } else {
    const decryptedText = CryptoJS.AES.decrypt(inputText, secretKey).toString(
      CryptoJS.enc.Utf8
    );
    return decryptedText;
  }
}
