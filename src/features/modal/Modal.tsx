import "./Modal.scss"
import { createPortal } from "react-dom"

interface IModal {
  onClose: () => void
}

const Modal = ({ onClose }: IModal) =>
  createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div>User Info:</div>
        <div>Name: Mark</div>
        <div>City: Moskow</div>
        <div>Register Date: 01.02.2020</div>
        <div>Last seen: 07.31.2023</div>
      </div>
    </div>,
    document.body
  )

export default Modal
