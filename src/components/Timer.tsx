import { timer } from "../typescript/types";
import { GenericContainer, CounterContainer } from "../styles/Container.Styles";

function Timer({ minutes, seconds }: timer) {

  return (
    <GenericContainer>
      <CounterContainer>
        <span>{minutes.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{seconds.toString().padStart(2, '0')}</span>
      </CounterContainer>
    </GenericContainer>
  )
}

export default Timer;
