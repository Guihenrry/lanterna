const btnLigarDesliga = document.querySelector('.btn-ligar');
const statusLanterna = document.querySelector('.lanterna .status');
const statusBateria = document.querySelector('.status-bateria');
const btnTrocarBateria = document.querySelector('.bateria a');
let bateria = 100;
let timer;
let ligada = false; 

function handleLigaDesliga() {
  if (ligada) {
    desligarLanterna();
  } else {
    ligarLanterna();
  }
  ligada ? ligada = false : ligada = true;
}

function ligarLanterna() {
  if (bateria > 0) {
    document.body.classList.add('ativo');
    statusLanterna.innerText = 'Ligada';
    timer = setInterval(() => {
      bateria--;
      trocaStatusBateria();
      if (bateria <= 0) {
        desligarLanterna();
      }
    }, 1000);
  }
}

function desligarLanterna() {
  document.body.classList.remove('ativo');
  statusLanterna.innerText = 'Desligada';
  clearInterval(timer);
}

function trocarBateria() {
  bateria = 100;
  trocaStatusBateria();
}

function trocaStatusBateria() {
  statusBateria.innerHTML = `${bateria}%`;
  if(bateria === 100) {
    statusBateria.className = 'status-bateria bateria100';
  } else if(bateria === 75) {
    statusBateria.className = 'status-bateria bateria75';
  } else if(bateria === 50) {
    statusBateria.className = 'status-bateria bateria50';
  } else if(bateria === 25) {
    statusBateria.className = 'status-bateria bateria25';
  } else if(bateria === 0) {
    statusBateria.className = 'status-bateria bateria0';
  }
}

btnLigarDesliga.addEventListener('click', handleLigaDesliga);
btnTrocarBateria.addEventListener('click', trocarBateria);