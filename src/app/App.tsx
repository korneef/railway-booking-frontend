import './App.scss';
import HomePage from '../pages/homepage/homepage';
import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
