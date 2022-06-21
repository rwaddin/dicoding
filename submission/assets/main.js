function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
 }

let awal = document.getElementById("pertama").value = getRandomInt(100);
let kedua = document.getElementById("kedua").value = getRandomInt(100);
console.log(awal+kedua)

function cek(){
    let hasil = document.getElementById("hasil").value;
    if(hasil == ""){
        alert("Anda belum memasukan jawaban")
    }else{
        if(hasil == (awal + kedua)){
            alert("Selamat jawaban Anda benar");
        }else{
            alert("jawaban Anda salah")
        }
    }
}