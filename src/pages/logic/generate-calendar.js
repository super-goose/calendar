export const generateCalendar = ({ month, year }) => {
  let startDate = new Date();
  startDate.setMonth(month);
  startDate.setDate(1);
  startDate.setYear(year);

  let startWeek = new Date(startDate);
  startWeek.setDate(startWeek.getDate() - (7 + startWeek.getDay()));

  let currentDate = new Date(startWeek);
  let i = 10;
  let calendar = [];
  while (i--) {
    if (
      (currentDate.getMonth() > month && currentDate.getFullYear() >= year) ||
      currentDate.getFullYear() > year
    ) {
      i = 0;
    }
    let week = [];

    for (let j = 0; j < 7; j++) {
      week.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    calendar.push(week);
  }

  console.log(calendar);
  return calendar;
};
