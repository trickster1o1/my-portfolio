import Front from './Front';
import './App.css';
import ApiTest from './ApiTest';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/apiTest" element={<ApiTest />} />

          <Route path="/" element={<Front />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
