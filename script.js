function convertTemp() {
  let temp = parseFloat(document.getElementById("tempInput").value);
  let unit = document.getElementById("unit").value;
  let result = 0;
  if (isNaN(temp)) {
    alert("Please enter a valid number!");
    return;
  }
  if (unit === "C") {
    result = (temp * 9/5) + 32; // Celsius → Fahrenheit
    document.getElementById("result").textContent = `${temp}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (temp - 32) * 5/9; // Fahrenheit → Celsius
    document.getElementById("result").textContent = `${temp}°F = ${result.toFixed(2)}°C`;
  }
}
