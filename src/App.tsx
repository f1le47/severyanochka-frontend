import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./commons/Navbar/NavbarContainer";
import MainContainer from "./components/Main/MainContainer";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Routes>
        <Route path="/" element={ <MainContainer /> } />
      </Routes>
    </div>
  );
}

export default App;
