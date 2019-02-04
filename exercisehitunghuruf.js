/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/


function hitungHuruf(kata) {
    // you can only write your code here!

    var newKata = kata.split(' ');
    var temp = 0;
    var result = '';

    for (var i = 0; i < newKata.length; i++) {
        result = newKata[i];

        var huruf = 0;
        for (var j = 0; j < result.length; j++) {
            //console.log(result[i][j])
            for (var k = 0; k < result.length; k++) {
                //console.log(result[i][k])
                if ((j !== k) && (result[j] === result[k])) {
                    huruf++;
                }
            }
        }
        if (huruf > temp) {
            temp = huruf;
            newKata = result;
        }
    }
    if (temp >= 2) {
        return newKata;
    }
    else {
        return -1;
    }
}



// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau