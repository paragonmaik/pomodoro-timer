function getEndingTimeInMs(totalMinutes: number) {
  return +Date.parse(new Date().toString()) + totalMinutes * 1000;
};

function getRemainingTimer(endingTimeInMs: number) {
  const currentTimeInMs = Date.parse(new Date().toString());
  const totalRemainingTimeInMs = endingTimeInMs - currentTimeInMs;

  const total = Number.parseInt((totalRemainingTimeInMs / 1000).toString(), 10);
  const minutes = Number.parseInt(((total / 60) % 60).toString(), 10);
  const seconds = Number.parseInt((total % 60).toString(), 10);

  return {
    total,
    minutes,
    seconds,
  }
}

export {
  getEndingTimeInMs,
  getRemainingTimer,
};
