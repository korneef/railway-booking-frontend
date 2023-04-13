import { PassengerCard } from "features";
import { useAppSelector, useAppDispatch } from "app/store/hooks";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { changeNewPersonsArray } from "app/store/orderSlices";
import { ToStep3ButtonWrapper } from "features";

function PassengersList() {
  const persons = useAppSelector(state => state.order.preOrder.persons);
  const { adultCount, childrenCount } = useAppSelector(state => state.order.preOrder);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const personsNeeded = adultCount + childrenCount;
    if (personsNeeded === persons.length) return;

    const newPersons = [];
    for (let i = 0; i < personsNeeded; i += 1) {
      if (persons[i] === undefined) {
        newPersons.push(null);
        console.log(newPersons)
      } else {
        newPersons.push(persons[i]);
      }
    }
    dispatch(changeNewPersonsArray(newPersons));
  })

  const className = 'passengers-list';


  return (
    <div className={className} >
      {persons.map((item, index) => {
        console.log(`${index} >> ${persons[index - 1]}`)
        return <PassengerCard
          key={nanoid()}
          index={index}
          person={item}
          open={persons[index - 1] !== null ? true : false}
          scroll={persons[index - 1] !== null && item === null ? true : false}
          last={(persons.length === index + 1)} />
      })
      }
      <ToStep3ButtonWrapper />
    </div>
  );
}

export default PassengersList;