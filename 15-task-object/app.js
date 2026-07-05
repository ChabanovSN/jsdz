const ToDoList = {
  tasks: [],
  nextId: 1,

  // Добавить задачу
  addTask(title, priority = 1) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      console.error('Название задачи должно быть непустой строкой');
      return null;
    }
    
    const task = {
      title: title.trim(),
      id: this.nextId++,
      priority: priority
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

  // Обновить имя или приоритет по Id
  updateTask(id, updates) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      console.error(`Задача с id ${id} не найдена`);
      return false;
    }

    // Обновляем название, если оно передано и валидно
    if (updates.title !== undefined) {
      if (typeof updates.title === 'string' && updates.title.trim() !== '') {
        task.title = updates.title.trim();
      } else {
        console.error('Название должно быть непустой строкой');
        return false;
      }
    }

    // Обновляем приоритет, если он передан
    if (updates.priority !== undefined) {
      if (typeof updates.priority === 'number' && Number.isInteger(updates.priority)) {
        task.priority = updates.priority;
      } else {
        console.error('Приоритет должен быть целым числом');
        return false;
      }
    }

    return true;
  },

  // Отсортировать задачи по приоритету (по возрастанию)
  sortByPriority(descending = false) {
    const sorted = [...this.tasks];
    sorted.sort((a, b) => {
      return descending ? b.priority - a.priority : a.priority - b.priority;
    });
    return sorted;
  },

  // Получить все задачи (копия массива)
  getAllTasks() {
    return [...this.tasks];
  },

  // Очистить список задач
  clearAll() {
    this.tasks = [];
    this.nextId = 1;
  }
};

// ============ ПРИМЕР ИСПОЛЬЗОВАНИЯ ============

// Добавляем задачи
ToDoList.addTask('Помыть посуду', 2);
ToDoList.addTask('Сделать домашку', 3);
ToDoList.addTask('Купить продукты', 1);
ToDoList.addTask('Позвонить маме', 4);

console.log('Все задачи:', ToDoList.getAllTasks());

// Сортируем по приоритету (по возрастанию)
const sortedTasks = ToDoList.sortByPriority();
console.log('Отсортировано по приоритету:', sortedTasks);

// Обновляем задачу
ToDoList.updateTask(1, { title: 'Помыть посуду и убраться', priority: 5 });
console.log('После обновления:', ToDoList.getTask(1));

// Удаляем задачу
ToDoList.deleteTask(2);
console.log('После удаления:', ToDoList.getAllTasks());

// ============ ДОПОЛНИТЕЛЬНЫЙ МЕТОД ============
// Получить задачу по id (для удобства)
ToDoList.getTask = function(id) {
  const task = this.tasks.find(task => task.id === id);
  return task ? { ...task } : null;
};