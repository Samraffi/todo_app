// TodoInput.tsx
import React from 'react';

type TodoInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}


const TodoInput = ({ value, onChange, onAdd }: TodoInputProps) => {
  return (
    <div className="flex gap-2 mb-4">
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Добавить новую задачу..."
      />
      <button 
        onClick={onAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Добавить
      </button>
    </div>
  );
};

export default TodoInput;