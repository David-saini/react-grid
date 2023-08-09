import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/genesis' element={<Nav />} />
      </Routes>
    </>
  );
}

export default App;
