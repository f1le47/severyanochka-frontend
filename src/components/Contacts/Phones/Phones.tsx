import s from './Phones.module.scss';
import home from 'assets/img/home.svg'
import percent from 'assets/img/percent.svg';

const Phones = () => {
  return (
    <div className={s.phones}>
      <div className={s.phone}>
        <div className={s.naming}>
          <img src={home} alt="" className={s.icon} />
          <span className={s.naming__text}>Бухгалтерия, склад</span>
        </div>
        <a href="#" className={s.number}>+7 82140 92619</a>
      </div>
      <div className={s.phone}>
        <div className={s.naming}>
          <img src={percent} alt="" className={s.icon} />
          <span className={s.naming__text}>Вопросы по системе лояльности</span>
        </div>
        <a href="#" className={s.number}>+7 908 716 33 97</a>
      </div>
    </div>
  )
}

export default Phones