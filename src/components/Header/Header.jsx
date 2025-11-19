import './Header.css';

export default function Header() {
  return (
    <>
      <div className="r">
        <div className="pre-header">
          <p className="pre-header-text">
            Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop
            now
          </p>
        </div>
        <div className="container">
          <header className="header">
            <div className="left-side-header">
              <div className="logo">
                <img src="src\assets\Logo.png" alt="CEIN logo" />
              </div>
              <ul className="header-list">
                <li className="header-list-item">
                  <a className="header-list-item-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="header-list-item">
                  <a className="header-list-item-link" href="#">
                    New Arrivals
                  </a>
                </li>
                <li className="header-list-item">
                  <a className="header-list-item-link" href="#">
                    Sales
                  </a>
                </li>
                <li className="header-list-item">
                  <a className="header-list-item-link" href="#">
                    Journel
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-side-header">
              <ul className="header-list">
                <li className="header-list-item">
                  <div className="search">
                    <img src="src\assets\MagnifyingGlass.svg" alt="Поиск" />
                  </div>
                </li>
                <li className="header-list-item">
                  <a className="header-list-item-link" href="#">
                    Stores
                  </a>
                </li>
                <li className="header-list-item">
                  <img src="src\assets\UserCircle.svg" alt="CEIN user svg" />
                </li>
                <li className="header-list-item">
                  <img src="src\assets\Heart.svg" alt="CEIN user svg" />
                  <p>0</p>
                </li>
                <li className="header-list-item">
                  <img src="src\assets\Bag.svg" alt="CEIN user svg" />
                  <p>2</p>
                </li>
              </ul>
            </div>
          </header>
          <div className="input-box">
            <input placeholder="Search" type="text" />
          </div>
        </div>
      </div>

      <div className="hero-banner">
        <div className="containeres">
          <div className="hero-content">
            <div className="hero-text">
              Elevate Your Style <br /> Timeless Fashion, Sustainable <br />{' '}
              Choices
            </div>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
