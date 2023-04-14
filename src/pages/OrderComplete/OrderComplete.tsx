import { numberWithSpaces, Panel, GetTicket, PrintTicket, PresentTicket, Button } from 'shared';
import { useAppSelector } from 'app/store/hooks';
import { useNavigate } from 'react-router-dom';
import { useRef, useLayoutEffect } from 'react'


function OrderComplete() {
  const order = useAppSelector(state => state.order);
  const price = order.preOrder.departure.price + order.preOrder.arrival.price;
  const className = 'order-completed';
  const instructionsClass = 'instructions';
  const navigate = useNavigate();
  const scrollElRef = useRef<null | HTMLDivElement>(null);
  useLayoutEffect(() => {
    scrollElRef.current !== null && scrollElRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  const handleClick = () => {
    navigate('/')
  }

  return (
    <main className={`${className}__main-wrapper`}>
      <div className={`${className} wrapped`}>
        <h2 ref={scrollElRef} className={`${className}__gratitude-header`}>Благодарим Вас за заказ!</h2>
        <Panel bemClass={className} variant='white'>
          <div className={`${className}__header`}>
            <div className={`${className}__order-number`}>№ Заказа 282АА</div>
            <div className={`${className}__price`}>{numberWithSpaces(price)}</div>
          </div>

          <div className={instructionsClass}>
            <div className={`${instructionsClass}__card`}>
              <div className={`${instructionsClass}__image-container`}>
                <img src={GetTicket} alt="" />
              </div>
              <div className={`${instructionsClass}__text`}>билеты будут отправлены на ваш <b>e-mail</b></div>
            </div>
            <div className={`${instructionsClass}__card`}>
              <div className={`${instructionsClass}__image-container`}>
                <img src={PrintTicket} alt="" />
              </div>
              <div className={`${instructionsClass}__text`}>распечатайте и сохраняйте билеты до даты поездки</div>
            </div>
            <div className={`${instructionsClass}__card`}>
              <div className={`${instructionsClass}__image-container`}>
                <img src={PresentTicket} alt="" />
              </div>
              <div className={`${instructionsClass}__text`}>предьявите распечатанные билеты при посадке</div>
            </div>
          </div>

          <div className={`${className}__main`}>
            <div className={`${className}__user`}>{`${order.order.user?.first_name} ${order.order.user?.patronymic}!`}</div>
            <div className={`${className}__text-standart`}>Ваш заказ успешно оформлен.
              В ближайшее время с вами свяжется наш оператор для подтверждения.
            </div>
            <div className={`${className}__text-bold`}>
              Благодарим Вас за оказанное доверие и желаем приятного путешествия!
            </div>
          </div>

          <div className={`${className}__button-wrapper`}>
            <Button variant='transparent' className={className} onClick={handleClick}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</Button>
          </div>

        </Panel>
      </div>
    </main>
  );
}

export default OrderComplete;