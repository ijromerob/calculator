import { useState } from 'react';
import { calculateAll } from '../../assets/logic';

function Calculator({ setResult }) {
  const [isMetric, setIsMetric] = useState(true);
  const [distance, setDistance] = useState(0);

  return (
    <>
      <form
        onSubmit={(e) => {
          setResult(calculateAll(isMetric, e.target[1].value));
          e.preventDefault();
        }}
      >
        <label className="switch">
          Units:
          <input
            type="checkbox"
            onChange={(e) => {
              setIsMetric(!e.target.checked);
            }}
          />
          <span className="slider round">{isMetric ? 'Metric' : 'Miles'}</span>
        </label>
        <label>
          <input
            type="number"
            name="distance"
            placeholder={isMetric ? 'Distance in Km' : 'Distance in Miles'}
            onChange={(a) => setDistance(a.target.value)}
            value={distance}
            required
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
    </>
  );
}

export default Calculator;
