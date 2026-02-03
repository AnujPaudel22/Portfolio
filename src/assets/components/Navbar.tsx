import { NavLink } from "react-router-dom"
import { Navlinks } from "../../Constant/Navlinks"

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-primary text-white">
      <nav className="h-15 flex items-center justify-end pr-8">
        <ul className="flex gap-10 text-textcolor">
          {Navlinks.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
