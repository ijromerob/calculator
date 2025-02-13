// This file will store the logic for the calculator

// Function to perform the calculation of cost for each mode of transport
function calculateCost(distance) {
  // Cost per km for each mode of transport according to City of Calgary
  const costs = {
    Walking: -0.22,
    Biking: 0.08,
    Driving: 0.7,
    Transit: 0.11,
  };

  const response = {};

  for (const mode in costs) {
    response[mode] = costs[mode] * distance;
  }

  return response;
}

// function to calculate the CO2 emissions for each mode of transport
function calculateEmissions(distance) {
  // CO2 grams emissions per km for each mode of transport according to
  const emissions = {
    Walking: 8,
    Biking: 33,
    Driving: 170,
    Transit: 97,
  };

  const response = {};

  for (const mode in emissions) {
    response[mode] = emissions[mode] * distance;
  }

  return response;
}

// convert emissions from grams to ounces

function gramsCO2ToOuncesCO2(emissions) {
  for (const mode in emissions) {
    emissions[mode] = emissions[mode] / 28.3495;
  }
  return emissions;
}

function milesToKilometers(miles) {
  let kilometers = miles * 1.60934;
  return kilometers;
}

function calculateAll(isMetric, distance) {
  distance = parseFloat(distance);
  let distanceInKm = isMetric ? distance : milesToKilometers(distance);
  const cost = calculateCost(distanceInKm);
  const emissions = isMetric
    ? calculateEmissions(distanceInKm)
    : gramsCO2ToOuncesCO2(calculateEmissions(distanceInKm));

  return { cost, emissions, isMetric, distance };
}

export { calculateAll };
