import CryptoJS from "crypto-js";

export function des(inputText, secretKey, btnText) {
  if (btnText === "Encode") {
    const encryptedText = CryptoJS.DES.encrypt(inputText, secretKey).toString();
    console.log(encryptedText);
    return encryptedText;
  } else {
    const decryptedText = CryptoJS.DES.decrypt(inputText, secretKey).toString(
      CryptoJS.enc.Utf8
    );
    console.log(decryptedText);
    return decryptedText;
  }
}
