import skypeIcon from '../../app/assets/icons/footer-contacts/skype.svg'
import adressIcon from '../../app/assets/icons/footer-contacts/adress.svg'
import mailIcon from '../../app/assets/icons/footer-contacts/mail.svg'
import phoneIcon from '../../app/assets/icons/footer-contacts/phone.svg'

import facebookIcon from '../../app/assets/icons/footer-subscriptions/facebook.svg'
import googleplusIcon from '../../app/assets/icons/footer-subscriptions/google-plus.svg'
import linkedinIcon from '../../app/assets/icons/footer-subscriptions/linked-in.svg'
import twitterIcon from '../../app/assets/icons/footer-subscriptions/twitter.svg'
import youtubeIcon from '../../app/assets/icons/footer-subscriptions/youtube.svg'

import swiperIcon from '../../app/assets/icons/footer-swiper/swiper.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-main">
        <div className="footer-contacts">
          <h2 className="footer-contacts__header footer__header" id='contacts'>Свяжитесь с нами</h2>
          <ul className="footer-contacts__contacts-list">
            <li className="footer-contacts__contact-element"><img className='footer-contacts__contact-image' src={phoneIcon} alt="" />8 (800) 000 00 00</li>
            <li className="footer-contacts__contact-element"><img className='footer-contacts__contact-image' src={mailIcon} alt="" />inbox@mail.ru</li>
            <li className="footer-contacts__contact-element"><img className='footer-contacts__contact-image' src={skypeIcon} alt="" />tu.train.tickets</li>
            <li className="footer-contacts__contact-element"><img className='footer-contacts__contact-image' src={adressIcon} alt="" />г. Москва ул. Московская 27-35 555 555</li>
          </ul>
        </div>
        <div className="footer-subscriptions">
          <div className="mail-subscription">
            <h2 className="footer__header">Подписка</h2>
            <h3 className="mail-subscription__form-header">Будьте в курсе событий</h3>
            <form action="" className="mail-subscription__sub-form">
              <input className='mail-subscription__sub-form-input' type="email" placeholder='e-mal' /> <button>Отправить</button>
            </form>
          </div>
          <div className="social-subscriptions">
            <h2 className="footer__header">Подписывайтесь на нас</h2>
            <ul className="social-subscriptions__list">
              <li className="social-subscriptions__item"><a href="/#" className="social-subscriptions__link"><img className='social-subscriptions__icon' src={youtubeIcon} alt="" /></a></li>
              <li className="social-subscriptions__item"><a href="/#" className="social-subscriptions__link"><img className='social-subscriptions__icon' src={linkedinIcon} alt="" /></a></li>
              <li className="social-subscriptions__item"><a href="/#" className="social-subscriptions__link"><img className='social-subscriptions__icon' src={googleplusIcon} alt="" /></a></li>
              <li className="social-subscriptions__item"><a href="/#" className="social-subscriptions__link"><img className='social-subscriptions__icon' src={facebookIcon} alt="" /></a></li>
              <li className="social-subscriptions__item"><a href="/#" className="social-subscriptions__link"><img className='social-subscriptions__icon' src={twitterIcon} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-info wrapped">
        <div className="footer-info__logo logo">Лого</div>
        <div className="footer-info__top-swiper"><button className="footer-info__top-swiper-button" type='button'><img className='footer-info__top-swiper-image' src={swiperIcon} alt="" /></button></div>
        <div className="footer-info__web-studio">2018 WEB</div>
      </div>
    </footer>
  )
}

