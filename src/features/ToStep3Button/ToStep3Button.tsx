import { useEffect, useState } from "react";
import { useAppSelector } from "app/store/hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "shared";

function ToStep3ButtonWrapper() {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const persons = useAppSelector(state => state.order.preOrder.persons);
  const navigate = useNavigate();


  useEffect(() => {
    setButtonDisabled(persons.some(item => item === null))
  }, [persons]);

  const handleClick = () => {
    navigate('/order/step/3');
  }
  return (
    <div className={`order-step__button-wrapper`}>
    <Button
      variant='standart'
      className={`order-step`}
      disabled={buttonDisabled}
      onClick={handleClick}>ДАЛЕЕ</Button></div>
  );
}

export default ToStep3ButtonWrapper;