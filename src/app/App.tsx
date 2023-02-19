import './App.scss';
import { HomePage, Layout, OrderStep1 } from '../pages/index';
import { Routes, Route } from 'react-router-dom';
import { TicketOrderLayout } from ' processes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<TicketOrderLayout />} >
            <Route path='order/step/1' element={<OrderStep1 />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
