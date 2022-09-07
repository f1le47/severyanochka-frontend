import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useActions, useAppSelector } from "hooks/redux";
import Navbar from "components/Navbar/Navbar";
import Notification from "commons/Notification/Notification";
import Main from "pages/Main/Main";
import './App.scss'
import Footer from "components/Footer/Footer";
import Favorite from "pages/Favorite/Favorite";
import Basket from "pages/Basket/Basket";
import Catalog from "pages/Catalog/Catalog";
import Category from "pages/Catalog/Category/Category";

function App() {

  const productErrors = useAppSelector(state => state.product.errors)
  const favoriteErrors = useAppSelector(state => state.favorite.errors)
  
  const {isAuth, errors, successes} = useAppSelector(state => state.user)
  const {
    checkAuth, 
    getFavoriteProductIds, 
    getAmountBasketProducts, 
    getBasketProducts,
    getCategories
  } = useActions()
  
  useEffect(() => {
    getCategories()

    if (!isAuth) {
      checkAuth()
    }
  }, [isAuth])

  if (isAuth) {
    getFavoriteProductIds()
    getAmountBasketProducts()
    getBasketProducts()
  }

  return (
    <div className="App">
      {(errors.length > 0 || successes.length > 0 || productErrors.length > 0 || favoriteErrors.length > 0) && (
        <Notification 
          errors={errors}
          successes={successes}
          productErrors={productErrors}
          favoriteErrors={favoriteErrors}
        />
      )}
      <Navbar />
        <div className="container-for-bgc">
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="favorite" element={<Favorite />} />
            <Route path="basket" element={<Basket />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:categoryId" element={<Category />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;