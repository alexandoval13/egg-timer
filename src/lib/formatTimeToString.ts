export const formatTimeToString = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = (totalSeconds % 3600) % 60;

  // Add leading zero to seconds if needed
  const secondsString = seconds < 10 ? '0' + seconds : seconds;
  const minutesString = hours && minutes < 10 ? '0' + minutes : minutes;
  const hoursString = hours ? hours + ':' : '';

  return `${hoursString}${minutesString}:${secondsString}`;
};
