import styled from 'styled-components';
import { Props } from '../typescript/types';

export const AppContainer = styled.main<Props>`
  background-color: ${(props) => props.darkMode ? 'rgb(33, 33, 45)' : 'rgb(10, 128, 100)'};
  display: flex;
  height: 100%;
  width: 100vw;
`

export const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px 0;
`

export const TimerCardContainer = styled.article<Props>`
  background-color: ${(props) => props.darkMode ? 'rgb(44, 44, 56)' : 'rgb(15, 191, 152)'};
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
  margin: 15px auto;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const BarContainer = styled.div<Props>`
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
      background-color: ${(props) => props.darkMode ? 'rgb(88, 86, 135)' : 'rgb(9, 104, 83)'};
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

export const Task = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  margin: 3px 0;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.darkMode ? 'rgb(100, 95, 195)' : 'white'};
  font-weight: 400;
  height: 40px;
  color: ${(props) => props.darkMode ? 'white' : 'rgb(10, 128, 100)'};
  max-width: 80%;
  min-width: 220px;
`

export const FlexRowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

export const TimerSettingsContainer = styled.section<Props>`
  background-color: ${(props) => props.darkMode ? 'rgb(44, 44, 56)' : 'white'};
  color: ${(props) => props.darkMode ? 'white' : 'rgb(33, 32, 32)'};
  padding: 20px 20px;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  width: 80vw;
  max-height: 450px;
  @media (min-width: 600px) {
    max-width: 300px;
  }
`

export const TimerInputContainer = styled.div<Props>`
  color: ${(props) => props.darkMode ? 'white' : 'rgb(10, 128, 100)'};
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const LabelContainer = styled.div`
  width: 25%;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
`

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`
