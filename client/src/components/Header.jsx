import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <Link to={'/'}>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-500">Ashish</span>
          <span className="text-slate-700">Singh</span>
        </h1>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center ">
          <input
            type="text"
            placeholder="search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64"  // focus: outline-non , it remove the outline on the search box when we click to search something 
          />
          <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4">
          <Link to={'/Home'}>
            <li className="hidden sm:inline text-slate-700 hover:underline" > Home </li>
          </Link>
          <Link to={'/About'} >
            <li className="hidden sm:inline text-slate-700 hover:underline" > About </li>
          </Link>
          <Link to={'/sign-in'}>
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </Link>
    </header>
  );
}
