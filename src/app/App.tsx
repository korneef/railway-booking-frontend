import './App.scss';
import { HomePage, Layout } from '../pages/index';
import { Routes, Route } from 'react-router-dom';
import { TicketOrderLayout } from '../ processes';
import Order from '../ processes/ Order/Order';
import { OrderComplete } from '../pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='thanks-for-your-order' element={<OrderComplete />} />
          <Route element={<TicketOrderLayout />} >
            <Route path='order/step/:step' element={<Order />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
