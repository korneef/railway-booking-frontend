export default function HowItWorks() {
  return (
    <div className="how-it-works wrapped">
          <div className="how-it-works__header-segment">
            <div className="how-it-works__header" id="how-it-works">Как это работает?</div>
            <div className="how-it-works__button-wrapper">
              <button className="how-it-works__button">Узнать больше</button>
            </div>
          </div>
          <div className="how-it-works__content-segment">
            <div className="how-it-works-card">
              <div className="how-it-works-card__image-container">
                <img src={require('../../app/assets/icons/howitworks_icons/computer.png')} alt="" />
              </div>
              <div className="how-it-works-card__text">Удобный заказ
                на сайте</div>
            </div>
            <div className="how-it-works-card">
              <div className="how-it-works-card__image-container">
                <img src={require('../../app/assets/icons/howitworks_icons/city.png')} alt="" />
              </div>
              <div className="how-it-works-card__text">Нет необходимости ехать в офис</div>
            </div>
            <div className="how-it-works-card">
              <div className="how-it-works-card__image-container">
                <img src={require('../../app/assets/icons/howitworks_icons/earth.png')} alt="" />
              </div>
              <div className="how-it-works-card__text">Огромный выбор
                направлений</div>
            </div>
          </div>
        </div>
  )
}