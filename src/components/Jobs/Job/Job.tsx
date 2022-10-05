import s from './Job.module.scss'
import phone from 'assets/img/phone.svg'
import { IJob } from './IJob'

const Job = ({job}: IJob) => {

  const {job_title, requirements, responsibilities, terms} = job

  return (
    <div className={s.job}>
      <h1 className={s.title}>{job_title}</h1>
      <div className={s.item}>
        <h2 className={s.item__title}>Требования</h2>
        <p className={s.item__text}>{requirements}</p>
      </div>
      <div className={s.item}>
        <h2 className={s.item__title}>Обязанности</h2>
        <p className={s.item__text}>{responsibilities}</p>
      </div>
      <div className={s.item}>
        <h2 className={s.item__title}>Условия</h2>
        <p className={s.item__text}>{terms}</p>
      </div>
      <div className={s.call}>
        <span className={s.call__text}>Звоните</span>
        <div className={s.phone}>
          <img src={phone} alt="" className={s.icon} />
          <a href="#" className={s.number}>+7 904 271 35 90</a>
        </div>
      </div>
    </div>
  )
}

export default Job