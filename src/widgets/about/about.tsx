export default function About() {
  return(
    <div className="about wrapped">
    <h2 className="about__title">О нас</h2>
    <div className="about__wrapped">
      <div className="about__line"></div>
      <div className="about__content"><div className="about__content-normal">
        Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
        все больше людей заказывают жд билеты через интернет.
      </div>
        <br />
        <div className="about__content-normal">
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
          Мы расскажем о преимуществах заказа через интернет.
        </div><br />
        <div className="about__content-bold">
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
        </div>
      </div>
    </div>
  </div>
  )
}