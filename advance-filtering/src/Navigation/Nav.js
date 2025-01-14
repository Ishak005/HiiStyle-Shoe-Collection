import "./Nav.css";
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart , AiOutlineUser } from 'react-icons/ai'

const Nav = ({handleInputChange, query}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search product."
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineUser className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
