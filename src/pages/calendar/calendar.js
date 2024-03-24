import React, { useState } from "react";
import { generateCalendar } from "../logic/generate-calendar";
import { keyifyDate } from "../logic/keyify-date";
import { DateComponent } from "./date";
import styles from "./calendar.module.css";
import { months, weekdays } from "../constants";
import AddTokenBox from "./add-token-box";

export const Calendar = ({
  month,
  year,
  vices,
  addViceToken,
  removeViceToken,
}) => {
  const [displayAddToken, setDisplayAddToken] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={styles.calendarContainer}>
      {/* <div className="current-month-and-year">
        {months[month]} {year}
      </div> */}
      <table style={{ margin: "0 auto", width: "90vw", tableLayout: "fixed" }}>
        <thead>
          <tr>
            {weekdays.map((_) => (
              <th className="calendar-header" key={`day-${_}`}>
                {_}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateCalendar({ month, year }).map((week, i) => (
            <tr key={`week-${i}`}>
              {week.map((d) => {
                const key = `date-${d.getMonth()}-${d.getDate()}`;
                const vice = vices.includes(keyifyDate(d)) || false;
                const current =
                  d.getMonth() === month && d.getFullYear() === year;
                const today = new Date();
                const isToday =
                  today.getMonth() === d.getMonth() &&
                  today.getDate() === d.getDate() &&
                  today.getFullYear() === d.getFullYear();
                return (
                  <DateComponent
                    key={key}
                    vice={vice}
                    current={current}
                    today={isToday}
                    value={d.getDate()}
                    onClick={() => {
                      // console.log(d);
                      // setDisplayAddToken(true);
                      // setSelectedDate(d);
                    }}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {displayAddToken && (
        <AddTokenBox
          date={selectedDate}
          vice={vices.includes(keyifyDate(selectedDate))}
          cancel={() => setDisplayAddToken(false)}
          update={(vice) => {
            addViceToken(vice);
            setDisplayAddToken(false);
          }}
        />
      )}
    </div>
  );
};

// const mapStateToProps = ({ calendar }) => ({
//   vices: calendar.vices,
//   month: calendar.month,
//   year: calendar.year,
//   max: {
//     bud: calendar.max.bud,
//     booze: calendar.max.booze,
//   }
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       goToMonth, addViceToken, removeViceToken,
//       changePage: () => push('/about-us')
//     },
//     dispatch
//   )

// export default Calendar;
//  connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Calendar)
