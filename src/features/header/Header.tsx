import "./Header.scss"
import Logo from "features/logo/Logo"
import Avatar from "features/avatar/Avatar"

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h2>Cats Everywhere</h2>
      <Avatar />
    </header>
  )
}

export default Header
