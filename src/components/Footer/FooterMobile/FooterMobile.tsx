import s from './FooterMobile.module.scss';
import footerLogo from 'assets/img/footer-logo.svg'
import instagram from 'assets/img/instagram-logo.svg'
import vk from 'assets/img/vk-logo.svg'
import facebook from 'assets/img/facebook-logo.svg'
import okru from 'assets/img/okru-logo.svg'
import phone from 'assets/img/phone.svg'
import { NavLink } from 'react-router-dom';

const FooterMobile = () => {
  return (
    <div className={s.footer}>
      <div className={s.topLine}>
        <img src={footerLogo} alt="Северяночка" className={s.logo} />
        <div className={s.common}>
          <div className={s.socialLinks}>
            <a 
              href="https://www.instagram.com/?hl=ru" 
              className={s.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="inst" />
            </a>
            <a 
              href="https://vk.com/feed" 
              className={s.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={vk} alt="vk" />
            </a>
            <a 
              href="https://ru-ru.facebook.com/" 
              className={s.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a 
              href="https://ok.ru/" 
              className={s.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={okru} alt="okru" />
            </a>
          </div>
          <div className={phone}>
            <img src={phone} alt="" className={s.phone__icon} />
            <span className={s.phone__text}>8 800 777 33 33</span>
          </div>
        </div>
      </div>
      <div className={s.bottomLine}>
        <div className={s.links}>
          <NavLink to="/about-company" className={s.link}>О компании</NavLink>
          <NavLink to="/contacts" className={s.link}>Контакты</NavLink>
          <NavLink to="/jobs" className={s.link}>Вакансии</NavLink>
          <NavLink to="/articles" className={s.link}>Статьи</NavLink>
          <NavLink to="/policy" className={s.link}>Политика обработки персональных данных</NavLink>
        </div>
      </div>
    </div>
  )
}

export default FooterMobile