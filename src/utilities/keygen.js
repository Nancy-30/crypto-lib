export const generateRandomKey = async (lengthInBytes) => {
  if (!Number.isInteger(lengthInBytes) || lengthInBytes <= 0) {
    throw new Error('Invalid key length. Please provide a positive integer.');
  }

  try {
    const randomBuffer = new Uint8Array(lengthInBytes);
    await window.crypto.getRandomValues(randomBuffer);

    const keyString = btoa(String.fromCharCode(...randomBuffer)).slice(0, lengthInBytes); 
    return keyString;
  } catch (error) {
    throw new Error('Error generating random key.');
  }
};
