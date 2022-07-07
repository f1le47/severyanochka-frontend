import { connect } from "react-redux"
import Main from "./Main"

const MainContainer = () => {
  return <>
    <Main />
  </>
}

export default connect()(MainContainer)