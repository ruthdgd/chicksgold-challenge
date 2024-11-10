import styles from "./globals.css";
import Image from "next/image";

export default function Header() {
  return (
      <header>
        <nav className="navbar">
          <div className="navbar-item">
            <Image
              className="navbar-logo"
              src="/assets/chick-gold.PNG"
              alt="logo chicks gold"
              width={144}
              height={64}
            />
          </div>
          <input type="checkbox" name="menu" className="checkbtn" />
          <i class="fi fi-br-menu-burger navbar-icons"></i>
          <i class="fi fi-br-x navbar-icons"></i>          
          <div className="navbar-menu">
            <ul className="navbarItems">
              <li>CURRENCY <i class="fi fi-br-angle-small-down"></i></li>
              <li>ITEMS <i class="fi fi-br-angle-small-down"></i></li>
              <li>ACCOUNTS <i class="fi fi-br-angle-small-down"></i></li>
              <li>SERVICES <i class="fi fi-br-angle-small-down"></i></li>
              <li>SWAP <i class="fi fi-br-angle-small-down"></i></li>
              <li>SELL <i class="fi fi-br-angle-small-down"></i></li>
            </ul>
            <ul className="navbarItems">
              <li>USD <i class="fi fi-br-angle-small-down"></i></li>
              <li><i class="fi fi-ss-shopping-cart"></i> CART (5)</li>
            </ul>
          </div>
          <button className="navbar-signin">SIGN IN<i class="fi fi-ss-user-add"></i></button>
        </nav>
      </header>

  );
}