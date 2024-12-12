document.getElementById('calculate-btn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    const resultElement = document.getElementById('result');
    resultElement.style.opacity = 0; // Скрываем перед обновлением

    // Проверка на корректность введенных данных
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        setTimeout(() => {
            resultElement.textContent = "Пожалуйста, введите корректные данные.";
            resultElement.style.color = "red";
            resultElement.style.opacity = 1; // Показываем
        }, 300);
        return;
    }

    // Вычисление ИМТ
    const bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) {
        category = "Недостаток веса";
    } else if (bmi < 24.9) {
        category = "Нормальный вес";
    } else if (bmi < 29.9) {
        category = "Избыточный вес";
    } else {
        category = "Ожирение";
    }

    // Плавное отображение результата
    setTimeout(() => {
        resultElement.textContent = `Ваш ИМТ: ${bmi} (${category})`;
        resultElement.style.color = "#333";
        resultElement.style.opacity = 1; // Плавное появление
    }, 300);
});
