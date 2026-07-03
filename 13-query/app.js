function buildQueryString(params) {
  // Получаем массив пар [ключ, значение] и преобразуем их в строку
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

// Пример использования
const query = {
  search: 'Вася',
  take: 10
};

console.log(buildQueryString(query)); // search=Вася&take=10