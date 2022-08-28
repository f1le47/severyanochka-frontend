import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useActions, useAppSelector } from "hooks/redux";
import Navbar from "components/Navbar/Navbar";
import Notification from "commons/Notification/Notification";
import Main from "pages/Main/Main";
import './App.scss'
import Footer from "components/Footer/Footer";
import Favorite from "pages/Favorite/Favorite";

function App() {

  const {checkAuth, getFavoriteProductIds} = useActions()
  const {isAuth, errors, successes} = useAppSelector(state => state.user)
  const productErrors = useAppSelector(state => state.product.errors)
  const favoriteErrors = useAppSelector(state => state.favorite.errors)

  useEffect(() => {
    if (!isAuth) {
      checkAuth()
    }
  }, [isAuth])

  if (isAuth) {
    getFavoriteProductIds()
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
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;