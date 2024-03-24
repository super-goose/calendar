import React from "react";
import classNames from "classnames";
import styles from "./date.module.css";

export const DateComponent = ({ vice, current, today, value, onClick }) => {
  const properties = {
    [styles.dateCell]: true,
    [styles.today]: today,
    [styles.currentMonth]: current,
    [styles.vice]: !!vice,
  };

  return (
    <td className={classNames(properties)}>
      <div onClick={onClick}>{value}</div>
    </td>
  );
};
