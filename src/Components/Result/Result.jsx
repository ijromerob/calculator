function Result({ result }) {
  return (
    result && (
      <div className="results">
        <h1>{result.distance + (result.isMetric ? ' Km' : ' Miles')}</h1>
        <div className="modes">
          <h2 className="modeTitle">Walking</h2>
          <h3>Emissions</h3>
          <h4>
            {result.emissions.Walking.toFixed(2) +
              (result.isMetric ? ' gramsCO2/Km' : ' OuncesCO2/Mile')}
          </h4>
          <h3>Cost</h3>
          <h4>{'CA$ ' + result.cost.Walking.toFixed(2)}</h4>
        </div>
        <div className="modes">
          <h2 className="modeTitle">Biking</h2>
          <h3>Emissions</h3>
          <h4>
            {result.emissions.Biking.toFixed(2) +
              (result.isMetric ? ' gramsCO2/Km' : ' OuncesCO2/Mile')}
          </h4>
          <h3>Cost</h3>
          <h4>{'CA$ ' + result.cost.Biking.toFixed(2)}</h4>
        </div>
        <div className="modes">
          <h2 className="modeTitle">Public Transit</h2>
          <h3>Emissions</h3>
          <h4>
            {result.emissions.Transit.toFixed(2) +
              (result.isMetric ? ' gramsCO2/Km' : ' OuncesCO2/Mile')}
          </h4>
          <h3>Cost</h3>
          <h4>{'CA$ ' + result.cost.Transit.toFixed(2)}</h4>
        </div>
        <div className="modes">
          <h2 className="modeTitle">Driving</h2>
          <h3>Emissions</h3>
          <h4>
            {result.emissions.Driving.toFixed(2) +
              (result.isMetric ? ' gramsCO2/Km' : ' OuncesCO2/Mile')}
          </h4>
          <h3>Cost</h3>
          <h4>{'CA$ ' + result.cost.Driving.toFixed(2)}</h4>
        </div>
      </div>
    )
  );
}

export default Result;
