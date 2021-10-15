import './modal.css'
const BlackBack = (props) => {
  const {
    closeHandleClick
  } = props
  return(
    <div className="backback" onClick={closeHandleClick}></div>
  )
}
export default BlackBack