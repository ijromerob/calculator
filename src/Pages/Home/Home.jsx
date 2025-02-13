// This component will have the calculator form and the result of the calculation

import React, { useState } from 'react';

import Calculator from '../../Components/Calculator/Calculator';
import Result from '../../Components/Result/Result';

const Home = () => {
  const [result, setResult] = useState(false);

  return (
    <div>
      <Calculator setResult={setResult} />
      <Result result={result} />
    </div>
  );
};

export default Home;
