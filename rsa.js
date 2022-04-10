const crypto = require("crypto");

const RSA_PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----\nMIICXAIBAAKBgQC41wsMRbC4M4zkWYPI85WwYttEgbLQmIiHD4g6Kjz43h0+3rgt\n8m6IJtolraHpIus+izEx03kpYgJiTLAdruQBDqXTgTyIafZpLaZxH8kYVTomfjJL\nzqTbxuHz1uLqqOaeLzvKiKbCbbCaKWolgCQOCUu+rj/qdftchEVq/LcCcwIDAQAB\nAoGAbIo6fpZd04zR6zV1YYdIGy+xumS+8Cbh5Q2F3UH4U9t6KPT4CmMV7PWDnCR9\nsz1CDpQF61BXEanv5HFL6eJNGCH20z4SctlnMZCw0CJvel4tue4mVmAORctXfcy8\nA9gXpP2D3+tWInSRjZqDZt95ca6N5htlf99a7dcebh7xQkECQQDl/KChwiHw4nBk\nGuDlRp1G7TdP5chBDccdS0655957ZJCROcrjglfJobaGNFsjhoEyWPMl+Ywbt6IZ\n1FV7Z0FbAkEAzb8rVjhuiUurkf9boO2gq1EBMhNULJJHZOB50dpXiD8LvzWcBzvm\nYPppsMYUNS35ItaqXpvQLYswyIA3Seq2yQJAPen7qHBlyL58+UYPI0oWTyDPUjAO\n8AxwfR9n6z5Ts65ICQCg8QyG654gUBLKMk8ketRdaOy8Xj3aYs+5z4XlnwJABlxE\nkLPJ5wCp2yeTw5PVBbbJXKzwSzhycJHn8i7XyeR5Dn4vxqF5a8ISBl75PPOg4gzU\n03vpoZ7N8UTVcLmK0QJBAN4B3D/iBTce6Q5q3Apza8jzMS5ZZjh4Y8/A9K6IiQ54\nkul2tfIVywHVFoxJzGm4JMkHSf7yoVjsjEDpQvKMnIk=\n-----END RSA PRIVATE KEY-----"
const RSA_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC41wsMRbC4M4zkWYPI85WwYttE\ngbLQmIiHD4g6Kjz43h0+3rgt8m6IJtolraHpIus+izEx03kpYgJiTLAdruQBDqXT\ngTyIafZpLaZxH8kYVTomfjJLzqTbxuHz1uLqqOaeLzvKiKbCbbCaKWolgCQOCUu+\nrj/qdftchEVq/LcCcwIDAQAB\n-----END PUBLIC KEY-----"

const privateKey = RSA_PRIVATE_KEY.replace(/\\n/g, '\n');
const publicKey = RSA_PUBLIC_KEY.replace(/\\n/g, '\n');

// public key로 암호화
encodeRSAByPublic = (text) => {
  const buffer = Buffer.from(text);
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("hex");
}

// private key로 암호화
encodeRSAByPrivate = (text) => {
  const buffer = Buffer.from(text);
  const encrypted = crypto.privateEncrypt(privateKey, buffer);
  return encrypted.toString("hex");
}

// private key로 복호화
decodeRSAByPrivate = (text) => {
  const buffer = Buffer.from(text, "hex");
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString("utf8");
}

// public key로 복호화
decodeRSAByPublic = (text) => {
  const buffer = Buffer.from(text, "hex");
  const decrypted = crypto.publicDecrypt(publicKey, buffer);
  return decrypted.toString("utf8");
}

const text = '멍개멍개';

console.log('encrypt: public, decript: private')
const encrypted0 = encodeRSAByPublic(text); 
console.log(`encrypted: ${encrypted0}`);

const decrypted0 = decodeRSAByPrivate(encrypted0); 
console.log(`decrypted: ${decrypted0}`);

console.log('==========================')

console.log('encrypt: private, decript: public')
const encrypted1 = encodeRSAByPrivate(text); 
console.log(`encrypted: ${encrypted1}`);

const decrypted1 = decodeRSAByPublic(encrypted1); 
console.log(`decrypted: ${decrypted1}`);

console.log('==========================')

console.log('encrypt: public, decript: public')
const encrypted2 = encodeRSAByPublic(text); 
console.log(`encrypted: ${encrypted2}`);

const decrypted2 = decodeRSAByPublic(encrypted2); 
console.log(`decrypted: ${decrypted2}`);