import "./Sidebar.scss"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/breeds">Breeds (from API)</Link>
        </li>
        <li>
          <Link to="/facts">Facts</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
