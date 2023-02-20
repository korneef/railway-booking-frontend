import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Slogan } from "../../shared/index";

import { globalURL } from "../../shared/index";

export default function Header() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <header className="header">
      <div className="logo wrapped">Лого</div>
      <nav className="header__nav-menu wrapped">
        <ul className="header-nav-menu-list">
          <li className="header__nav-menu-item"><a href={`${globalURL}/#about`} className="header__nav-menu-link">О нас</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#how-it-works`} className="header__nav-menu-link">Как это работает</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#reviews`} className="header__nav-menu-link">Отзывы</a></li>
          <li className="header__nav-menu-item"><a href={`${globalURL}/#contacts`} className="header__nav-menu-link">Контакты</a></li>
        </ul>
      </nav>
      <div className="header__ticket-search-section wrapped">
        <Slogan bemClass="header"/>
        <form className="header__ticket-search-form ticket-search-form">
          <div className="ticket-search-form__group">
            <h1 className="ticket-search-form__header">Направление</h1>
            <input className="ticket-search-form__input" type="text" placeholder="Откуда" />
            <input className="ticket-search-form__input" type="text" placeholder="Куда" />
          </div>
          <div className="ticket-search-form__group">
            <h1 className="ticket-search-form__header">Дата</h1>
            <div className="ticket-search-form__input-wrapper">
              <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={startDate} onChange={(date) => setStartDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />
              <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={startDate} onChange={(date) => setStartDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />            </div>
          </div> <Button variant="standart" className="ticket-search-form">Найти билеты</Button>
        </form>
      </div>
    </header>
  )
}