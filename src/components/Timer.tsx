import { timer } from "../typescript/types";

function Timer({ minutes, seconds }: timer) {

  return (
    <>
      <span>{minutes.toString().padStart(2, '0')}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, '0')}</span>
    </>
  )
}

export default Timer;
