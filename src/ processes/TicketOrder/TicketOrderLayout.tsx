import { Outlet } from "react-router-dom";
import { OrderSteps } from "widgets";

function TicketOrderLayout() {
  return (
    <>
      <OrderSteps step={1} />
      <Outlet />
    </>
  );
}

export default TicketOrderLayout;