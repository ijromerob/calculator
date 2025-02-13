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
  // CO2 emissions per km for each mode of transport according to
  const emissions = {
    Walking: 0,
    Biking: 0,
    Driving: 0.17,
    Transit: 0.03,
  };

  const response = {};

  for (const mode in emissions) {
    response[mode] = emissions[mode] * distance;
  }

  return response;
}
