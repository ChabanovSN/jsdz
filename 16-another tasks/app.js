// Создаем новый объект с адаптированными методами под новую структуру
const newTask = {
  tasks: [{ 
    id: 1, 
    name: 'тест', 
    description: 'описание',
    order: 0
  }],
  nextId: 2, // следующий доступный ID

  // Добавить задачу
  addTask(name, description = '', order = 0) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      console.error('Название задачи должно быть непустой строкой');
      return null;
    }
    
    const task = {
      id: this.nextId++,
      name: name.trim(),
      description: description.trim() || '',
      order: order
    };
    
    this.tasks.push(task);
    return task;
  },

  // Удалить задачу по id
  deleteTask(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      console.error(`Задача с id ${id} не найдена`);
      return false;
    }
    
    this.tasks.splice(index, 1);
    return true;
  },

  // Обновить задачу по id
  updateTask(id, updates) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      console.error(`Задача с id ${id} не найдена`);
      return false;
    }

    if (updates.name !== undefined) {
      if (typeof updates.name === 'string' && updates.name.trim() !== '') {
        task.name = updates.name.trim();
      } else {
        console.error('Название должно быть непустой строкой');
        return false;
      }
    }

    if (updates.description !== undefined) {
      task.description = typeof updates.description === 'string' ? updates.description.trim() : '';
    }

    if (updates.order !== undefined) {
      if (typeof updates.order === 'number' && Number.isInteger(updates.order)) {
        task.order = updates.order;
      } else {
        console.error('Порядок должен быть целым числом');
        return false;
      }
    }

    return true;
  },

  // Отсортировать задачи по порядку (по возрастанию)
  sortByOrder(descending = false) {
    const sorted = [...this.tasks];
    sorted.sort((a, b) => {
      return descending ? b.order - a.order : a.order - b.order;
    });
    return sorted;
  },

  // Получить все задачи (копия массива)
  getAllTasks() {
    return [...this.tasks];
  },

  // Получить задачу по id
  getTask(id) {
    const task = this.tasks.find(task => task.id === id);
    return task ? { ...task } : null;
  },

  // Очистить список задач
  clearAll() {
    this.tasks = [];
    this.nextId = 1;
  }
};

// ============ ПРИМЕР ИСПОЛЬЗОВАНИЯ ============

console.log('Начальное состояние:', newTask.getAllTasks());

// 1. Добавляем новые задачи
console.log('\n--- Добавление задач ---');
newTask.addTask('Купить продукты', 'Молоко, хлеб, яйца', 1);
newTask.addTask('Сделать уборку', 'Помыть полы, вытереть пыль', 2);
newTask.addTask('Позвонить другу', 'Уточнить планы на выходные', 0);

console.log('После добавления:', newTask.getAllTasks());

// 2. Получаем задачу по id
console.log('\n--- Получение задачи по id ---');
const task = newTask.getTask(1);
console.log('Задача с id 1:', task);

// 3. Обновляем задачу
console.log('\n--- Обновление задачи ---');
newTask.updateTask(2, { 
  name: 'Сделать генеральную уборку', 
  description: 'Помыть полы, вытереть пыль, протереть окна',
  order: 5 
});
console.log('После обновления id 2:', newTask.getTask(2));

// 4. Сортируем по порядку (по возрастанию)
console.log('\n--- Сортировка по порядку (возрастание) ---');
const sortedTasks = newTask.sortByOrder();
console.log('Отсортированные задачи:', sortedTasks);

// 5. Сортируем по порядку (по убыванию)
console.log('\n--- Сортировка по порядку (убывание) ---');
const sortedDescTasks = newTask.sortByOrder(true);
console.log('Отсортированные задачи (убывание):', sortedDescTasks);

// 6. Удаляем задачу
console.log('\n--- Удаление задачи ---');
newTask.deleteTask(3);
console.log('После удаления id 3:', newTask.getAllTasks());

// 7. Очищаем все задачи
console.log('\n--- Очистка всех задач ---');
newTask.clearAll();
console.log('После очистки:', newTask.getAllTasks());