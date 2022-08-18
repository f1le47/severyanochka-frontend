import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useActions, useAppSelector } from "hooks/redux";
import Navbar from "components/Navbar/Navbar";
import Notification from "commons/Notification/Notification";
import Main from "pages/Main/Main";
import './App.scss'
import Footer from "components/Footer/Footer";

function App() {

  const {checkAuth} = useActions()
  const {isAuth, errors, successes} = useAppSelector(state => state.user)
  const productErrors = useAppSelector(state => state.product.errors)


  useEffect(() => {
    if (!isAuth) {
      checkAuth()
    }
  }, [isAuth])

  return (
    <div className="App">
      {(errors.length > 0 || successes.length > 0 || productErrors.length > 0) && (
        <Notification 
          errors={errors}
          successes={successes}
          productErrors={productErrors}
        />
      )}
      <Navbar />
        <Routes>
          <Route path="/" element={ <Main /> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;