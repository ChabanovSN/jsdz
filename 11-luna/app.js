function isValidCardNumber(cardNumber) {
    // Удаляем все нецифровые символы (пробелы, дефисы и т.д.)
    const digits = cardNumber.replace(/\D/g, '');
    
    // Проверяем, что остались только цифры и их количество от 13 до 19 (стандартные длины карт)
    if (!/^\d{13,19}$/.test(digits)) {
        return false;
    }
    
    let sum = 0;
    let isEven = false;
    
    // Проходим по цифрам справа налево
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i], 10);
        
        if (isEven) {
            // Удваиваем каждую вторую цифру
            digit *= 2;
            // Если результат >= 10, вычитаем 9 (эквивалентно сложению цифр)
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    // Номер корректен, если сумма кратна 10
    return sum % 10 === 0;
}

// Пример использования
const cardNumber = "4561-2612-1234-5464";
console.log(isValidCardNumber(cardNumber)); // true или false
