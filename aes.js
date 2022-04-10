// 단방향 
const crypto = require('crypto');

const aesKey = crypto.randomBytes(32) // 32 byte
const iv = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]); 

const aes256Encrypt = (text)  => {
  let cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
  let result = cipher.update(text, 'utf8', 'base64');
  result += cipher.final('base64');
  return result
}

const aes256Decrypt = (cryptogram) =>  {   
  const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
  let result = decipher.update(cryptogram, 'base64', 'utf8');
  result += decipher.final('utf8');
  return result
}

let plainTextData = "멍개입니다"
let encryptStr = aes256Encrypt(plainTextData)
let decryptStr = aes256Decrypt(encryptStr)

console.log("  encryptStr : ", encryptStr)
console.log("  decryptStr : ", decryptStr)