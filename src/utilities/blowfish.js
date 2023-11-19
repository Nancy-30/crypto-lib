import { Blowfish } from "egoroof-blowfish";
// import { Blowfish } from 'blowfish-node'

export function blowfish(inputText, secretKey, btnText) {
  const bf = new Blowfish(secretKey, Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
  if (btnText === "Encode") {
    const encryptedText = bf.encode(inputText);
    return encryptedText;
  } else {
    const decryptedText = bf.decode(inputText);
    return decryptedText;
  }
}
