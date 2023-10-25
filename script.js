// Simulando a captura de dados do sensor. Neste exemplo, usaremos um valor aleatório para a frequência.
function getSensorData() {
    return Math.floor(Math.random() * 100) + 50; // Valor aleatório entre 50 e 149 Hz.
}

// Atualiza a frequência exibida na página a cada 3 segundos.
function updateSensorData() {
    const frequencyElement = document.getElementById('frequency');
    setInterval(function() {
        const frequency = getSensorData();
        frequencyElement.textContent = frequency;
    }, 3000);
}

updateSensorData();