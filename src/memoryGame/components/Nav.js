import { Link } from "react-router-dom";
import { Routes } from "./routes";

export default function Nav() {

  return (
    <div>
      <nav>
        {Routes.map(({route, title}) => <Link to={route}>{title}  </Link>)}  
      </nav>
    </div>
  )
}