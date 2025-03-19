// TodoItem.tsx
import React from 'react';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
}

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onChoose: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onChoose }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded">
      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggle(todo.id, todo.completed)}
          className="h-5 w-5" 
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button 
        onClick={() => onChoose(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;