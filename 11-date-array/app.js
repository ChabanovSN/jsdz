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
            // Преобразуем в единый формат ДД-ММ-ГГГГ
            return str.replace(/[/]/g, '-');
        });
}

const input = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
const result = filterValidDates(input);
console.log(result); // ['10-02-2022', '11-12-2023']