import {
  differenceInCalendarMonths,
  differenceInDays,
  roundToNearestMinutes,
  set,
  startOfDay,
} from "date-fns";

function roundToNearest10Minutes(date) {
  return roundToNearestMinutes(date, { nearestTo: 10 });
S}

const originalDate = new Date(); // Current date and time

const roundedDate = roundToNearestMinutes(originalDate, { nearestTo: 10 });

console.log(parseInt("01"));

console.log(`Original date: ${originalDate}`);

console.log(`Rounded date: ${roundedDate}`);

const endmonth = differenceInCalendarMonths(1714588199999, 1712946600000);
console.log(new Date(endmonth));

const end = startOfDay(1714262400000).getTime();
console.log(end);
const timeFormattedDate = set(1714262400000, {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
});
console.log(timeFormattedDate);

const diff = differenceInDays(new Date(1714329000000), new Date(1714242600000));
console.log(diff);
