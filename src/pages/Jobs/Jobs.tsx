import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs';
import Container from 'commons/Container/Container';
import Content from 'commons/Content/Content';
import Job from 'components/Jobs/Job/Job';
import { useActions, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import s from './Jobs.module.scss';

const Jobs = () => {

  const jobs = useAppSelector(state => state.job.jobs)

  const {getJobs} = useActions()
  useEffect(() => {
    getJobs({page: 1, amount: 6})
  }, [])

  return (
    <section className={s.jobs}>
      <Container>
        <BreadCrumbs />
        <Content contentTitle="Вакансии">
          <div className={s.grid}>
            {jobs.map(job => {
              return (
                <Job
                  key={job.id} 
                  job={job}
                />
              )
            })}
          </div>
        </Content>
      </Container>
    </section>
  )
}

export default Jobs