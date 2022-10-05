import Container from 'commons/Container/Container';
import Content from 'commons/Content/Content';
import s from './About.module.scss';
import illustration from 'assets/img/about-img.svg'
import check from 'assets/img/check.svg'
import logo from 'assets/img/logo-big.svg'
import cloudPart from 'assets/img/cloud-part.svg'
import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs';

const About = () => {
  return (
    <div className={s.about}>
      <Container>
        <BreadCrumbs/>
        <Content contentTitle="О компании">
          <h2 className={s.subtitle}>
            Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших клиентах, стремимся к лучшему будущему.
          </h2>
          <img src={illustration} alt="" className={s.illustration} />
          <div className={s.checks}>
            <div className={s.check}>
              <img src={check} alt="" className={s.icon} />
              <span className={s.check__title}>Мы занимаемся<br/>розничной торговлей</span>
              <p className={s.check__description}>Более 20 лет.</p>
            </div>
            <div className={s.check}>
              <img src={check} alt="" className={s.icon} />
              <span className={s.check__title}>Основная миссия компании</span>
              <p className={s.check__description}>Максимальное качество<br/>товаров и услуг по<br/>доступной цене.</p>
            </div>
            <div className={s.check}>
              <img src={check} alt="" className={s.icon} />
              <span className={s.check__title}>Отличительная черта нашей сети</span>
              <p className={s.check__description}>Здоровая и полезная продукция<br/>местного производства в наших<br/>магазинах.</p>
            </div>
          </div>
          <div className={s.gratitude}>
            <img src={logo} alt="" className={s.logo} />
            <div className={s.gratitudeCloud}>
              <img src={cloudPart} alt="" className={s.cloudPart} />
              <p className={s.gratitudeCloud__text}>Спасибо за то, что вы с нами. Северяночка, везет всегда!</p>
            </div>
          </div>
        </Content>
      </Container>
    </div>
  )
}

export default About