import "./Header.css";

function Header() {
  return (
    <header className="bg-black text-white py-2">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-2"></div>

          <div className="col-8 text-center small">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a
              href="/"
              className="text-white fw-bold text-decoration-underline ms-2"
            >
              ShopNow
            </a>
          </div>

          <div className="col-2 text-end">
            <select className="border-0 bg-black text-white">
              <option>English</option>
              <option>العربية</option>
            </select>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;