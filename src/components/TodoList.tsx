import { FormEvent, useState } from "react";
import { TasksContainer, Task } from "../styles/Container.Styles"
import { TodoInput, AddButton, RemoveButton } from "../styles/Elements.Styles"
import { ToDo } from "../typescript/types";

function TodoList() {
  const [todoList, setTodoList] = useState<ToDo[]>([]);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task: { value } } = e.target as typeof e.target & {
      task: { value: string }
    }
    const currentList = todoList;
    if (value.length > 0) {
      currentList.push({ value, id: todoList.length + 1 });
      setTodoList([...currentList]);
    }
    e.currentTarget.reset()
  }
  
  const handleRemoveTask = (id: number) => {
    const currentList = todoList.filter((task) => task.id !== id);
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
        {/* <RemoveButton
          type="button"
          onClick={ () => handleRemoveTask(value, id) }
        >
          ☑
        </RemoveButton> */}
        <RemoveButton
          type="button"
          onClick={ () => handleRemoveTask(id) }
        >
          ×
        </RemoveButton>
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
          type='submit'
        >
          +
        </AddButton>
      </form>
    </TasksContainer>
  )
};

export default TodoList