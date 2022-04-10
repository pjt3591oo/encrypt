const url = 'http://www.naver.com/멍개'

console.log('base64 방식')
console.log(btoa('Man'))  // base64 인코딩 (byte to ascii)
console.log(atob('TWFu')) // base64 디코딩 (ascii to byte)

console.log('encodeURI 방식')
// http://www.naver.com/%EB%A9%8D%EA%B0%9C
console.log(encodeURI(url)) 
// http://www.naver.com/멍개
console.log(decodeURI('http://www.naver.com/%EB%A9%8D%EA%B0%9C'))

console.log('\n')
console.log('encodeURIComponent 방식')
// http%3A%2F%2Fwww.naver.com%2F%EB%A9%8D%EA%B0%9C
console.log(encodeURIComponent(url))
// http://www.naver.com/멍개
console.log(decodeURIComponent('http%3A%2F%2Fwww.naver.com%2F%EB%A9%8D%EA%B0%9C'))