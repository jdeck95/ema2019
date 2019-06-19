export function getWeekday(date) {
  const weekday = new Array(7);
  weekday[0] = "So.";
  weekday[1] = "Mo.";
  weekday[2] = "Di.";
  weekday[3] = "Mi.";
  weekday[4] = "Do.";
  weekday[5] = "Fr.";
  weekday[6] = "Sa.";

  return weekday[date.getDay()];
}