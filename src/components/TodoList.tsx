// TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
}


type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
  onChoose: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onChoose }: TodoListProps) => {
  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onChoose={onChoose}
        />
      ))}
    </div>
  );
};

export default TodoList;