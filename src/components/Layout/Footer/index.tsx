const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <div className="row d-flex">
            <div className="col">
              <div className="title">
                <h3>COMPANY</h3>
              </div>
              <div className="data-links">
                <a href="aboutus/">About Us</a>
                <a href="shop">Shop</a>
                <a href="blogs">Blogs</a>
                <a href="reviews">Rewiews</a>
                <a href="stores">Stores</a>
                <a href="contact">Contact Us</a>
                <a href="faqs">FAQ</a>
              </div>
            </div>
            <div className="col">
              <div className="title">
                <h3>RESOURCES</h3>
                <div className="data-links"></div>
              </div>
              <div className="data-links">
                <a href="#">Style Guide</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Return Policy</a>
                <a href="#">Licensing</a>
                <a href="#">Changelog</a>
              </div>
            </div>
            <div className="col">
              <div className="title">
                <h3>CONNECTED</h3>
              </div>
              <div className="data-links">
                <a href="#/">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">YouTube</a>
                <a href="#">Twitter</a>
              </div>
            </div>
            <div className="col">
              <div className="title">
                <h3>JOIN OUR MAILING LIST</h3>
              </div>
              <div className="data-links">
                <a href="#" disabled>
                  {' '}
                  Stay up-to-date with the latest news, and design.
                </a>
                <form action="#">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Email"
                  />
                  <br />
                  <label htmlFor="egree">
                    <input type="checkbox" name="egree" id="egree" /> I agree to
                    receive promotional emails from Modern Living.
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
