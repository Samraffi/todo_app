// App.tsx
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ConfirmDialog from './ConfirmDialog';

const todoExample = [
  {
    id: "r468r4erg4tg4t",
    text: "Пример задачи",
    completed: false
  },
  {
    id: "e8d6er4fs4fr4f",
    text: "Выполненная задача",
    completed: true
  }
];
let title = "Do you confirm deletion of this task";
let message = "Confirm the action";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todoExample);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState<string>('');


  // Здесь будут функции для управления задачами

  const toggleTodo = (id: string, completed: boolean) => {
    if(completed === false) {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };
  const handleRemoveTodo = (id: string) => {
    setTodos(
      todos.filter(todo => (todo.id !== id))
    )
    handleCancel()
  }

  const handleChooseItem = (id: string) => setSelectedItem(id);
  const handleCancel = () => setSelectedItem('');

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Список задач</h1>

      <TodoInput
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e?.target?.value)}
        onAdd={() => {/* Добавление задачи */ }}
      />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onChoose={handleChooseItem}
      />
      {
        selectedItem &&
        <ConfirmDialog
          title={title}
          message={message}
          selectedItem={selectedItem}
          onDelete={handleRemoveTodo}
          onCancel={handleCancel}
        />
      }
    </div>
  );
};

export default App;