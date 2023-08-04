import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar({ favoritesNum, addedCartNum }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1 className="logo--name">
            Miri<span>Shop</span>
          </h1>
        </Link>
      </div>

      <div className="icons">
        <div className="icon--shop">
          <Link to="/cart" className="icon--shop-link">
            <FontAwesomeIcon
              className="icon--shop-icon"
              icon={faCartShopping}
            />
          </Link>
          {addedCartNum > 0 && (
            <div className="shop--number">{addedCartNum}</div>
          )}
        </div>
        <div className="icon--fav">
          <Link to="/favorites" className="icon--fav-link">
            <FontAwesomeIcon className="icon--fav-icon" icon={faStar} />
          </Link>
          {favoritesNum > 0 && (
            <div className="shop--number">{favoritesNum}</div>
          )}
        </div>
      </div>
    </nav>
  );
}
