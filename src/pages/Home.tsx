import { useContext, useState, FormEvent, useEffect } from 'react';
import { TimerContext } from '../context/TimerContext';
import { TimerSettings } from '../typescript/types';
import { TimerCardContainer,
  GenericContainer, MainContainer,
  BarContainer, TasksContainer, Task } from '../styles/Container.Styles';
import { StartButton, TodoInput, AddButton } from '../styles/Elements.Styles';
import Timer from '../components/Timer';
import NavBar from '../components/NavBar';
import PomodoroSelectors from '../components/PomodoroSelectors';

function Home() {
  const { timerData,
    handleStartTimer,
    isStartAvailable,
    setIsStartAvailable,
    stopTimer,
  } = useContext(TimerContext);
  const [todoList, setTodoList] = useState<string[]>([]);

  // useEffect(() => {
  //   console.log('teste');
  // }, [todoList]);

  const handleStartButton = () => {
    if (isStartAvailable) {
      setIsStartAvailable(false);
      return handleStartTimer();
    }
    setIsStartAvailable(true);
    stopTimer();
  }

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentList = todoList;
    const { task } = e.target as typeof e.target & {
      task: { value: string }
    }
    // console.log(currentList);
    currentList.push(task.value);
    // console.log(currentList);
    setTodoList(currentList);
  }

  return (
    <>
      <MainContainer>

        <NavBar />

        <BarContainer>
          <progress
            value={+timerData[timerData.mode as keyof TimerSettings] * 60 - timerData.timeRemaining.total}
            max={+timerData[timerData.mode as keyof TimerSettings] * 60}
            />
        </BarContainer>
        <TimerCardContainer>
          <PomodoroSelectors />
          <Timer {...timerData.timeRemaining} />
            <GenericContainer>
              <StartButton
                onClick={ handleStartButton }
                type="button"
                >
                  {isStartAvailable ? 'START' : 'STOP'}
              </StartButton>
            </GenericContainer>
        </TimerCardContainer>

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
      </MainContainer>
    </>
  )
}

export default Home;
