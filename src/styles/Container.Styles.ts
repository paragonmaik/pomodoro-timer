import styled from 'styled-components';

export const AppContainer = styled.main`
  background-color: rgb(10, 128, 100);
  display: flex;
  height: 100%;
  width: 100vw;
`

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px 0;
`

export const TimerCardContainer = styled.article`
  background-color: rgb(15, 191, 152);
  padding: 0 10px;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  min-height: 350px;
  justify-content: space-evenly;
  width: 90vw;
`

export const GenericContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const BarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  progress[value] {
    appearance: none;
    ::-webkit-progress-bar {
      border-radius: 10px;
      height: 3px;
      width: 100%;
      background-color: rgb(9, 104, 83);
    }
    ::-webkit-progress-value {
      border-radius: 10px;
      height: 3px;
      width: 100%;
      background-color: white;
    }
  }
`

export const CounterContainer = styled.div`
  font-size: 6em;
  color: white;
`

export const Header = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  max-height: 100px;
`

export const TasksContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 500px;
  min-height: 350px;
`

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  margin: 3px 0;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-weight: 400;
  height: 40px;
  color: rgb(10, 128, 100);
  max-width: 80%;
  min-width: 230px;
  cursor: grab;
`