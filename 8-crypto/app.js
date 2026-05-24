// Функция шифрования пароля
function crypto(password) {
    // Разбиваем строку на массив символов
    let chars = password.split('');
    
    // Меняем местами буквы (простой алгоритм - разворот массива)
    let reversedChars = chars.reverse();
    
    // Соединяем обратно в строку
    return reversedChars.join('');
}

// Функция проверки пароля
function check(encryptedPassword, originalPassword) {
    // Восстанавливаем зашифрованный пароль обратно
    let decryptedChars = encryptedPassword.split('').reverse();
    let decryptedPassword = decryptedChars.join('');
    
    // Сравниваем с оригинальным паролем
    return decryptedPassword === originalPassword;
}

// Пример использования
console.log(crypto('password')); // -> ssapdorw

console.log(check('ssapdorw', 'password')); // -> true
console.log(check('ssapdorw', 'wrong')); // -> false