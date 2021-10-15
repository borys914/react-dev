import './modal.css'

const Modal = (props) => {
  const {
    deleteHandleClick,
    closeHandleClick
  } = props
  return(
    <div className = "modal">
      <h1>Are you sure?</h1>
      <hr />
      <button className="modal-btn modal-close" onClick={closeHandleClick}>Close</button>
      <button className="modal-btn modal-delete" onClick={deleteHandleClick}>Ok</button>
    </div>
  )
}
export default Modal