export default function HomePage() {
  return(
    <>
      <header>
        <div className="logo">Лого</div>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item"><a href="#/" className="menu__item-link">О нас</a></li>
            <li className="menu__item"><a href="#/" className="menu__item-link">Как это работает</a></li>
            <li className="menu__item"><a href="#/" className="menu__item-link">Отзывы</a></li>
            <li className="menu__item"><a href="#/" className="menu__item-link">Контакты</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}