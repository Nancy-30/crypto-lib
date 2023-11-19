import CryptoJS from "crypto-js";

export function serpent(inputText, secretKey, btnText) {
  if (btnText === "Encode") {
    const encryptedText = CryptoJS.Serpent.encrypt(
      inputText,
      secretKey
    ).toString();
    return encryptedText;
  } else {
    const decryptedText = CryptoJS.Serpent.decrypt(inputText, secretKey).toString(
      CryptoJS.enc.Utf8
    );
    return decryptedText;
  }
}
