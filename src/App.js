import logo from './logo.svg';
import RouteCompo from './RouteCompo.js';
import './App.css';
import StoreCompo from './StoreCompo';

function App() {
  return (
    <div className="App">
      {/* <RouteCompo /> */}
      
      <StoreCompo>
      <RouteCompo />
      </StoreCompo>
    </div>
  );
}

export default App;
