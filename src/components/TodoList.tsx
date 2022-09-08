import { FormEvent, useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TasksContainer, Task, FlexRowDiv } from '../styles/Container.Styles'
import { TodoInput, AddButton, TaskButton } from '../styles/Elements.Styles'
import { ToDo } from '../typescript/types';
import taskAudio from '../sounds/task-sound.mp3';

function TodoList() {
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const [taskFinished, setTaskFinished] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [draggableTasks, updateDraggableTasks] = useState(todoList);
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
      updateDraggableTasks([...currentList]);
    }
    e.currentTarget.reset();
    console.log(currentList);
    console.log(todoList);
    console.log(draggableTasks);
  }
  
  const handleRemoveTask = (id: number) => {
    const currentList = todoList.filter((task) => task.id !== id);
    setTodoList([...currentList]);
    updateDraggableTasks([...currentList]);
  }

  const handleFinishTask = (id: number) => {
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

  const handleRemoveAllTasks = () => {
    if (todoList.length > 0) setTodoList([]);
  }

  const handleDragEnd = (result: any) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(draggableTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(items);
    updateDraggableTasks(items);
  }

  return (
    <TasksContainer>
      <FlexRowDiv>
        <h2>
          Tasks
        </h2>
        <TaskButton
            type="button"
            onClick={ handleRemoveAllTasks }
          >
            ×
          </TaskButton>
      </FlexRowDiv>
      <DragDropContext onDragEnd={ handleDragEnd }>
        <Droppable droppableId='tasks'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} >
              {draggableTasks?.map(({ value, id }, i) => (
                <Draggable key={id} draggableId={id.toString()} index={i}>
                  {(provided) => (
                    <Task {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                      <p>
                        {value}
                      </p>
                      <div>
                        <TaskButton
                          type="button"
                          onClick={ () => handleFinishTask(id) }
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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

// ☑
