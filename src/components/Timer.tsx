type timer = {
  minutes: number;
  seconds: number;
}

function Timer({ minutes, seconds }: timer) {

  return (
    <>
      <span>{minutes}</span>
      <span>{seconds}</span>
    </>
  )
}

export default Timer;
