let currentDay = 1;
const totalDays = 30; // Set the total number of days

function simulateDay() {
    const dayInput = document.getElementById("dayInput").value;
    const targetDay = parseInt(dayInput);

    if (isNaN(targetDay) || targetDay < 1 || targetDay > totalDays) {
        alert("Bitte geben Sie einen gÃ¼ltigen Tag zwischen 1 und " + totalDays + " ein.");
        return;
    }

    currentDay = targetDay;
    updateChartData(generateRandomData(20));

    // Display statistics
    displayStatistics();
}

function generateRandomData(numPoints) {
    return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100));
}

function updateChartData(newData) {
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = ""; // Clear previous chart data

    newData.forEach((data, index) => {
        const bar = document.createElement("div");
        bar.style.height = data + "px";
        bar.style.backgroundColor = getRandomColor();
        bar.className = "bar";
        chartContainer.appendChild(bar);
    });
}

function displayStatistics() {
    const statisticsContainer = document.getElementById("statistics");
    statisticsContainer.innerHTML = <p>Statistiken fÃ¼r Tag ${currentDay}:</p>;
    // You can add more detailed statistics here based on your data.
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}