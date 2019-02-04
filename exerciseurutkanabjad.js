/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
    // you can only write your code here!

    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = str.split("");

    var temp = "";
    for (var i = 0; i < abjad.length; i++) {
        for (var j = 0; j < newStr.length; j++) {
            if (abjad[i] === newStr[j]) {
                temp += newStr[j];
            }
        }
    }
    return temp;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'