import { Slogan } from "../../shared/index";
import { TicketSearchForm } from "features";
import { globalURL } from "../../shared/index";

export default function Header() {
  
  const className = 'header'
  return (
    <header className={className}>
      <div className="logo wrapped">Лого</div>
      <nav className="header__nav-menu wrapped">
        <ul className="header-nav-menu-list">
          <li className="header__nav-menu-item"><a href={`${globalURL}/#about`} className="header__nav-menu-link">О нас</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#how-it-works`} className="header__nav-menu-link">Как это работает</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#reviews`} className="header__nav-menu-link">Отзывы</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#contacts`} className="header__nav-menu-link">Контакты</a></li>
        </ul>
      </nav>
      <div className={`${className}__ticket-search-section wrapped`}>
        <Slogan bemClass={className} />
        <TicketSearchForm bemClass={className} />
      </div>
    </header>
  )
}