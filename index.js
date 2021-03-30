const A = document.querySelector("#BinDec");
const B = document.querySelector("#Saida");
function bin2dec(bin) {
  bin.split('').map((char) => {
    if (char !== '0' && char !== '1') {
      B.value=""
      return alert('Por favor, coloque um número binario');
    } else {
      if (bin === "") {
        B.value = "";
      } else {
        B.value = parseInt(bin, 2);
      }
    }
  })
}

A.addEventListener("keyup", function () {
  bin2dec(A.value);
})
