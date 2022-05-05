import React, { useState, useEffect } from 'react';
import './App.css';
import response from "./data.json"
import Chart from './charts'
function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    if(show){
      setData(response)
    }
  }, [show]);
  return (
    <div className="App">
      { show ?
      <span>
      <h2>Google Charts</h2>
      { show && data && data.charts.map((chartData, i) => (
        <Chart chart={chartData} key={i}/>
      ))}

      </span>
      :

      <h2>Her hangi bir Grafik Görüntülenemiyor </h2>
      }
      <button onClick={() => setShow(!show)}>
      { show ? "Grafik Gizle" : "Veriyi Al" }
      </button>
    </div>
  );
}
export default App;