import React, { useState } from 'react';

const SecondPage = (data) => {
  const formData = data;
  console.log(formData);


  const handleSave = () => {
    const combinedData = {
      ...formData,
    };

    fetch('/api/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(combinedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved successfully:', data);
        // Handle any further actions or UI updates
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        // Handle error case
      });
  };

  return (
    <div className="container">
      <h1 className="heading">Second Page</h1>
    </div>
  );
};

export default SecondPage;
