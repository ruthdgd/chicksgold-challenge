import styles from "./globals.css";
import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <main>
      <h1>Condimentum consectetur</h1>
      <section className="filters">
        <div className="filters-games">
          <div className="filters-games-select">
            <i class="fi fi-ts-sword-alt"></i>
            <select>
              <option value=""> Select a game</option>
            </select>
          </div>
          <div className="filters-games-search">
            <i class="fi fi-rs-search"></i>
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="filters-items">
          <div className="filters-items-price">
            <i class="icons fi fi-ss-sack"></i>
            <div>
              <p>Price</p>
              <p>All</p>
            </div>
            <i class="fi fi-rr-caret-down"></i>
          </div>
          <div className="filters-items-price">
            <i class="icons fi fi-ss-feather-pointed"></i>
            <div>
              <p>Item type</p>
              <p>All</p>
            </div>
            <i class="fi fi-rr-caret-down"></i>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="cards-filters">
          <p>Showing 20 - from 125</p>
          <div className="cards-filters-items">
            <i class="fi fi-ss-settings-sliders icons"></i>
            <div>
              <p>Sort by</p>
              <p>Featured</p>
            </div>
            <i class="fi fi-rr-caret-down"></i>
          </div>
        </div>
        {/* *****************CARDS********************************** */}
        <div className="cards-grilla">
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD</p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product-head">
              <div className="card-product-state">
                <div className="card-product-sale">
                  <i class="fi fi-ss-bullet"></i>
                  <p> ON SALE</p>
                </div>
                <p className="stock">In stock</p>
              </div>
              <div className="product-stock">
                <p>1</p>
                <div className="product-arrow">
                  <i class="fi fi-br-caret-up"></i>
                  <i class="fi fi-rr-caret-down"></i>
                </div>
              </div>
            </div>
            <Image
              className="card-product-img"
              src="/assets/imagencard1.PNG"
              alt="logo chicks gold"
              width={100}
              height={100}
            ></Image>
            <div className="card-product-logo">
              <p>Blue Partyhat</p>
              <i class="fi fi-ss-dice-d10"></i>
            </div>
            <div className="card-product-price">
              <p>$450.00</p>
              <p className="card-product-price-red">$522.50</p>
            </div>
            <p className="card-product-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="card-product-details">
              <p className="details">DETAILS</p>
              <div className="card-product-cart">
                <p>ADD </p>
                <i class="fi fi-ss-shopping-cart"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
