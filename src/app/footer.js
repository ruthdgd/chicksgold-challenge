import styles from "./globals.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section className="payment">
        <div className="payment-cards">
          <Image
            className="payment-cards-img"
            src="/assets/visa-logo.PNG"
            alt="logo visa"
            width={300}
            height={100}
          ></Image>
          <Image
            className="payment-cards-img"
            src="/assets/mastercard-logo.PNG"
            alt="logo mastercard"
            width={150}
            height={100}
          ></Image>
          <Image
            className="payment-cards-img"
            src="/assets/americanexpress-logo.PNG"
            alt="logo american express"
            width={300}
            height={100}
          ></Image>
          <Image
            className="payment-cards-img"
            src="/assets/skrill-logo.PNG"
            alt="logo skrill"
            width={200}
            height={100}
          ></Image>
        </div>
        <div className="payment-coins">
          <Image
            className="payment-coins-img"
            src="/assets/bitverde-logo.PNG"
            alt="logo bitcoin verde"
            width={100}
            height={100}
          ></Image>
          <Image
            className="payment-coins-img"
            src="/assets/ethereum-logo.PNG"
            alt="logo ethereum"
            width={100}
            height={100}
          ></Image>
          <Image
            className="payment-coins-img"
            src="/assets/bitamarillo-logo.PNG"
            alt="logo bitcoin amarillo"
            width={100}
            height={100}
          ></Image>
          <Image
            className="payment-coins-img"
            src="/assets/litecoin-logo.PNG"
            alt="logo litecoin"
            width={100}
            height={100}
          ></Image>
          <p> and 50+ more </p>
        </div>
      </section>
      <section className="information">
        <div className="information-networks">
          <Image
            className="information-networks-img"
            src="/assets/facebook-logo.PNG"
            alt="logo facebook"
            width={100}
            height={100}
          ></Image>
          <Image
            className="information-networks-img"
            src="/assets/instagram-logo.PNG"
            alt="logo instagram"
            width={100}
            height={100}
          ></Image>
          <Image
            className="information-networks-img"
            src="/assets/twitter-logo.PNG"
            alt="logo twitter"
            width={100}
            height={100}
          ></Image>
          <Image
            className="information-networks-img"
            src="/assets/discord-logo.PNG"
            alt="logo discord"
            width={100}
            height={100}
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
              width={700}
              height={300}
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
            <h3>LEGAL</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Copyrigth Policy</p>
          </div>
          <div className="information-stars">
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={100}
              height={100}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={100}
              height={100}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={100}
              height={100}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={100}
              height={100}
            ></Image>
            <Image
              className="information-star-img"
              src="/assets/estrellaverde.jpg"
              alt="logo estrella verde"
              width={100}
              height={100}
            ></Image>
            <p>Trustpilot Reviews</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
