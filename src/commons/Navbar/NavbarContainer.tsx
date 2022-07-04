import { connect } from "react-redux";
import { NavbarType } from "../../types/NavbarTypes/NavbarTypes";
import Navbar from "./Navbar";

const NavbarContainer = ({isAuth, name, avatar}: NavbarType) => {
  return <>
    <Navbar isAuth={isAuth} name={name} avatar={avatar} />
  </>
}

const mstp = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    name: state.auth.name,
    avatar: state.auth.avatar
  }
}

export default connect(mstp)(NavbarContainer);