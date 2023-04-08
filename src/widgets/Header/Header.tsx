import { Slogan } from "../../shared/index";
import { TicketSearchForm } from "features";
import { globalURL } from "../../shared/index";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Header() {
  const isOrder:boolean = /\/order\/step\//.test(useLocation().pathname);
  const variant = isOrder ? 'variant-2' : 'variant-1'

  const className = 'header'
  return (
    <header className={classNames(className, (className+`_${variant}`))}>
      <div className="logo wrapped">Лого</div>
      <nav className="header__nav-menu wrapped">
        <ul className="header-nav-menu-list">
          <li className="header__nav-menu-item"><a href={`${globalURL}/#about`} className="header__nav-menu-link">О нас</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#how-it-works`} className="header__nav-menu-link">Как это работает</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#reviews`} className="header__nav-menu-link">Отзывы</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#contacts`} className="header__nav-menu-link">Контакты</a></li>
        </ul>
      </nav>
      <div className={classNames(
        `${className}__ticket-search-section wrapped`,
        (`${className}__ticket-search-section_${variant}`)
        )}>
        {isOrder ? false : <Slogan bemClass={className} />}
        <TicketSearchForm bemClass={className} variant={variant}/>
      </div>
    </header>
  )
}