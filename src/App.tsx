import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useActions, useAppSelector } from "hooks/redux";
import Navbar from "components/Navbar/Navbar";
import Notification from "commons/Notification/Notification";
import Main from "pages/Main/Main";
import './App.scss'
import Footer from "components/Footer/Footer";
import Category from "pages/Catalog/Category/Category";
import Product from "pages/Catalog/Category/Product/Product";
import Loader from "commons/Loader/Loader";
import { CircularProgress } from "@material-ui/core";
const Favorite = lazy(() => import('pages/Favorite/Favorite'))
const Basket = lazy(() => import('pages/Basket/Basket'))
const Catalog = lazy(() => import('pages/Catalog/Catalog'))

function App() {

  const isAuth = useAppSelector(state => state.user.isAuth)
  const {
    checkAuth, 
    getFavoriteProductIds, 
    getAmountBasketProducts, 
    getBasketProducts,
    getCategories
  } = useActions()

  useEffect(() => {
    getCategories()
  }, [])
  
  useEffect(() => {
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
      <Notification /> {/* MODAL */}
      <Navbar />
      <Loader />
      <Suspense fallback={<div className="loader"><CircularProgress /></div>}>
        <div className="container-for-bgc">
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="favorite" element={<Favorite />} />
            <Route path="basket" element={<Basket />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:categoryId" element={<Category />} />
            <Route path="catalog/:categoryId/:productId" element={<Product />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;