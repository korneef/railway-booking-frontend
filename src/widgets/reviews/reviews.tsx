export default function Reviews() {
  return (
    <div className="reviews wrapped">
      <h2 className="reviews__header">Отзывы</h2>
      <div className="reviews__container">
        <div className="review">
          <div className="reviwe__image-container">
            <img src={require('../../app/assets/images/avatars/woman.jpeg')} alt="" />
          </div>
          <div className="review__text-container">
            <div className="review__author">Екатерина Вальнова</div>
            <div className="review__text">
              Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
            </div>
          </div>
        </div>
        <div className="review">
          <div className="reviwe__image-container">
            <img src={require('../../app/assets/images/avatars/man.jpeg')} alt="" />
          </div>
          <div className="review__text-container">
            <div className="review__author">Евгений Стрыкало</div>
            <div className="review__text">
              СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
            </div>
          </div>
        </div>

      </div>
      <div className="reviews__pagination">
        <button className="reviews__pagination-element reviews__pagination-element_active"></button>
        <button className="reviews__pagination-element"></button>
        <button className="reviews__pagination-element"></button>
        <button className="reviews__pagination-element"></button>
        <button className="reviews__pagination-element"></button>
      </div>
    </div>
  )
}