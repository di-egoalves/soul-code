const semaforoImg = document.getElementById("semaforo-img");
const descPragrafo = document.getElementById("semaforo-descricao")


function trocarVermelho() {
  console.log("Mudar para vermelho");
  semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
  descPragrafo.innerHTML = 'PARE!';
}

function trocarAmarelo() {
  console.log("Mudar para amarelo");
  semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
  descPragrafo.innerHTML = 'FIQUE ATENTO';
}

function trocarVerde() {
  console.log("Mudar para verde");
  semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
  descPragrafo.innerHTML = 'SIGA EM FRENTE';
}
