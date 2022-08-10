import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/Main/MainContainer";
import { useEffect } from "react";
import { useActions, useAppSelector } from "hooks/redux";
import Navbar from "components/Navbar/Navbar";
import Notification from "commons/Notification/Notification";

function App() {

  const {checkAuth} = useActions()
  const {isAuth, errors, successes} = useAppSelector(state => state.auth)


  useEffect(() => {
    if (!isAuth) {
      checkAuth()
    }
  }, [isAuth])

  return (
    <div className="App">
      {(errors.length > 0 || successes.length > 0) && (
        <Notification 
          errors={errors}
          successes={successes}
        />
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={ <MainContainer /> } />
      </Routes>
    </div>
  );
}

export default App;