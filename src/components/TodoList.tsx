import { FormEvent, useState } from "react";
import { TasksContainer, Task } from "../styles/Container.Styles"
import { TodoInput, AddButton } from "../styles/Elements.Styles"

function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task: { value } } = e.target as typeof e.target & {
      task: { value: string }
    }
    const currentList = todoList;
    if (value.length > 0) {
      currentList.push(value);
      setTodoList([...currentList]);
    }
  }

  return (
    <TasksContainer>
      <h2>
        Tasks
      </h2>
      {todoList?.map((task, i) => (
      <Task key={i}>
        <p>
          {task}
        </p>
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