import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-col">
            <h3 className="footer-logo">Exclusive</h3>
            <h5>Subscribe</h5>
            <p>Get 10% off your first order</p>

            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button type="button">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-col">
            <h5>Support</h5>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="col-lg-2 col-md-6 footer-col">
            <h5>Account</h5>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-col">
            <h5>Quick Link</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-col">
            <h5>Download App</h5>
            <p className="small-text">Save $3 with App New User Only</p>

            <div className="app-badges">
               <img src="/Qrcode 1.png" alt="qr code" className="qr-img" />
                <div className="store-badges">
                  <img src="/download-appstore.png" alt="app store" />
                </div>
            </div>

            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;