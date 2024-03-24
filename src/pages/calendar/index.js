import React from "react";
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import {
//   goToMonth,
//   addViceToken,
//   removeViceToken,
// } from "../../modules/calendar";
import { Calendar } from "./calendar";
// import Remaining from './remaining'
import DateSelect from "./date-select";
// import Quote from './quote'

const ViceCalendar = ({
  month,
  year,
  vices,
  max,
  goToMonth,
  addViceToken,
  removeViceToken,
}) => {
  // const totalUsedThisMonth = (() => {
  //   const thisMonth = Object.keys(vices)
  //     .filter(date => date.includes(`${year}-${month+1}-`));

  //   const tally = {
  //     total: thisMonth.length,
  //     bud: 0,
  //     booze: 0,
  //   };

  //   thisMonth.forEach(date => {
  //     tally[vices[date]]++;
  //   })

  //   return tally;
  // })();

  // console.log(vices);
  const monthsToChooseFrom = listOfDatesToListOfMonths(vices);

  return (
    <div>
      <DateSelect
        options={monthsToChooseFrom}
        month={month}
        year={year}
        goToMonth={goToMonth}
      />

      <Calendar
        month={2}
        year={2024}
        vices={vices}
        addViceToken={addViceToken}
        removeViceToken={removeViceToken}
      />

      {/* <Quote /> */}
    </div>
  );
};

const mapStateToProps = ({ calendar }) => ({
  vices: calendar.vices,
  month: calendar.month,
  year: calendar.year,
  max: {
    bud: calendar.max.bud,
    booze: calendar.max.booze,
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      goToMonth,
      addViceToken,
      removeViceToken,
      changePage: () => push("/about-us"),
    },
    dispatch
  );

export default ViceCalendar;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ViceCalendar)

function listOfDatesToListOfMonths(dates) {
  const list = dates.reduce((acc, cur) => {
    const [y, m] = cur.split("-");
    const opt = `${y}-${m - 1}`;
    if (!acc.includes(opt)) {
      // console.log(opt)
      acc.push(opt);
    }
    return acc;
  }, []);

  // optionally, add the current month
  const d = new Date();
  const currentMonth = `${d.getFullYear()}-${d.getMonth()}`;

  if (!list.includes(currentMonth)) {
    list.push(currentMonth);
  }

  return list;
}
