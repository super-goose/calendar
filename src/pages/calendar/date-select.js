import React from "react";
import { months } from "../constants";
import styles from "./date-select.module.css";

function DateSelect({ options, year, month, goToMonth }) {
  return (
    <div className={styles.dateSelectorContainer}>
      <select
        className={styles.dateSelector}
        value={`${year}-${month}`}
        onChange={(e) => {
          const [_year, _month] = e.target.value.split("-");
          goToMonth(_month, _year);
        }}
      >
        {options.map((opt) => {
          let [y, m] = opt.split("-");
          return (
            <option key={`date-select-option-${opt}`} value={opt}>
              {months[m]} {y}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DateSelect;
