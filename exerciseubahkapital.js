
/*Diberikan function ubahKapital(kalimat) yang menerima satu parameter berupa string. Function akan me-return nilai berupa kalimat dimana setiap kata dimulai dengan huruf besar. Contoh, jika input adalah "saya makan sushi", maka output adalah "Saya Makan Sushi".
*/


function ubahKapital(kalimat) {
    // you can only write your code here!

    var newKalimat = kalimat.split(' ');
    var result = "";

    for (var i = 0; i < newKalimat.length; i++) {
        //console.log(newKalimat[i])
        for (var j = 0; j < newKalimat[i].length; j++) {
            if (j === 0) {
                result += newKalimat[i][j].toUpperCase();
            } else {
                result += newKalimat[i][j].toLowerCase();
            }
        }
        result += " ";
    }
    return result;
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
// console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
// console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
// console.log(ubahKapital('i have a dream')); // I Have A Dream
// console.log(ubahKapital('coding is fun')); // Coding Is Fun
