import s from './Main.module.scss';
import banner from '../../assets/img/mainBanner/banner.jpg'

const Main = () => {
  return <div className={s.main}>
    <img src={banner} alt="banner" className={s.main__banner} />
    <div className={s.container}>
      
    </div>
  </div>
}

export default Main