import './App.scss';
import { HomePage, Layout } from '../pages/index';
import { Routes, Route } from 'react-router-dom';

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
