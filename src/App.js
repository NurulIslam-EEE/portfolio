
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<projects />}></Route>
          <Route path="/home" element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
