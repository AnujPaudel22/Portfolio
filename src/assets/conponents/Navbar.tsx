import { Navlinks } from "../../Constant/Navlinks"


const Navbar = () => {
  return (
    <div>
    <div className="bg-gray-700 pr-15 text-white sticky">
      <div>
        <nav>
          <ul className="flex gap-10 justify-end">
            {Navlinks.map((item)=>(
              <li key={item.id}><a href={item.link}>{item.name}</a> </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    </div>
  )
}

export default Navbar
