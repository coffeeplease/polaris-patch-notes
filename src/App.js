import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://quiet-jelly-3dbfcd.netlify.app/.netlify/functions/polarisNotes');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Webhook Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
