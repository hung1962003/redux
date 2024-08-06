
import Button from "../button"
import "./index.scss"
function Modal({isOpen = false, onCancel}) {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
      <div className="modal__overlay" onClick={onCancel}></div>
      <div className="modal__content"></div>
      <Button onClick={onCancel}>Close Modal</Button>    
    </div>
  )
}

export default Modal
