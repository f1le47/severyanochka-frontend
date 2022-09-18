import s from './Loader.module.scss'
import { CircularProgress } from "@material-ui/core"
import { useAppSelector } from 'hooks/redux'

const Loader = () => {

  const basketLoading = useAppSelector(state => state.basket.isLoading)
  const categoriesLoading = useAppSelector(state => state.categories.isLoading)
  const favoriteLoading = useAppSelector(state => state.favorite.isLoading)
  const productLoading = useAppSelector(state => state.product.isLoading)
  const ratingLoading = useAppSelector(state => state.rating.isLoading)
  const userLoading = useAppSelector(state => state.user.isLoading)

  return (
    basketLoading ||
    categoriesLoading ||
    favoriteLoading ||
    productLoading ||
    ratingLoading ||
    userLoading
      ? (
        <div className={s.loader}>
          <CircularProgress />
        </div>
      )
      : 
      (
        <></>
      )
  )
}

export default Loader