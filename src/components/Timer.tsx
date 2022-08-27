type timer = {
  minutes: string;
  seconds: string;
}

function Timer({ minutes, seconds }: timer) {


  return (
    <>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </>
  )
}

export default Timer;
