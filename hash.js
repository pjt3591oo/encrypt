const crypto = require('crypto');

const createPW = pw => crypto.createHash('sha512').update(pw).digest('hex')
console.log(createPW('멍개'))

console.log('more complex')

const salt = 'slat 소금 짜당~';
console.log('salt', salt);
crypto.pbkdf2('plain text멍개멍개멍개', salt, 1203947, 64, 'sha512', (err, key) => {
  console.log('password', key.toString('base64'));
});