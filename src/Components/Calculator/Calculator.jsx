import { useState } from 'react';
import { calculateAll } from '../../assets/logic';
import './Calculator.css';

function Calculator({ setResult }) {
  const [isMetric, setIsMetric] = useState(true);
  const [distance, setDistance] = useState(0);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(calculateAll(isMetric, distance));
        }}
      >
        <label>Units:</label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              setIsMetric(!e.target.checked);
            }}
          />
          <span className="slider round"></span>
        </label>
        <label>{isMetric ? ' Metric' : ' Imperial'}</label>
        <fieldset className="bar">
          <label>
            <input
              type="number"
              name="distance"
              placeholder={isMetric ? 'Distance in Km' : 'Distance in Miles'}
              onChange={(a) => setDistance(a.target.value)}
              value={distance}
              className="distanceInput inputBar"
              required
            />
          </label>
          <button type="submit inputBar">Calculate</button>
        </fieldset>
      </form>
    </>
  );
}

export default Calculator;
