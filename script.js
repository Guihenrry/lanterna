const btnLigar = document.querySelector('.btn-ligar');
const statusLanterna = document.querySelector('.lanterna .status');
const statusBateria = document.querySelector('.status-bateria');
const btnTrocarBateria = document.querySelector('.bateria a');

let started = false;

const lanterna = {
  carga: 100,
  status: 'desligada',
  ligar() {
    if (this.status === 'desligada' && this.carga > 0) {
      this.status = 'ligada';
      statusLanterna.innerHTML = this.status;
      document.body.classList.toggle('ativo');  
    } 
  },
  desligar() {
    if(this.status === 'ligada') {
      this.status = 'desligada';
      statusLanterna.innerHTML = this.status;
      document.body.classList.toggle('ativo'); 
    }
  },
  trocarBateria() {
    this.carga = 100;
    statusBateria.innerHTML = `${this.carga}%` ;
    statusBateria.className = 'status-bateria bateria100';
  }
}




btnTrocarBateria.addEventListener('click', () => {
  lanterna.trocarBateria();
});


btnLigar.addEventListener('click', () => {
  if (lanterna.status === 'desligada') {
    lanterna.ligar();
    if(!started && lanterna.carga > 0) {
      started = true;
      start();
    } else {
      started = false;
      start();
    }
  } else {
    lanterna.desligar();
    started = false;
    start();
  }
});

function start() {
  if((lanterna.carga -1) >= 0 && started === true) {
    lanterna.carga = lanterna.carga - 1;
    statusBateria.innerHTML = `${lanterna.carga}%` ;
    setTimeout('start()', 1000);
    if(lanterna.carga === 100) {
      statusBateria.className = 'status-bateria bateria100';
    } else if(lanterna.carga === 75) {
      statusBateria.className = 'status-bateria bateria75';
    } else if(lanterna.carga === 50) {
      statusBateria.className = 'status-bateria bateria50';
    } else if(lanterna.carga === 25) {
      statusBateria.className = 'status-bateria bateria25';
    } else if(lanterna.carga === 0) {
      statusBateria.className = 'status-bateria bateria0';
    }
  } else {
    lanterna.desligar();
  }
}