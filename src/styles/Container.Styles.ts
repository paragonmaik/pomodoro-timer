import styled from 'styled-components';

export const AppContainer = styled.main`
  background-color: rgb(10, 128, 100);
  display: flex;
  height: 100vh;
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

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  max-height: 100px;
`
