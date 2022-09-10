import { FormEvent, useState, useContext } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { TasksContainer, Task, FlexRowDiv } from '../styles/Container.Styles'
import { TodoInput, AddButton, TaskButton, TaskParagraph } from '../styles/Elements.Styles'
import { Todo } from '../typescript/types';
import taskAudio from '../sounds/task-sound.mp3';
import { TimerContext } from '../context/TimerContext';

function TodoList() {
  const { darkMode } = useContext(TimerContext);
  const [todoTasks, updateDraggableTasks] = useState<Todo[]>([]);
  const taskSound = new Audio(taskAudio);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task: { value } } = e.target as typeof e.target & {
      task: { value: string }
    }
  
    const currentList = todoTasks;
    if (value.length > 0) {
      taskSound.play();
      currentList.push({ value, id: todoTasks.length + 1, finished: false });

      updateDraggableTasks([...currentList]);
    }
    e.currentTarget.reset();
  }
  
  const handleRemoveTask = (id: number) => {
    const currentList = todoTasks.filter((task) => task.id !== id);

    updateDraggableTasks([...currentList]);
  }

  const handleFinishTask = (id: number) => {
    todoTasks.forEach((task) => {
      if (task.id === id) {
        task.finished = !task.finished;
        return task.finished;
      }
    });
    const currentList = todoTasks;
    updateDraggableTasks([...currentList]);
  }

  const handleRemoveAllTasks = () => {
    if (todoTasks.length > 0) updateDraggableTasks([]);
  }

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(todoTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateDraggableTasks(items);
  }

  return (
    <TasksContainer>
      <FlexRowDiv>
        <h2>
          Tasks
        </h2>
        <TaskButton
          darkMode={darkMode}
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
              {todoTasks?.map(({ value, id, finished }, i) => (
                <Draggable key={id} draggableId={id.toString()} index={i}>
                  {(provided) => (
                    <Task
                    darkMode={darkMode}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}  
                    >
                      <TaskParagraph
                        textDec={finished}
                      >
                        {value}
                      </TaskParagraph>
                      <div>
                        <TaskButton
                          darkMode={darkMode}
                          type="button"
                          onClick={ () => handleFinishTask(id) }
                        >
                          ☑
                        </TaskButton>
                        <TaskButton
                          darkMode={darkMode}
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
}

export default TodoList
