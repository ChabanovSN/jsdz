function filterValidDates(arr) {
    return arr
        .filter(str => {
            // Проверяем формат ДД-ММ-ГГГГ или ДД/ММ/ГГГГ
            const match = str.match(/^(\d{2})[-\/](\d{2})[-\/](\d{4})$/);
            if (!match) return false;
            
            const day = parseInt(match[1]);
            const month = parseInt(match[2]);
            const year = parseInt(match[3]);
            
            // Создаем дату и проверяем валидность
            const date = new Date(year, month - 1, day);
            return date.getFullYear() === year && 
                   date.getMonth() === month - 1 && 
                   date.getDate() === day;
        })
        .map(str => {
            // Разбираем строку
            const parts = str.split(/[-\/]/);
            const day = parts[0];
            const month = parts[1];
            const year = parts[2];
            
            // Возвращаем в формате ММ-ДД-ГГГГ (месяц и день меняются местами)
            return `${month}-${day}-${year}`;
        });
}

// Тестирование
const input = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
const result = filterValidDates(input);

console.log(result); // ['02-10-2022', '12-11-2023']