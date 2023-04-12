import { PassengerCard } from "features";

function PassengersList() {

  const className = 'passengers-list'
  return (

    <div className={className} >
<PassengerCard />
    </div>
  );
}

export default PassengersList;