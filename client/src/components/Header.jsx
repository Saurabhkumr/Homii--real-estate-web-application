import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header
      className="shadow-md py-6"
      style={{ backgroundColor: "#131110", color: "white" }}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              className="h-10 w-auto object-cover"
              src="./logo2.png"
              alt="logo"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li className="flex items-center">
            <Link
              to="/"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/about"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-10 w-10 object-cover border-2 border-white"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
