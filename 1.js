const celsius = parseFloat(prompt("Введите, пожалуйста, температуру в градусах Цельсия"));
let farenheit=(celsius * 1.8 + 32).toFixed(1)
alert(`Цельсий: ${celsius}, Фаренгейт: ${farenheit}`);