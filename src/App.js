import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

// useEffect cleaning up

function Son ()  {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('This is Son')
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  },[])

  return (
    <div>
      <h1>This is Son</h1>
    </div>

  )

}

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Son />}
      <button onClick = {() => setShow(false)}>unstall Son</button>

    </div>
  );
}

export default App;
