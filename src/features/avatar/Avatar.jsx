import { useState } from "react"
import "./Avatar.scss"
import userLogo from "images/userlogo.jpg"
import Modal from "features/modal/Modal"

const Avatar = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal((prevValue) => !prevValue)

  return (
    <div className="avatar">
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <img src={userLogo} className="avatar__logo" onClick={toggleModal} />
    </div>
  )
}

export default Avatar
