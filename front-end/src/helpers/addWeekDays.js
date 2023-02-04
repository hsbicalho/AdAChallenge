function addWeekDays(weekDay) {
  const weekDayNumber = {
    Sunday: 2,
    Monday: 1,
    Tuesday: 7,
    Wednesday: 6,
    Thursday: 5,
    Friday: 4,
    Saturday: 3,
  };
  if (weekDay === 'Sunday') return weekDayNumber.Sunday;
  if (weekDay === 'Monday') return weekDayNumber.Monday;
  if (weekDay === 'Tuesday') return weekDayNumber.Tuesday;
  if (weekDay === 'Wednesday') return weekDayNumber.Wednesday;
  if (weekDay === 'Thursday') return weekDayNumber.Thursday;
  if (weekDay === 'Friday') return weekDayNumber.Friday;
  if (weekDay === 'Saturday') return weekDayNumber.Saturday;
}
export default addWeekDays;
