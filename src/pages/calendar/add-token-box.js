import React, { useState } from "react";
// import "./add-token-box.css";
import { months } from "../constants";
import { keyifyDate } from "../logic/keyify-date";

function AddTokenBox({ date, vice, cancel, update }) {
  const dateString = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  const dateKey = keyifyDate(date);
  const [selectedVice, setSelectedVice] = useState(vice);
  // console.log(dateKey);

  return (
    <div className="add-token-box">
      <div className="selected-date">{dateString}</div>

      <div className="vice-options">
        {/* <div>
          <label htmlFor="checkbox-for-booze">
            <input type="checkbox" id="checkbox-for-booze" onChange={e => {console.log(e)}} checked={selectedVice === 'booze'} onClick={() => setSelectedVice('booze')} />
            <span>X</span>
            booze
          </label>
        </div> */}
        <div>
          <label htmlFor="checkbox-for-bud">
            <input
              type="checkbox"
              id="checkbox-for-bud"
              onChange={(e) => {
                console.log(e);
              }}
              checked={selectedVice}
              onClick={() => setSelectedVice(true)}
            />
            <span>X</span>
            not sober
          </label>
        </div>
        <div>
          <label htmlFor="checkbox-for-sobriety">
            <input
              type="checkbox"
              id="checkbox-for-sobriety"
              onChange={(e) => {
                console.log(e);
              }}
              checked={!selectedVice}
              onClick={() => setSelectedVice(false)}
            />
            <span>X</span>
            sober
          </label>
        </div>
      </div>

      <div className="button-container">
        <button
          onClick={() => {
            update({ date: dateKey, vice: selectedVice });
            // console.log({ date: dateKey, vice: selectedVice });
          }}
        >
          Update
        </button>
        <button onClick={cancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddTokenBox;
