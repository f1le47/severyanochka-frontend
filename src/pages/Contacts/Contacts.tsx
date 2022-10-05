import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs';
import Container from 'commons/Container/Container';
import Content from 'commons/Content/Content';
import MainMap from 'commons/Map/MainMap';
import Phones from 'components/Contacts/Phones/Phones';
import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Container>
        <BreadCrumbs />
        <Content contentTitle="Контакты">
          <Phones />
          <MainMap />
        </Content>
      </Container>
    </div>
  )
}

export default Contacts