export const formatTimeToString = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Add leading zero to seconds if needed
  const secondsString = seconds < 10 ? '0' + seconds : seconds;

  return `${minutes}:${secondsString}`;
};
