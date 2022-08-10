import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/Main/MainContainer";
import { useEffect } from "react";
import { useActions, useAppSelector } from "hooks/redux";
import Navbar from "components/Navbar/Navbar";

function App() {

  const {checkAuth} = useActions()
  const isAuth = useAppSelector(state => state.auth.isAuth)


  useEffect(() => {
    if (!isAuth) {
      checkAuth()
    }
  }, [isAuth, checkAuth] )

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <MainContainer /> } />
      </Routes>
    </div>
  );
}

export default App;