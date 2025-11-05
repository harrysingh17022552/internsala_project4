import { Link } from "react-router-dom";
export default function Header({ user }) {
  //navigation panel to reach different page, used Link to switch the page, it render page without any refresh
  return (
    <header className="w-full bg-black flex gap-4 p-4 items-center justify-between overflow-scroll whitespace-nowrap noscrollbar">
      <div className="flex gap-8 items-center">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/about" className="font-bold">
          About Us
        </Link>
        <Link to="/contact" className="font-bold">
          Contact
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-bold">
          {user.fname} {user.lname}
        </p>
        <div className="p-2 bg-gray-700 rounded-full font-bold">
          {user.fname[0]}
          {user.lname[0]}
        </div>
      </div>
    </header>
  );
}
