/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/


function digitPerkalianMinimum(angka) {
    // you can only write your code here!

    var temp = [];
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (i * j === angka) {
                temp.push(i + '' + j);
            }
        }
    }

    var min = temp[0].length;
    for (var i = 0; i < temp.length; i++) {
        if (min > temp[i].length) {
            min = temp[i].length;
        }
    }
    return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
