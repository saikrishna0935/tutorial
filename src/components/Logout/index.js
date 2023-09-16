// Write your code here
import './index.css'

const Logout = props => {
  const {Logout} = props

  return (
    <button type="button" className="logout-button" onClick={Logout}>
      Logout
    </button>
  )
}

export default Logout
