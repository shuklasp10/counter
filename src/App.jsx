import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [record, setRecord] = useState([]);

  return (
    <>
      <div className='App'>
        <div className='Counter'>
          <button className='btn-minus' onClick={() => setCounter(counter - 1)}>-</button>
          <h2>
            {counter}
          </h2>
          <button className='btn-add' onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        <div className="ButtonsContainer">
          <button className="btn-reset" onClick={() => setCounter(0)}>Reset</button>
          <button className="btn-submit" onClick={() => setRecord([...record, counter])}>Record</button>
          <button className="btn-clear" onClick={() => setRecord([])}>Clear</button>
        </div>
        <div className="Records">
          {record.length == 0 ?
            <li className='RecordItem'>No Record</li> :
            record.map((item, i) => (
              <li className='RecordItem'>Record{i + 1}: {item}</li>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
