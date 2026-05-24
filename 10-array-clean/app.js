// Функция принимает массив и callback, определяющий, какие элементы удалить
function filterArray(arr, shouldRemove) {
  const result = []; // Новый массив для хранения оставшихся элементов

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // Если shouldRemove(item) возвращает false, элемент оставляем
    if (!shouldRemove(item)) {
      result.push(item);
    }
  }

  return result;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5, 6];

// Функция, которая возвращает true для чётных чисел (их нужно удалить)
const removeEven = (num) => num % 2 === 0;

const filtered = filterArray(numbers, removeEven);
console.log(filtered); // [1, 3, 5]