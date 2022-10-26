import { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const displayInformation = (customerInfo) => {
    console.log(customerInfo);
  };

  return (
    <>
      <div className='container'>
        <Form displayInformation={displayInformation} />
      </div>
    </>
  );
};

export default App;
