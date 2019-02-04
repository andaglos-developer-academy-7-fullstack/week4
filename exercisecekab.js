/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/


function checkAB(num) {
    // you can only write your code here!

    var jarak = num.length;
    var saaIni = '';

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a' && saaIni !== 'a') {
            saaIni = 'a';
            jarak = 0;
        }
        else if (num[i] === 'b' && saaIni !== 'b') {
            if (jarak <= 3) {
                return true;
            }
            saaIni = 'b';
            jarak = jarak + 1;
        }
        else {
            jarak = jarak + 1;
            if (jarak > 3) {
                hasilCek = false;
            }
            saaIni = num[i];
        }
    }
    return hasilCek;
}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
