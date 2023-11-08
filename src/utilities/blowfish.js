import { Blowfish } from "egoroof-blowfish";

export function blowfish(inputText, secretKey, btnText) {
  const bf = new Blowfish(
    "super key",
    Blowfish.MODE.ECB,
    Blowfish.PADDING.NULL
  );
  if (btnText === "Encode") {
    const encryptedText = bf.encode(inputText);
    return encryptedText;
  } else {
    const decryptedText = bf.decode(inputText, Blowfish.TYPE.STRING);
    return decryptedText;
  }
}
