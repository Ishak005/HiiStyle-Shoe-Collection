import "./Nav.css";
import {FiHeart} from 'react-icons/fi'
import {AiOutlinedShoppingCart, AiOutlinedUserAdd} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search product."
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlinedShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlinedUserAdd className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
