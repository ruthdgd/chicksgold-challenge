import styles from "./globals.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section className="payment">
        <div className="payment-container">
          <div className="payment-cards">
            <Image
              className="payment-cards-img"
              src="/assets/visa-logo.PNG"
              alt="logo visa"
              width={64}
              height={32}
            ></Image>
            <Image
              className="payment-cards-img"
              src="/assets/mastercard-logo.PNG"
              alt="logo mastercard"
              width={64}
              height={32}
            ></Image>
            <Image
              className="payment-cards-img"
              src="/assets/americanexpress-logo.PNG"
              alt="logo american express"
              width={64}
              height={32}
            ></Image>
            <Image
              className="payment-cards-img"
              src="/assets/skrill-logo.PNG"
              alt="logo skrill"
              width={64}
              height={32}
            ></Image>
          </div>
          <div className="payment-coins">
            <Image
              className="payment-coins-img"
              src="/assets/bitverde-logo.PNG"
              alt="logo bitcoin verde"
              width={24}
              height={24}
            ></Image>
            <Image
              className="payment-coins-img"
              src="/assets/ethereum-logo.PNG"
              alt="logo ethereum"
              width={24}
              height={24}
            ></Image>
            <Image
              className="payment-coins-img"
              src="/assets/bitamarillo-logo.PNG"
              alt="logo bitcoin amarillo"
              width={24}
              height={24}
            ></Image>
            <Image
              className="payment-coins-img"
              src="/assets/litecoin-logo.PNG"
              alt="logo litecoin"
              width={24}
              height={24}
            ></Image>
            <p> and 50+ more </p>
          </div>
        </div>
      </section>
      <section className="information">
        <div className="information-networks">
          <Image
            className="information-networks-img"
            src="/assets/facebook-logo.PNG"
            alt="logo facebook"
            width={40}
            height={40}
          ></Image>
          <Image
            className="information-networks-img"
            src="/assets/instagram-logo.PNG"
            alt="logo instagram"
            width={40}
            height={40}
          ></Image>
          <Image
            className="information-networks-img"
            src="/assets/twitter-logo.PNG"
            alt="logo twitter"
            width={40}
            height={40}
          ></Image>
          <Image
            className="information-networks-img"
            src="/assets/discord-logo.PNG"
            alt="logo discord"
            width={40}
            height={40}
          ></Image>
        </div>
      </section>
      <section className="information">
        <div className="information-grilla">
          <div className="information-list">
          <Image
              className="navbar-logo"
              src="/assets/chick-gold.PNG"
              alt="logo chicks gold"
              width={144}
              height={64}
            />
            <p>support@chicksgold.com</p>
          </div>
          <div className="information-list">
            <h3>Chicks Gold</h3>
            <p>Games</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Sitemap</p>
          </div>
          <div className="information-list">
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div className="information-list">
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Copyrigth Policy</p>
          </div>
          <div className="information-stars">
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={24}
              height={24}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={24}
              height={24}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={24}
              height={24}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={24}
              height={24}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={24}
              height={24}
            ></Image>
            <p>Trustpilot Reviews</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
