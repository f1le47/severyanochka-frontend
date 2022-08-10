import { connect } from "react-redux"
import App from "./App"

const AppContainer = () => {
  return <>
    <App />
  </>
}

const mstp = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mstp)(AppContainer);