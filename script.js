const powerButton = document.getElementById("power-button");
const powerIcon = document.getElementById("power-icon");
const ledElement = document.getElementById("led");
const signalElement = document.getElementById("signal");

let isLigado = false;

function togglePower() {
    isLigado = !isLigado;
    if (isLigado) {
        powerButton.classList.add("on");
        powerIcon.textContent = "ON";
        ledElement.textContent = "Ligado";
    } else {
        powerButton.classList.remove("on");
        powerIcon.textContent = "OFF";
        ledElement.textContent = "Desligado";
    }
}

// Simulando a captura de dados do sensor. Neste exemplo, usaremos um valor aleatório para o sinal do ar condicionado.
function getSensorData() {
    return Math.floor(Math.random() * 100) + 50; // Valor aleatório entre 50 e 149 em formato HEX.
}

// Atualiza o sinal exibido na página a cada 5 segundos.
function updateSensorData() {
    setInterval(function() {
        const signal = getSensorData().toString(16).toUpperCase(); // Converte para formato HEX.
        signalElement.textContent = signal;
    }, 5000);
}

updateSensorData();