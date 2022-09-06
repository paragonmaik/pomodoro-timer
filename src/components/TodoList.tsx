import { FormEvent, useState } from 'react';
import { TasksContainer, Task } from '../styles/Container.Styles'
import { TodoInput, AddButton, TaskButton } from '../styles/Elements.Styles'
import { ToDo } from '../typescript/types';
import taskAudio from '../sounds/task-sound.mp3';

function TodoList() {
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const taskSound = new Audio(taskAudio);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task: { value } } = e.target as typeof e.target & {
      task: { value: string }
    }
  
    const currentList = todoList;
    if (value.length > 0) {
      taskSound.play();
      currentList.push({ value, id: todoList.length + 1 });
      setTodoList([...currentList]);
    }
    e.currentTarget.reset();
  }
  
  const handleRemoveTask = (id: number) => {
    const currentList = todoList.filter((task) => task.id !== id);
    setTodoList([...currentList]);
  }

  const handleEndTask = (id: number) => {
    todoList.forEach((task) => {
      if (task.id === id) {
        task.value = task.value.split('')
          .map((char) => char + '\u0336').join('');
        return task.value;
      }
    });
    const currentList = todoList;
    setTodoList([...currentList]);
  }

  return (
    <TasksContainer>
      <h2>
        Tasks
      </h2>
      {todoList?.map(({ value, id }) => (
      <Task key={id}>
        <p>
          {value}
        </p>
        <div>
          <TaskButton
            type="button"
            onClick={ () => handleEndTask(id) }
          >
            ☑
          </TaskButton>
          <TaskButton
            type="button"
            onClick={ () => handleRemoveTask(id) }
          >
            ×
          </TaskButton>
        </div>
      </Task>
      ))}
      <form onSubmit={(e) => handleAddTask(e)}>
        <TodoInput
          id="task"
          type="text"
          maxLength={20}
          placeholder="Add your task"
        />
        <AddButton
          type="submit"
        >
          +
        </AddButton>
      </form>
    </TasksContainer>
  )
};

export default TodoList