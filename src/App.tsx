import './App.css';
import Stars from './components/Stars';

export type Count = number;

function App() {
  const count: Count = 0;
  return (
    <>
      <div className="App">
        <Stars count={count}/>
      </div>
    </>
  );
}

export default App;