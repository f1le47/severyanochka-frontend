import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs'
import Container from 'commons/Container/Container'
import Content from 'commons/Content/Content'
import Tiles from 'components/Catalog/Tiles/Tiles'
import { useAppSelector } from 'hooks/redux'

const Catalog = () => {

  const categories = useAppSelector(state => state.categories.categories)

  return (
    <Container>
      <BreadCrumbs />
      <Content contentTitle="Каталог">
        <Tiles categories={categories} />
      </Content>
    </Container>
  )
}

export default Catalog